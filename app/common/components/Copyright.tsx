import { soraSans } from "../libs/fonts";
import { cn } from "../libs/utils";

const Copyright = () => {
  return (
    <div
      className={cn(
        soraSans.className,
        "flex items-center gap-1 text-sm py-1 px-3 text-neutral-600 dark:text-neutral-600"
      )}
    >
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span>with</span>
      <span className="text-red-500 animate-pulse">❤</span>
      <span>by</span>
      <a
        href="http://github.com/aulianza/aulianza.id"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hover:dark:text-neutral-400 cursor-pointer">
          manik
        </span>
      </a>
    </div>
  );
};

export default Copyright;
