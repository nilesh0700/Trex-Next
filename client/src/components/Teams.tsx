import React from 'react';
import Image from 'next/image';

export default function Teams() {
  const teamMembers = [
    {
      id: 1,
      name: "Mehboob Shaikh",
      role: "Operations",
      image: "/assets/2.png" // You'll need to add the actual image
    },
    {
      id: 2,
      name: "Siddharth Jain", 
      role: "Sales & Marketing",
      image: "/assets/3.png" // You'll need to add the actual image
    },
    {
      id: 3,
      name: "Krishna Gopalan",
      role: "Advisor", 
      image: "/assets/1.png" // You'll need to add the actual image
    }
  ];

  return (
    <section className="w-full pt-[10px] pb-[80px] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#264065] mb-4 sm:mb-6 font-['Poppins']">
            Our Leadership Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#1a2d47] mx-auto rounded-full"></div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6 sm:mb-8">
                <div className="w-full h-full rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                  />
                </div>
                {/* Decorative border */}
                {/* <div className="absolute inset-0 rounded-full ring-4 ring-gray-100"></div> */}
              </div>

              {/* Member Info */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#264065] font-['Poppins']">
                  {member.name}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-[#6c757d] font-medium font-['Poppins']">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 