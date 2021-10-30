import React from "react";
// import { OpenSea } from "./icons/OpenSea";
import { Discord } from "./icons/Discord";
import { Github } from "./icons/Github";
import { Twitter } from "./icons/Twitter";

export const Socials = () => {
  const globalClass =
    "fill-current text-[#b6bdca] transform scale-100 transition duration-200";
  const icons = [
    // {
    //   link: "/location",
    //   icon: (
    //     <OpenSea key={0} className={`${globalClass} hover:text-[#2181E2]`} />
    //   ),
    // },
    {
      link: "https://discord.gg/dYfUayrJD2",
      icon: (
        <Discord key={1} className={`${globalClass} hover:text-[#6D82CF]`} />
      ),
    },
    {
      link: "https://github.com/paul-bokelman/8bitfish.com",
      icon: (
        <Github key={2} className={`${globalClass} hover:text-[#ffffff]`} />
      ),
    },
    {
      link: "https://twitter.com/8bitfish_crypto",
      icon: (
        <Twitter key={3} className={`${globalClass} hover:text-[#1EA1F1]`} />
      ),
    },
  ];
  return (
    <div className="flex flex-row items-center z-10">
      {icons.map((item, i) => (
        <a key={i} href={item.link} className="mx-5 cursor-pointer">
          {item.icon}
        </a>
      ))}
    </div>
  );
};
