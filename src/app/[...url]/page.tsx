import {ChatWrapper} from '@/components/ChatWrapper';
import {ragChat} from '@/lib/rag-chat';
import {redis} from '@/lib/redis';
import {throttle} from 'lodash';
import {cookies} from 'next/headers';

interface PageProps {
    params: {
        url: string | string[] | undefined;
    };
}

const throttledSadd = throttle(async (key: string, value: string) => {
    await redis.sadd(key, value);
}, 1000);

function reconstructUrl({url}: {url: string[]}) {
    const decodedComponents = url.map((component) => decodeURIComponent(component));
    return decodedComponents.join('/');
}

const Page = async ({params}: PageProps) => {
    const reconstructedUrl = reconstructUrl({url: params.url as string[]});
    const sessionCookie = cookies().get('sessionId')?.value;

    const sessionId = (reconstructedUrl + '--' + sessionCookie).replace(/\//g, '');
    const isAlreadyIndexed = await redis.sismember('indexed-urls', reconstructedUrl);

    const initialMessages = await ragChat.history.getMessages({amount: 10, sessionId});

    if (isAlreadyIndexed) {
        await throttledSadd('indexed-urls', reconstructedUrl);
        await ragChat.context.add({
            type: 'html',
            source: reconstructedUrl,
            config: {chunkOverlap: 50, chunkSize: 200},
        });
    }

    return <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />;
};

export default Page;
