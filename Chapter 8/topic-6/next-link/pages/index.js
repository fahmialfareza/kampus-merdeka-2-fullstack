import Head from "next/head";
import Jumbotron from "../components/Jumbotron";
import Image from "../components/Image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Jumbotron />
      <Image />
    </>
  );
}