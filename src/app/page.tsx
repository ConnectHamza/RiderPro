import React from "react";
import Homepage from "./Home/homepage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rider Pro</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="This is Rider Pro, a Next.js application." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </>
  );
}
