import React from "react";

export default function RoomsSection() {
  const cards = [
    {
      id: 1,
      title: "Suite Room",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      price: "$450 / NIGHT",
    },
    {
      id: 2,
      title: "Family Room",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      price: "$450 / NIGHT",
    },
    {
      id: 3,
      title: "Deluxe Room",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      price: "$450 / NIGHT",
    },
    {
      id: 4,
      title: "Luxury Suite",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      price: "$600 / NIGHT",
    },
    {
      id: 5,
      title: "Executive Room",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      price: "$500 / NIGHT",
    },
    {
      id: 6,
      title: "Presidential Suite",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      price: "$1000 / NIGHT",
    },
  ];

  return (
    <div className="mt-60 grid md:grid-cols-3 gap-x-[20px] gap-y-6 p-10 bg-gray-50 justify-center">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="bg-white shadow-md hover:shadow-xl overflow-hidden transition duration-300 w-80 h-[550px] flex flex-col mx-auto"
        >
          {/* alternate layout */}
          {index % 2 === 0 ? (
            <>
              {/* content top */}
              <div className="p-6 text-center flex-1">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {card.title}
                </h2>
                <p className="text-gray-500 mt-3">{card.desc}</p>

                {/* Price + Button */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <span className="text-amber-600 font-semibold">
                    {card.price}
                  </span>
                  <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-700">
                    BOOK NOW
                  </button>
                </div>
              </div>

              {/* image bottom */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
            </>
          ) : (
            <>
              {/* image top */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover"
              />

              {/* content bottom */}
              <div className="p-6 text-center flex-1">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {card.title}
                </h2>
                <p className="text-gray-500 mt-3">{card.desc}</p>

                {/* Price + Button */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <span className="text-amber-600 font-semibold">
                    {card.price}
                  </span>
                  <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-700">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
