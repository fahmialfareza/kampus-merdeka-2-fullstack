import Head from "next/head";
import LoginForm from "../components/LoginForm";

export default function login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginForm />
    </>
  );
}