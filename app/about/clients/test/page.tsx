"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";
import ClientImg01 from "@/public/logo/amul.png";
import ClientImg02 from "@/public/logo/bajaj.png";
import ClientImg03 from "@/public/logo/hindustan-unilever-logo.png";
import ClientImg04 from "@/public/logo/mother-dairy.png";
import ClientImg05 from "@/public/logo/nestle.png";
import ClientImg06 from "@/public/logo/ongc.png";
import ClientImg07 from "@/public/images/client-logo-07.svg";
import ClientImg08 from "@/public/images/client-logo-08.svg";
import ClientImg09 from "@/public/images/client-logo-09.svg";

const testimonials = [
  {
    img: TestimonialImg05,
    clientImg: ClientImg05,
    name: "Miriam E.",
    company: "Nestle",
    content:
      "With a focus on compliance and quality management, our ERP solution aids Nestlé in maintaining consistency across its production facilities.",
    categories: [1, 3, 5],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Nestle 
          </h2>
        </div>

        <div>
          {/* Buttons */}

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} category={category}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    clientImg: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Image src={testimonial.clientImg} height={36} alt="Client logo" />
        </div>
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-0">
        </div>
        <div className="mx-auto max-w-3xl pb-12 text-left">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-2xl">
          Why ERP and Management Software Matters?  
          </h2>
          <p className="text-lg text-indigo-200/65 text-xs">
          ERP and management software serve as the backbone of modern enterprises, enabling them to coordinate various functions such as operations, finance, supply chain, human resources, and customer relationships. Without an efficient system, businesses often struggle with:
          </p>
          <li className="text-lg text-indigo-200/65 text-xs">Inefficiencies: Manual processes consume time and resources, leaving little room for strategic initiatives.</li>
          <li className="text-lg text-indigo-200/65 text-xs">
          Data Silos: Disconnected systems make it challenging to access and analyze critical information. 
          </li>
          <li className="text-lg text-indigo-200/65 text-xs">Human Errors: Repetitive tasks increase the likelihood of mistakes, impacting productivity and profitability.</li>
          <li className="text-lg text-indigo-200/65 text-xs">Scalability Issues: As businesses grow, outdated systems fail to support the increased complexity of operations.</li>
          
          <p className="text-lg text-indigo-200/65 text-xs">
          At Simplertechnologies, we address these pain points by providing comprehensive ERP and management software solutions that streamline workflows, integrate data, and automate routine tasks. Our tools not only enhance operational efficiency but also provide actionable insights, enabling businesses to make informed decisions with confidence.
          </p>
      </div>
      </div>
    </article>
  );
}
