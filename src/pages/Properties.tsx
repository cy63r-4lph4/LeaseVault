import { useState } from "react";

const Properties = () => {
  const [properties] = useState([
    {
      id: 1,
      image: "/images/property1.jpeg",
      title: "Modern Apartment in Downtown",
      price: "0.5 ETH/month",
      location: "New York, USA",
    },
    {
      id: 2,
      image: "/images/property2.jpeg",
      title: "Luxury Villa with Sea View",
      price: "1.2 ETH/month",
      location: "Malibu, USA",
    },
    {
      id: 3,
      image: "/images/property3.jpeg",
      title: "Cozy Studio in the City Center",
      price: "0.3 ETH/month",
      location: "New York, US",
    },
    {
        id: 4,
        image: "/images/property4.jpeg",
        title: "Family House near the sea",
        price: "0.6 ETH/month",
        location: "London, UK",
      },
      {
        id: 5,
        image: "/images/property5.jpeg",
        title: "Nice Photo Studio at the Airpot",
        price: "0.24 ETH/month",
        location: "Mumbai, India",
      },
      {
        id: 6,
        image: "/images/property6.jpeg",
        title: "Luxury Castle with Lamborghini ",
        price: "1.6 ETH/month",
        location: "Los Angeles, US",
      },
      {
        id: 3,
        image: "/images/property7.jpeg",
        title: "Modern Single Room near the Mall",
        price: "0.3 ETH/month",
        location: "London, UK",
      },
  ]);

  return (
    <div className="bg-background text-gray-100 min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-accent animate-fadeIn">Available Properties</h1>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {properties.map((property) => (
          <div key={property.id} className="p-6 shadow-lg rounded-lg bg-card text-white text-center transform transition duration-300 hover:scale-105">
            <img src={property.image} alt={property.title} className="rounded-lg w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mt-4">{property.title}</h3>
            <p className="text-primary font-bold mt-2">{property.price}</p>
            <p className="text-gray-400 mt-1">{property.location}</p>
            <button className="btn bg-primary mt-4">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
