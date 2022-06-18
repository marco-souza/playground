import { Button } from "@components/buttons";
import { Input } from "@components/inputs";
import { github, GithubUserResponse } from "@packages/api/github";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const GithubSearchPage: NextPage<PageProps> = (props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <div className="w-full my-8 grid grid-cols-1 gap-4">
          <form method="GET">
            <div className="flex">
              <Input
                className="flex-1 text-left"
                name="search"
                placeholder="Type a github username..."
                defaultValue={props.search}
              />
              <Button className="bg-gray-300 hover:bg-neutral-400" type="submit">
                Go
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {props.profile && <Card profile={props.profile} />}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default GithubSearchPage;


interface CardProps {
  profile: GithubUserResponse;
}

const Card = ({ profile }: CardProps) => {
  return (
    <a
      href={profile.url}
      className="mt-6 w-96 rounded-xl text-center border p-6 hover:text-blue-600 focus:text-blue-600"
    >
      <img className="my-8 w-40 h-40 mx-auto rounded-full" src={profile.avatar_url} alt={profile.bio} />
      <h3 className="text-2xl font-bold">{profile.name}</h3>
      <p className="mt-4 text-xl">
        {profile.bio}
      </p>
    </a>
  )
}

interface PageProps {
  search?: string;
  profile?: GithubUserResponse;
}

const DEFAULT_NAME = "marco-souza";

export const getServerSideProps: GetServerSideProps<PageProps> = async (ctx) => {
  const username = (ctx.query.search as string) ?? DEFAULT_NAME;

  const res = await fetch(github.user(username));
  console.log(res.url)
  const profile: GithubUserResponse = await res.json();

  return {
    props: {
      profile: profile,
      search: username,
    },
  };
};
