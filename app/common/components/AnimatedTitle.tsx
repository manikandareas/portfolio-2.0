import { useEffect } from "react";

import styled from "@emotion/styled";

import { useAnimation, motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { firaCode } from "../libs/fonts";

const Title = styled.h2`
  font-size: 3rem;

  font-weight: 600;
`;

const Character = styled(motion.span)`
  display: inline-block;

  font-family: ${firaCode.style.fontFamily};
  margin-right: -0.05em;
`;

export default function AnimatedTitle({ text }: { text: string }) {
  // This would normally be passed into this component as a prop!

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,

    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        ctrls.start("visible");
      }, 500);
    }

    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const characterAnimation = {
    hidden: {
      opacity: 0,

      y: `0.25em`,
    },

    visible: {
      opacity: 1,

      y: `0em`,

      transition: {
        duration: 1,

        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <Title aria-label={text} role="heading">
      {text.split("").map((character, index) => (
        <Character
          className="font-serif text-neutral-50 text-center"
          ref={ref}
          aria-hidden="true"
          key={index}
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
        >
          {character}
        </Character>
      ))}
    </Title>
  );
}
