import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

interface Project {
  name: string;
  url: string;
}

interface PageProps {
  projects: Project[];
}

const HomePage: NextPage<PageProps> = (props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to my{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js
          </a>
          {" "}playground!
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {props.projects.map(p => ( <Card project={p} />))}
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

export default HomePage;

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  return (
    <a
      href={project.url}
      className="mt-6 w-96 rounded-xl text-center border p-6 hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-2xl font-bold">{project.name}</h3>
    </a>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const projects: Project[] = [
    { name: 'Github profile searcher', url: './github' }
  ];

  return {
    props: { projects },
  };
};
