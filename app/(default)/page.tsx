export const metadata = {
  title: "SimpleTech",
  description: "Simplifying Tech",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/products";
import Features from "@/components/features";
import Clients from "@/components/clients";
import Cta from "@/components/cta";
import Whyerp from "@/components/Whyerp";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Clients />
      <Cta />
    </>
  );
}
