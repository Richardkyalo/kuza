import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Kuza Talanta Football Tournament",
  description: "Learn about the Kuza Talanta Football Tournament and our mission to nurture football talent.",
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="about"
        className="relative py-16 md:py-20 lg:py-28 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/kuza1.jpg')",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mt-16 mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeInUp">
              Kuza Talanta Football Tournament
            </h2>
            <p className="text-lg md:text-xl text-white opacity-80 animate-fadeIn delay-200">
              Nurturing young football talent for a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg h-96 w-full bg-gray-200 dark:bg-gray-700">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="/images/kuza1.jpg"
                  alt="Kuza Talanta Teams"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all hover:-translate-y-2">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                To create a platform that brings young football talent together, providing them with opportunities to grow, compete, and shine.
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our vision is to become the premier youth football tournament, inspiring and developing future football stars across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white dark:bg-gray-800 py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 animate-fadeInUp">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The passionate team behind Kuza Talanta Football Tournament.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team member 1 */}
            <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <Image
                width={150}
                height={150}
                src="/images/jay.jpg"
                alt="Alex Mwaura"
                className="rounded-full w-32 h-32 object-cover shadow-md mb-4 transition-transform duration-500 hover:scale-110"
              />
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Jay Mash
              </h4>
              <p className="text-base text-gray-700 dark:text-gray-300">
                Tournament Director
              </p>
            </div>
            {/* Team member 2 */}
            <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <Image
                width={150}
                height={150}
                src="/images/jay.jpg"
                alt="Sarah Wambui"
                className="rounded-full w-32 h-32 object-cover shadow-md mb-4 transition-transform duration-500 hover:scale-110"
              />
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Jay Mash
              </h4>
              <p className="text-base text-gray-700 dark:text-gray-300">
                Operations Manager
              </p>
            </div>
            {/* Team member 3 */}
            <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <Image
                width={150}
                height={150}
                src="/images/jay.jpg"
                alt="Peter Kiplagat"
                className="rounded-full w-32 h-32 object-cover shadow-md mb-4 transition-transform duration-500 hover:scale-110"
              />
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Jay Mash
              </h4>
              <p className="text-base text-gray-700 dark:text-gray-300">
                Head Coach
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
