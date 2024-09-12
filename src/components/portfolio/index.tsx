import React from 'react';

function PortfolioItem({ image, image2, title, title2, message, alignLeft }) {
  return (
    <div className={`flex flex-col md:flex-row ${alignLeft ? 'md:flex-row-reverse' : ''} justify-center py-8 md:py-12`}>
      <div className="md:w-1/2 md:order-1">
        <img
          src={image}
          alt="Portfolio Item"
          className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="md:w-1/2 md:order-2 px-6 md:px-12 flex flex-col justify-center">
        <div className="flex items-center mb-4">
          {image2 && (
            <img
              src={image2}
              alt="logo"
              className="w-8 h-8 rounded-full mr-3"
            />
          )}
          <p className="text-lg font-semibold text-blue-600">{title}</p>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{title2}</h3>
        <p className="text-base text-gray-700 mb-6">{message}</p>
        <button className="bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
          See More
        </button>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Kuza Talanta Football Tournament
        </h2>
        <p className="text-lg text-gray-600">
          Celebrating Football Talent and Excitement
        </p>
      </div>
      <div className="max-w-7xl w-full px-4">
        <PortfolioItem
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrlVpyvzPEdd0yrBKuD5uPIWK0-49wPanug&s"
          image2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyb4uMeL9MoQ3-oOL4vgcJR3qT5ij9_xvUng&s"
          title="Team Performance"
          title2="Match Highlights"
          message="Catch the latest action from top teams as they compete in the Kuza Talanta Football Tournament."
          alignLeft={true}
        />
        <PortfolioItem
          image="https://www.shutterstock.com/image-vector/olympic-games-tokyo-2021-soccer-260nw-1099089725.jpg"
          image2="/images/kuza.jpg"
          title="Top Scorers"
          title2="Player Rankings"
          message="See the standout players making a difference on the field."
          alignLeft={false}
        />
        <PortfolioItem
          image="/images/kuza.jpg"
          image2="/images/kuza.jpg"
          title="Championship"
          title2="Final Match"
          message="Witness the excitement as teams battle it out for the championship trophy."
          alignLeft={true}
        />
      </div>
    </div>
  );
}
