import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="dark:hidden" />
      <Image {...rest} src={srcDark} className="hidden dark:block" />
    </>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100svh] p-20 gap-16">
      <main className="flex flex-col gap-9 grid-order-2">
        <ThemeImage
          className="dark:invert"
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />
        <ol className="pl-0 m-0 tracking-[-0.01em] leading-8 text-sm list-inside list-decimal font-mono">
          <li>
            Get started by editing{" "}
            <code className="font-bold rounded-sm px-1 py-0.5 font-mono bg-black/5 dark:bg-white/5">
              apps/web/app/page.tsx
            </code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex w-full gap-4">
          <a
            href="https://vercel.com/new/clone?demo-description=Learn+to+implement+a+monorepo+with+a+two+Next.js+sites+that+has+installed+three+local+packages.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4K8ZISWAzJ8X1504ca0zmC%2F0b21a1c6246add355e55816278ef54bc%2FBasic.png&demo-title=Monorepo+with+Turborepo&demo-url=https%3A%2F%2Fexamples-basic-web.vercel.sh%2F&from=templates&project-name=Monorepo+with+Turborepo&repository-name=monorepo-turborepo&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fturborepo%2Ftree%2Fmain%2Fexamples%2Fbasic&root-directory=apps%2Fdocs&skippable-integrations=1&teamSlug=vercel&utm_source=create-turbo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium gap-2 dark:bg-white bg-black text-white dark:text-black border border-black/5 dark:border-white transition-colors flex justify-center items-center py-3 px-8 rounded-full"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://turbo.build/repo/docs?utm_source"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium dark:text-white border dark:hover:bg-white/5 hover:border-transparent hover:bg-black/5 dark:hover:border-transparent border-black/10 dark:border-white/10 transition-colors flex justify-center items-center py-3 px-8 rounded-full"
          >
            Read our docs
          </a>
        </div>
        <Button
          appName="web"
          className="font-medium dark:text-white border border-black/10 dark:border-white/10 transition-colors flex justify-center items-center p-3 rounded-full"
        >
          Open alert
        </Button>
      </main>
      <footer className="flex gap-7 justify-center">
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 hover:underline underline-offset-4"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://turbo.build?utm_source=create-turbo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 hover:underline underline-offset-4"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to turbo.build →
        </a>
      </footer>
    </div>
  );
}
