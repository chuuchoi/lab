import Head from "next/head";
import styles from "../styles/Home.module.css";
import { TestUI } from "../src/home";

export default function Home() {
  return (
    <>
      <TestUI />
      <Head>
        <title>dddd</title>
      </Head>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
