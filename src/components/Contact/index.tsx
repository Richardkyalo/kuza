'use client';
import NewsLatterBox from "./NewsLatterBox";
import AddressAPI from "../../app/api/address";
import { useEffect, useState } from "react";
import Select from 'react-select';
import Image from "next/image";

const Contact = () => {
  const [address, setAddress] = useState<any>([]);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [password, setPassword] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const response = await AddressAPI.getAddress();
      if (response) {
        setAddress(response.data);
      }
    })();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const generatedPassword = Math.random().toString(36).slice(2, 10);
    setPassword(generatedPassword);
    setData({
      ...data,
      address_id: selectedAddress,
      password: generatedPassword,
      passwordConfirmation: generatedPassword,
      agency_uuid: "9c42319e-1d53-480c-ab95-6b937d1df335"
    });
    console.log("data", data);
  };

  return (
    <section id="request-project" className="relative py-16 md:py-20 lg:py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/kuza.jpg" // Replace with your image path
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-[-1]"
        />
      </div>
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 px-4 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Register Your Team
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-6">
                    <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-2">
                      Team Name
                    </label>
                    <input
                      type="text"
                      id="teamName"
                      placeholder="Enter Team Name"
                      onBlur={(e) => setData({ ...data, teamName: e.target.value })}
                      className="w-full border border-gray-300 rounded-md p-3 text-base text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <input
                      type="text"
                      id="gender"
                      placeholder="Enter Gender"
                      onBlur={(e) => setData({ ...data, gender: e.target.value })}
                      className="w-full border border-gray-300 rounded-md p-3 text-base text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="coachName" className="block text-sm font-medium text-gray-700 mb-2">
                      Coach Name
                    </label>
                    <input
                      type="text"
                      id="coachName"
                      placeholder="Enter Coach's Name"
                      onBlur={(e) => setData({ ...data, coachName: e.target.value })}
                      className="w-full border border-gray-300 rounded-md p-3 text-base text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      placeholder="Enter Contact Number"
                      onBlur={(e) => setData({ ...data, contact: e.target.value })}
                      className="w-full border border-gray-300 rounded-md p-3 text-base text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="playersNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Players
                    </label>
                    <input
                      type="number"
                      id="playersNumber"
                      placeholder="Enter Number of Players"
                      onBlur={(e) => setData({ ...data, playersNumber: +e.target.value })}
                      className="w-full border border-gray-300 rounded-md p-3 text-base text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  {/* <div className="mb-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <Select
                      placeholder="Select Address"
                      options={(address || []).map((item: any) => ({
                        value: item.id,
                        label: `${item?.village} in ${item?.sub_location} Sub-location`
                      }))}
                      onChange={(e: any) => setSelectedAddress(e.value)}
                      className="w-full border border-gray-300 rounded-md"
                    />
                  </div> */}
                  <div className="w-full mb-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full md:w-1/3 px-4">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
