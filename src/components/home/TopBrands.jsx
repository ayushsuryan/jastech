import React from "react";

const TopBrands = () => {
  const brands = [
    { name: "Brand 1", logo: "/brand1.svg" },
    { name: "Brand 2", logo: "/brand2.svg" },
    { name: "Brand 3", logo: "/brand3.svg" },
    { name: "Brand 4", logo: "/brand4.svg" },
    { name: "Brand 5", logo: "/brand6.svg" },
    { name: "Brand 6", logo: "/brand5.svg" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Marquee for mobile devices */}
        <div className="block md:hidden">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="10"
            scrolldelay="50"
            loop="infinite"
          >
            <div className="flex">
              {/* Use flex row to align items horizontally */}
              {brands.map((brand) => (
                <img
                  key={brand.name}
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 mx-4 object-contain opacity-50 hover:opacity-100 transition-all"
                />
              ))}
            </div>
          </marquee>
        </div>
        {/* Static grid for larger screens */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 object-contain filter blackscale hover:blackscale-0 transition-all opacity-50 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
