import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Agricultural Flexible Payment Application | AgriFlexPay",
  description: "Learn about AgriFlexPay and our mission to revolutionize agricultural payments.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <section id="about" className="py-16 md:py-20 lg:py-28 bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
                Welcome to AgriFlexPay
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Transforming agricultural payments for a sustainable future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <img
                  src="/images/hero/group.jpg"
                  alt="AgriFlexPay Farmers"
                  className="rounded-lg shadow-lg fluid md:h-96"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
                  At AgriFlexPay, we are dedicated to providing farmers with flexible and reliable payment solutions that empower agricultural communities worldwide. We strive to foster financial inclusion and sustainability in agriculture.
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Our vision is to become the leading platform for agricultural payments, enhancing productivity, efficiency, and transparency across the agricultural value chain. We envision a future where farmers have seamless access to financial services tailored to their needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400">
                The passionate individuals driving AgriFlexPay forward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <img
                  src="/images/hero/team.jpeg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 object-cover shadow-lg mb-4"
                />
                <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                  John Doe
                </h4>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  CEO & Founder
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/hero/team.jpeg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 object-cover shadow-lg mb-4"
                />
                <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                  Jane Smith
                </h4>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  COO
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/hero/team.jpeg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 object-cover shadow-lg mb-4"
                />
                <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                  Michael Johnson
                </h4>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  CTO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

