import React, { useState } from 'react';
import { PiGreaterThan, PiLessThan, PiShoppingCartLight } from 'react-icons/pi';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { menuData } from '../data/data';

export default function Menu() {
  const [data] = useState(menuData);

  const renderStars = (star) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= star ? <FaStar key={i} className="text-yellow-500" /> : <FaRegStar key={i} className="text-gray-400" />
      );
    }
    return stars;
  };

  return (
    <div className='pt-14 bg-gray-100'>
      {/* Section Meilleur Vendeur */}
      <div className="relative w-full max-w-6xl mx-auto mb-12 overflow-hidden rounded-xl shadow-lg">
        <div
          className="relative h-64 bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold font-serif"
          style={{ backgroundImage: `url(/imageMenu/pizza1.png)` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md rounded-xl"></div>
          <h1 className="relative z-10">Meilleur vendeur</h1>
        </div>
      </div>

      {/* Liste des plats */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition duration-300"
          >
            <img src={item.image} alt={item.nomPlat} className="h-48 w-full md:w-48 object-cover" />
            <div className="p-4 flex flex-col justify-between w-full">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">{item.nomPlat}</h2>
                  <span className="text-lg font-semibold text-orange-500">${item.prix}</span>
                </div>
                <p className="text-gray-600 mt-1 text-sm">{item.description.length > 80 ? `${item.description.slice(0, 80)}...` : item.description}</p>
                <p className="text-sm text-gray-500 mt-1">{item.nomRestro}</p>
                <div className="flex items-center mt-1">{renderStars(item.note)}</div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition">
                  <PiShoppingCartLight className="text-xl" /> Commander
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
