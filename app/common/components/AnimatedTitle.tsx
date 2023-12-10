import { delay } from "framer-motion";
import TypeIt from "typeit-react";

export default function AnimatedTitle({
  action,
}: {
  action: (value: React.SetStateAction<boolean>) => void;
}) {
  return (
    <TypeIt
      options={{
        afterComplete: () => delay(() => action(false), 1000),
      }}
      getBeforeInit={(instance) => {
        instance
          .type("Viti Andares", { delay: 100 })
          .move(-1, { delay: 100 })
          .type("a", { delay: 400 })
          .move(-8, { delay: 100 })
          .delete(1)
          .type("o", { delay: 100 })
          .move(null, { to: "END" })
          .type('<em><strong class="manik"> Malik.</strong></em>', {
            speed: 100,
          })
          .pause(500)
          .delete(".manik", { delay: 800, instant: true })
          .type('<em><strong class="manik"> Manik.</strong></em>', {
            speed: 100,
          });
        return instance;
      }}
    />
  );
}
