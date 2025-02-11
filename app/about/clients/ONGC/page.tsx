"use client";

import { useState } from "react";


export default function page() {
  return (
    <div className="mx-auto mt-10 mb-10 relative rounded-2xl from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
      <div className="mx-auto max-w-3xl pb-12 text-center">
        <div className="mb-5 inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
          
          </span>
        </div>  
        <div className="mx-auto max-w-3xl pb-12 text-left">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-2xl mt-4">
          Challenges:
          </h2>
          <li className="text-lg text-indigo-200/65 text-xs">Managing complex operations across upstream and downstream activities.</li>
          <li className="text-lg text-indigo-200/65 text-xs">Ensuring equipment reliability in harsh operating environments.
          </li>
          <li className="text-lg text-indigo-200/65 text-xs">Maintaining regulatory compliance in multiple jurisdictions.
          </li>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-2xl mt-4">
          Contribution:
          </h2>
          <li className="text-lg text-indigo-200/65 text-xs">Asset Management: IoT-enabled monitoring systems track equipment health and schedule predictive maintenance.
          </li>
          <li className="text-lg text-indigo-200/65 text-xs">Regulatory Compliance Tools: Automated reporting features ensure adherence to safety and environmental standards.
          </li>
          <li className="text-lg text-indigo-200/65 text-xs">Cost Control: Real-time cost tracking helps optimize expenditure in exploration and production activities.
          </li>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-2xl mt-4">
          Impact:
          </h2>
          <li className="text-lg text-indigo-200/65 text-xs">Reduced downtime due to predictive maintenance.</li>
          <li className="text-lg text-indigo-200/65 text-xs">Enhanced operational safety and compliance.
          </li>
          <li className="text-lg text-indigo-200/65 text-xs">Lower operational costs through efficient resource allocation.</li>
        </div>
      </div>
    </div>
  );
}

