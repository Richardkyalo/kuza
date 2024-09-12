"use client";
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
// import 'swiper/swiper.min.css.'; // Import Swiper styles

const teams = [
  {
    name: 'Team A',
    logo: '/images/teamA.jpeg',
    description: 'A dynamic team with a strong track record.',
    colors: '#F9A825',
  },
  {
    name: 'Team B',
    logo: '/images/teamB.jpeg',
    description: 'A versatile team known for their strategic play.',
    colors: '#1E88E5',
  },
  {
    name: 'Team C',
    logo: '/images/teamC.jpeg',
    description: 'A versatile team known for their strategic play.',
    colors: '#1E88E5',
  },
  {
  name: 'Team C',
  logo: '/images/teamC.jpeg',
  description: 'A versatile team known for their strategic play.',
  colors: '#1E88E5',
},{
    name: 'Team C',
    logo: '/images/teamC.jpeg',
    description: 'A versatile team known for their strategic play.',
    colors: '#1E88E5',
  },{
    name: 'Team C',
    logo: '/images/teamC.jpeg',
    description: 'A versatile team known for their strategic play.',
    colors: '#1E88E5',
  },
  // Add more teams here
];

const TeamCard = ({ team }) => (
  <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group min-w-[250px] max-w-[300px] mx-4">
    <div className="relative">
      <Image src={team.logo} alt={`${team.name} Logo`} width={300} height={200} className="object-cover w-full h-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
        {team.name}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
      <p className="text-base text-gray-700 dark:text-gray-300">{team.description}</p>
      <div className="mt-4">
        <button className="py-2 px-4 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

const TeamsSection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <SectionTitle
        title="Meet the Teams"
        paragraph="Discover the exciting teams competing in this tournament. Each team brings its unique flair and skill to the field."
        center
      />
      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={'auto'} // Number of slides visible at once
          loop={true} // Infinite loop mode
          pagination={{ clickable: true }} // Pagination controls
          navigation // Navigation arrows
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {teams.map((team, index) => (
            <SwiperSlide key={index}>
              <TeamCard team={team} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamsSection;
