'use client';
import {Message, useChat} from 'ai/react';
import {ChatInput} from './ChatInput';
import {Messages} from './Messages';

export const ChatWrapper = ({sessionId, initialMessages}: {sessionId: string; initialMessages: Message[]}) => {
    const {messages, handleInputChange, handleSubmit, input, setInput} = useChat({
        api: '/api/chat-stream',
        body: {sessionId},
        initialMessages,
    });

    return (
        <div className='relative min-h-screen bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2'>
            <div className='flex-1 text-black bg-zinc-800 justify-between flex flex-col'>
                <Messages messages={messages} />
            </div>

            <ChatInput
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                input={input}
                setInput={setInput}
            />
        </div>
    );
};
