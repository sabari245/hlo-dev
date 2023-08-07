import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 min-h-screen">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Got some last minute work.&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Don't worry&nbsp;</h1>
        <br />
        <h1 className={title()}>we got you covered</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          We build beautiful & functional software under one day
          <span className="text-default-400">*</span>.
        </h2>
      </div>

      <div className="flex gap-6">
        <Button
          as={NextLink}
          href={siteConfig.links.docs}
          color="primary"
          radius="full"
          variant="shadow"
          className="font-medium"
          endContent={<ChevronRight />}
        >
          Get a quote
        </Button>
        <Button
          as={NextLink}
          href={siteConfig.links.github}
          variant="bordered"
          radius="full"
          endContent={<ArrowUpRight />}
        >
          Our Works
        </Button>
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
