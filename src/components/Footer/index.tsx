"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gradient-to-r from-blue-500 to-green-500 pt-16 dark:bg-gray-800 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Brand Section */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <h2 className="font-bold text-xl text-white">Kuza Talanta Mtaani</h2>
              </Link>
              <p className="mb-9 text-base leading-relaxed text-white">
                Organizing thrilling football tournaments for teams across all levels. Join us and be part of the excitement!
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-white">
                Useful Links
              </h2>
              <ul>
                <li>
                  <Link
                    href="/fixtures"
                    className="mb-4 inline-block text-base text-white duration-300 hover:text-yellow-300"
                  >
                    Fixtures
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teams"
                    className="mb-4 inline-block text-base text-white duration-300 hover:text-yellow-300"
                  >
                    Teams
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="mb-4 inline-block text-base text-white duration-300 hover:text-yellow-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-white">
                Support
              </h2>
              <ul>
                <li>
                  <Link
                    href="/support"
                    className="mb-4 inline-block text-base text-white duration-300 hover:text-yellow-300"
                  >
                    Support Tickets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="mb-4 inline-block text-base text-white duration-300 hover:text-yellow-300"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white opacity-30"></div>
        <div className="py-8">
          <p className="text-center text-base text-white">
            &copy; {new Date().getFullYear()} Kuza Talanta Mtaani. All Rights Reserved. Software By +254728674821
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
