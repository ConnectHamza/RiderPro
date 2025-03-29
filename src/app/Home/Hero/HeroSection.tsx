"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../../../components/Button/Button";
import HeroIMG1 from "../../../../public/Assets/home/Hero-IMG1.webp";
import HeroIMG2 from "../../../../public/Assets/home/Hero-IMG2.webp";
import Image from "next/image";
import { isAndroid, isIOS } from "react-device-detect";


interface ShopFilter {
  name: string;
  id: string;
}

const HeroSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("charging");
  const [shopFilters, setShopFilters] = useState<ShopFilter[]>([]);
  const [selectedService, setSelectedService] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchShopFilters = async () => {
      
  //     try {
  //       const response = await axios.get(
  //         "https://api.riderpro.io/mch/v3/Shop/ServicesFilter",
  //         {
  //           params: {
  //             Lat: 24.66,
  //             Lng: 66.98,
  //           },
  //           headers: {
  //             "Content-Type": "application/json",
  //             "X-API-KEY": "hXBpS2V5TWlkZhxld2FyZQ==",
  //           },
  //         }
  //       );

  //       console.log('API Response:', response);

  //       if (response.data && response.data.result && Array.isArray(response.data.result.shopFilters)) {
  //         console.log('Shop Filters:', response.data.result.shopFilters);
  //         setShopFilters(response.data.result.shopFilters);
  //       } else {
  //         console.error("Invalid API response structure");
  //         setError("Invalid API response structure");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching shop filters:", error);
  //       setError("Failed to load services. Please try again later.");
  //     } finally {
  //       setLoading(false)
  //     }
  //   };

  //   fetchShopFilters();
  // }, []);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
    console.log("Selected Service:", event.target.value);
  };

  const getAppLink = () => {
    if (isAndroid) {
      return "https://play.google.com/store/apps/details?id=rider.pro&hl=en";
    } else if (isIOS) {
      return "https://apps.apple.com/us/app/rider-pro/id6476922000";
    }
    return "#";
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="w-full md:h-[90vh] h-auto flex justify-center py-10 container hero-banner">
      <div className="w-lg flex items-center md:flex-row flex-col gap-4 md:px-10 px-5 justify-between">
        <div className="md:w-[50%] fade-right">
          <h2 className="heading2 text-black">
            Find Nearby Mechanics <br />
            & Charging Stations
          </h2>

          {/* Error message display */}
          {/* {error && <div className="text-red-500 mb-4">{error}</div>} */}

          <div className="md:inline-flex gap-4 bg-gray-100 md:px-5 px-3 py-3 rounded-t-20 rounded-b-20 items-center mt-4">
            {/* Radio buttons */}
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="service"
                value="charging"
                checked={selectedOption === "charging"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Charging Stations
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="service"
                value="mechanics"
                checked={selectedOption === "mechanics"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Mechanics
            </label>
          </div>

          {/* <div className="md:flex gap-5">

            <div className="md:inline-flex hidden gap-4 bg-gray-100 md:px-5 w-full px-3 py-3 rounded-t-0 rounded-b-20">
              <label className="flex gap-5 items-center justify-between w-full">
                <div className="relative w-full">
                  <select
                    name="service"
                    className="p-2 rounded-lg bg-white md:text-[16px] text-[13px] w-full focus:outline-none focus:border-blue-500"
                    value={selectedService}
                    onChange={handleServiceChange}
                    disabled={loading || !!error}
                  >
                    <option value="" disabled>
                      {loading ? "Loading services..." : "Select Service Type"}
                    </option>
                    {shopFilters.map((filter) => (
                      <option key={filter.id} value={filter.id}>
                        {filter.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <Button
                  iconName="location-crosshairs"
                  iconColor="black"
                  buttonText="Detect"
                  bgColor="#E2E6FD"
                  hoverBgColor="#E2E6FD"
                  textColor="black"
                  order="order-first"
                  clickEvent={getUserLocation}
                />
              </label>
            </div>

            
            <div className="hidden md:flex">
              <Button
                iconName="arrow-right"
                iconColor="white"
                buttonText="Nearby"
                bgColor="#6350DB"
                hoverBgColor="darkblue"
                textColor="white"
                order="order-last"
              />
            </div>
            <div className="flex md:hidden">
              <Button
                iconName="arrow-right"
                iconColor="white"
                buttonText="Download Our App"
                bgColor="#6350DB"
                hoverBgColor="darkblue"
                textColor="white"
                order="order-last"
                link={getAppLink()}
              />
            </div>
          </div> */}
          
        </div>

        {/* Image section */}
        <div className="md:w-[40%] md:block">
          {selectedOption === "charging" && (
            <Image
              src={HeroIMG1}
              alt="Charging Station"
              className="fade-in"
              data-aos-desktop="fade-left"
            />
          )}
          {selectedOption === "mechanics" && (
            <Image
              src={HeroIMG2}
              alt="Mechanics"
              className="fade-in"
              data-aos-desktop="fade-left"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;