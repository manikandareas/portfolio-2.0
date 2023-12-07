import Introduction from "./_component/Introduction";
import Skills from "./_component/Skills";
import { Separator } from "./common/components/ui/separator";

export default function Home() {
  return (
    <div data-aos="fade-up" className="space-y-6 p-8">
      <Introduction />
      <Separator />
      <Skills />
    </div>
  );
}
