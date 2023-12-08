import clsx from "clsx";

import { Button } from "@/app/common/components/ui/button";
import { SOCIAL_MEDIA } from "@/app/common/constant/menu";

const SocialMediaList = () => {
  const handleAction = (link: string) => window.open(link, "_blank");

  return (
    <div className="space-y-5 pb-2">
      <h3 className="text-lg font-medium">Find me on social media</h3>
      <div className="flex flex-col md:flex-row justify-between gap-3">
        {SOCIAL_MEDIA?.map((item, index: number) => (
          <Button
            className={clsx(
              "w-full md:w-1/5 flex justify-center items-center hover:scale-105 transition-all duration-300 text-white gap-2",
              item?.className
            )}
            key={index}
            onClick={() => handleAction(item?.href)}
            data-umami-event={item?.eventName}
          >
            <i>{item?.icon}</i> <span> {item?.title}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaList;
