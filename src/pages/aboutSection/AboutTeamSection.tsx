import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Jessca Arow",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1603415526960-f8f0a8a2080d?auto=format&fit=crop&w=500&q=80",
    socials: ["twitter", "facebook", "instagram"],
  },
  {
    name: "Kathleen Smith",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80",
    socials: ["linkedin", "twitter", "facebook", "instagram"],
  },
  {
    name: "Rebecca Tylor",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    socials: ["facebook", "instagram"],
  },
];

const iconMap = {
  facebook: <Facebook className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  instagram: <Instagram className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
};

const AboutTeamSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <div className="inline-flex items-center mb-4">
          <div className="w-1 h-6 bg-red-600 mr-3"></div>
          <span className="text-sm text-gray-600 uppercase font-medium tracking-wider">
            The Transporters
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Meet Expert Team
        </h2>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />

                {/* Socials */}
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 py-2 flex justify-center space-x-4">
                  {member.socials.map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-white hover:text-gray-200 transition"
                    >
                      {iconMap[social]}
                    </a>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="bg-navy-800 py-4 px-4">
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
