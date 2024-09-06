# Next.js & Upstash RAG-Chat App

This project is a Next.js application that integrates the `@upstash/rag-chat/nextjs` package to allow users to search information on a specified URL and then chat with an AI that provides answers based on the content of that page.

## Features

-   Search for information on a specific URL
-   Ask questions about the content of the specified page
-   Integration with Upstash Redis for chat functionality

## Installation

1. **Clone the repository:**

```bash
  git clone https://github.com/your-username/your-repo.git
  cd your-repo
```

2. **Install dependencies:**

```bash
  npm install
```

3. **Set up environment variables in .env file:**

```bash
   UPSTASH_VECTOR_REST_URL=your_upstash_vector_rest_url
   UPSTASH_VECTOR_REST_TOKEN=your_upstash_vector_rest_token
   QSTASH_TOKEN=your_qstach_token
   UPSTASH_REDIS_REST_URL=your_redis_rest_url
   UPSTASH_REDIS_REST_TOKEN=your_redis_rest_token
```

## Getting Started

1. **Start the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. **Open the app in your browser:**
   Navigate to [http://localhost:3000/https:/en.wikipedia.org/wiki/Algorithm](http://localhost:3000/https:/en.wikipedia.org/wiki/Algorithm) with your browser to see the result and start asking questions on rag-chat.
