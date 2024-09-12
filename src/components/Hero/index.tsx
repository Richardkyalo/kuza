import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/kuza1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Make the hero section full height
      }}
    >
      <section
        id="home"
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold leading-tight mb-6 md:text-5xl md:leading-tight">
              Kuza Talanta Football Tournament
            </h1>
            <p className="text-lg mb-8 md:text-xl">
              Empowering young talent with a platform to showcase their football skills.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-700 px-8 py-4 text-base font-semibold text-white hover:bg-blue-800 transition duration-300 ease-in-out"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
