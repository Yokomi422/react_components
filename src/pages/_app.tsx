import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <div className="bg-sky-50  min-h-screen w-full">
      <Head>
        <title>Next.js + TypeScript + Tailwind CSS practice</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
