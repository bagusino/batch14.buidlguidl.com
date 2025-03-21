import Image from "next/image";
import type { NextPage } from "next";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Address, Balance } from "~~/components/scaffold-eth";

const address = "0xcC6eDeB501BbD8AD9E028BDe937B63Cdd64A1D91";

const socials = [
  {
    name: "GitHub",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.17c-3.338.727-4.033-1.61-4.033-1.61-.547-1.388-1.335-1.757-1.335-1.757-1.09-.747.083-.732.083-.732 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.805 1.304 3.49.997.11-.776.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.125-.303-.535-1.524.116-3.176 0 0 1.007-.322 3.3 1.23a11.49 11.49 0 0 1 3-.404c1.02.004 2.04.138 3 .404 2.29-1.55 3.295-1.23 3.295-1.23.655 1.652.246 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.432.37.815 1.1.815 2.22v3.293c0 .32.192.693.8.575 4.77-1.587 8.21-6.085 8.21-11.388C24 5.67 18.627.297 12 .297z" />
      </svg>
    ),
    url: "https://github.com/Agooni1",
  },
  {
    name: "Telegram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.5 2.5L2.1 10.9c-1.6.7-1.6 1.8-.3 2.2l5.1 1.6 2 6.1c.2.6.4.8.7.8.3 0 .5-.1.7-.4l3.4-3.3 5 3.6c1.1.6 1.9.3 2.3-1l3.4-16.3c.4-1.9-.7-2.9-2.3-2.1zM9.5 13.8l8.8-5.5c.4-.3.8 0 .5.3l-7.5 6.8-.4 4.1z" />
      </svg>
    ),
    url: "https://t.me/Agoogani",
  },
  {
    name: "BuidlGuidl",
    icon: <BuidlGuidlLogo className="w-6 h-6" />,
    url: "https://app.buidlguidl.com/builders/0xcC6eDeB501BbD8AD9E028BDe937B63Cdd64A1D91",
  },
];

const AgooniPage: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center flex-grow pt-10">
        <div className="px-5 text-center ">
          <h1 className="text-2xl font-bold mb-2">Agooni&apos;s Profile</h1>

          <a
            href="https://buidlguidl.com/builders/0xcC6eDeB501BbD8AD9E028BDe937B63Cdd64A1D91"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              src="/agooniavatar.png"
              alt="Avatar"
              width={208}
              height={208}
              className="mx-auto"
              style={{ height: "auto" }}
            />
          </a>
          {address && (
            <div className="flex flex-col items-center gap-4 mb-4">
              <Address address={address} size="3xl" />
              <div className="mt-2 text-lg flex items-center">
                <span className="font-bold">My Riches:</span>
                <Balance address={address} />
              </div>
            </div>
          )}
        </div>

        <div className="text-center px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hey everyone! I recently got interested in the world of crypto and came across Austin Griffith&apos;s
            YouTube channel which led me to Ethereum, SpeedRunEthereum, and now BuidlGuidl. I&apos;ve taken a few coding
            courses, so I understand the basic logic of things, but learning Solidity and exploring this whole SRE and
            buidlguidl ecosystem has been really cool.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {socials.map(({ name, icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default AgooniPage;
