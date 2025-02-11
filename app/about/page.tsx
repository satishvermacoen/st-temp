"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image from "next/image";
import Highlighttech from "@/components/highlighttech";

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="mb-5 inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                About Us.
              </span>
            </div>
          <Image className=" mb-4 rounded-lg" priority src="/erp-1.jpg" height={960*2} width={1920*2} alt="ERP" />
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-2xl">
          Simplertechnologies: Pioneering ERP and Management Software Solutions for Modern Businesses  
          </h2>
          <p className="text-lg text-indigo-200/65 text-xs">
          In the ever-evolving landscape of technology, businesses today face unprecedented challenges and opportunities. To thrive in this dynamic environment, enterprises need innovative tools that simplify their operations and empower them to achieve more. At Simplertechnologies, we specialize in developing ERP (Enterprise Resource Planning) and management software solutions designed to meet the unique needs of modern businesses. Our mission is to deliver intuitive, scalable, and accessible tools that help companies optimize their processes, enhance productivity, and focus on their core objectives.
          </p>
        </div>
        <div className="mx-auto max-w-3xl pb-12 text-left">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-2xl">
          Our Vision: Simplifying Complexity Through Technology  
          </h2>
          <p className="text-lg text-indigo-200/65 text-xs">
          Simplertechnologies was established with a singular goal: to simplify the complexities of business management through cutting-edge ERP and management software solutions. We recognize that every business is unique, with its own set of challenges and requirements. Therefore, we focus on creating solutions that are not only powerful but also adaptable, ensuring they cater to the diverse needs of industries across the spectrum.
          </p>
          <p className="text-lg text-indigo-200/65 text-xs">
          Our vision extends beyond merely developing software. We aim to create an ecosystem where technology acts as an enabler, allowing businesses to innovate, grow, and succeed without being bogged down by operational inefficiencies. By harnessing the latest advancements in technology, such as artificial intelligence, machine learning, and cloud computing, we ensure that our clients remain ahead of the curve in an increasingly competitive marketplace.
          </p>
        </div>
        <div className="mx-auto max-w-3xl pb-12 text-left">
          <Highlighttech />
        </div>
        <div className="mx-auto max-w-3xl pb-12 text-left">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-2xl">
          Why ERP and Management Software Matters?  
          </h2>
          <p className="text-lg text-indigo-200/65 text-xs">
          ERP and management software serve as the backbone of modern enterprises, enabling them to coordinate various functions such as operations, finance, supply chain, human resources, and customer relationships. Without an efficient system, businesses often struggle with:
          </p>
          <li className="text-lg text-indigo-200/65 text-xs">Inefficiencies: Manual processes consume time and resources, leaving little room for strategic initiatives.</li>
          <li className="text-lg text-indigo-200/65 text-xs">Data Silos: Disconnected systems make it challenging to access and analyze critical information. </li>
          <li className="text-lg text-indigo-200/65 text-xs">Human Errors: Repetitive tasks increase the likelihood of mistakes, impacting productivity and profitability.</li>
          <li className="text-lg text-indigo-200/65 text-xs">Scalability Issues: As businesses grow, outdated systems fail to support the increased complexity of operations.</li>
          <p className="text-lg text-indigo-200/65 text-xs">
          At Simplertechnologies, we address these pain points by providing comprehensive ERP and management software solutions that streamline workflows, integrate data, and automate routine tasks. Our tools not only enhance operational efficiency but also provide actionable insights, enabling businesses to make informed decisions with confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

