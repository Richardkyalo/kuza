'use client';
import NewsLatterBox from "./NewsLatterBox";
import AddressAPI from "../../app/api/address";
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import Select from 'react-select';

const Contact = () => {
  const [address, setAddress] = useState<any>([]);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [password, setPassword] = useState<any>(null);

  useEffect(() => {
  ( async () => {
    const data = await AddressAPI.getAddress();
    if(data){
    setAddress(data.data);
    }
    else{
    }
  })();
  
  }, []);
  console.log(Math.random().toString(36).slice(2, 10));

  const handleSubmit = async (e:any)=>{
    e.preventDefault();
    setPassword(Math.random().toString(36).slice(2, 10));
    setData(
      {...data,
      address_id: selectedAddress,
      password: password,
      passwordConfirmation:password,
      agency_uuid:"9c42319e-1d53-480c-ab95-6b937d1df335"
    })
    console.log("data", data);
    }


  

  return (
    <section id="request-project" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Please fill out the form
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                This enable our team to know who they are reaching out
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="First name"
                        onBlur={(e) => {
                          setData({...data, fname: e.target.value});
                        }}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-green-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-green-500 dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last name"
                        onBlur={(e) => {
                          setData({...data, lname: e.target.value});
                        }}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-green-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-green-500 dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        onBlur={(e) => {
                          setData({...data, email: e.target.value});
                        }}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-green-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-green-500 dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        ID Number
                      </label>
                      <input
                        type="number"
                        placeholder="Enter your ID number"
                        onBlur={(e) => {
                          setData({...data, id_number: +e.target.value});
                        }}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-green-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-green-500 dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        placeholder="Enter valid phone number"
                        onBlur={(e) => {
                          setData({...data, phone: +e.target.value});
                        }}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-green-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-green-500 dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="project-name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        What&apos;s the name of your village?
                      </label>
                     <div className="bg-inherit">
                     <Select placeholder="Select an option" options={
                       ((address||[]).map((item: any) => {
                          return (
                            {value: item.id, label: `${item?.village} in ${item?.sub_location} Sub-location`}
                          )
                        })) 
                       }
                        onChange={(e:any) => {
                          setSelectedAddress(e.value);
                        }}
                       className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-green-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-green-500 dark:focus:shadow-none"
                       />
                     </div>

                      
                    </div>
                  </div>
                  <div className="px-4">
                    <button onClick={(e)=>handleSubmit(e)} className="rounded-lg btn btn-sm bg-green-700 px-9 py-4 text-base font-medium dark:text-white light:text-dark shadow-submit duration-300  dark:shadow-submit-dark">
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
