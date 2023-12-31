import React from "react";

type Props = {};

export default function Introduction({}: Props) {
  return (
    <section className="bg-cover bg-no-repeat ">
      <div className="space-y-3">
        <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
          <h1>Hi, I&apos;m Vito</h1>{" "}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <div className="space-y-4">
          <ul className="flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
            <li>Still in the learning stage</li>
            <li>
              Based in Samarinda, Indonesia <span className="ml-1">🇮🇩</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="leading-[1.8] md:leading-loose mt-6 text-neutral-800 dark:text-neutral-300">
        Experienced in Frontend development, particularly focused on crafting
        pixel-perfect web experiences. Proficient in JavaScript and specialized
        in various aspects of web technologies. Flourishes in collaborative team
        environments, dedicated to delivering web applications that are not only
        efficient and scalable but also visually captivating.
      </p>
    </section>
  );
}
