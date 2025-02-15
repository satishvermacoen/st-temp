import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/about/products/healthcare"
                >
                  Healthcare
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="about/products/retails"
                >
                  Retails & E-commerce
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="about/products/factories"
                >
                  Factories & Manufacturing
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="about/products/hospitality"
                >
                  Hotels & Hospitality
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/about"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/careers"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/terms"
                >
                  Terms
                </a>
              </li>
              </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Clients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/about/clients"
                >
                  Healthcare
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/about/clients"
                >
                  Retails & E-commerce
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/about/clients"
                >
                  Factories & Manufacturing
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/about/clients"
                >
                  Hotels & Hospitality
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <a href="/offices">
            <h3 className="text-sm font-medium text-gray-200">
              Offices:
            </h3>
            </a>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500" href="/offices"
                >
                  India
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500" href="/offices"
                >
                 USA 
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500" href="/offices"
                >
                  UK
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500" href="/offices"
                >
                Germany
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © Simplertechnologies.in
                <span className="text-gray-700"> · </span>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"

                >
                  2025
                </a>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Linkedin"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 245.97 245.97"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M249.83,27H50.18A23.16,23.16,0,0,0,27,50.17V249.82A23.16,23.16,0,0,0,50.18,273H249.83A23.16,23.16,0,0,0,273,249.82V50.17A23.16,23.16,0,0,0,249.83,27ZM110.41,213.85H83.48V126h26.93Zm-2-101.16A16.08,16.08,0,0,1,97,116.87a16.28,16.28,0,0,1-11.57-4.18A13.49,13.49,0,0,1,81,102.38a13.72,13.72,0,0,1,4.48-10.47A16.32,16.32,0,0,1,97,87.74a16.12,16.12,0,0,1,11.42,4.17,13.72,13.72,0,0,1,4.48,10.47A13.49,13.49,0,0,1,108.44,112.69ZM217.3,213.85H190.54V166.14q0-8.8-4.57-13.69t-12.28-4.88q-7.71,0-12.28,4.88t-4.56,13.69v47.71H129.93V126h26.92v11.65a28.45,28.45,0,0,1,11-9.21,35,35,0,0,1,15.59-3.39q15.42,0,24.63,10t9.21,27.47Z" transform="translate(-27.02 -27.01)" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
