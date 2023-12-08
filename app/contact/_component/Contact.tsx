"use client";
import { Separator } from "@/app/common/components/ui/separator";

import ContactForm from "./ContactForm";
import SocialMediaList from "./SocialMediaList";

const Contact = () => {
  return (
    <section className="space-y-6">
      <SocialMediaList />
      <Separator />
      <div className="space-y-5">
        <h3 className="text-lg font-medium">Or send me a message</h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
