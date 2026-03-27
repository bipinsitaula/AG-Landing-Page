'use client';
import { useState } from 'react';

const branchDetails = {
  Tinkune:   { address: 'Tinkune, Kathmandu, Nepal', phone: '+977-XXXXXXXXXX' },
  Satdobato: { address: 'Satdobato, Lalitpur, Nepal', phone: '+977-XXXXXXXXXX' },
  Dharan:    { address: 'Dharan, Sunsari, Nepal', phone: '+977-XXXXXXXXXX' },
  Itahari:   { address: 'Itahari, Sunsari, Nepal', phone: '+977-XXXXXXXXXX' },
  Butwal:    { address: 'Butwal, Rupandehi, Nepal', phone: '+977-XXXXXXXXXX' },
  Chitwan:   { address: 'Narayangarh, Chitwan, Nepal', phone: '+977-XXXXXXXXXX' },
  Birtamode: { address: 'Birtamode, Jhapa, Nepal', phone: '+977-XXXXXXXXXX' },
  Hetauda:   { address: 'Hetauda, Makwanpur, Nepal', phone: '+977-XXXXXXXXXX' },
};

export default function BranchModal({ branches }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {branches.map(name => (
          <button
            key={name}
            onClick={() => setSelected(name)}
            className="bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100 text-sm font-bold text-gray-700 hover:text-orange-500 hover:border-orange-200 cursor-pointer text-center transition"
          >
            {name}
          </button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-5 right-5 text-gray-400 hover:text-orange-500 transition">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-5 mx-auto">
              <i className="fa-solid fa-store"></i>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">{selected} Branch</h3>
            <div className="space-y-4 text-gray-600 bg-gray-50 p-5 rounded-2xl border border-gray-100">
              <p className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 w-6 text-orange-500"></i>
                <span className="font-medium">{branchDetails[selected]?.address}</span>
              </p>
              <p className="flex items-center">
                <i className="fa-solid fa-phone w-6 text-orange-500"></i>
                <span className="font-bold text-gray-800">{branchDetails[selected]?.phone}</span>
              </p>
              <p className="flex items-center">
                <i className="fa-solid fa-envelope w-6 text-orange-500"></i>
                <span className="font-medium">info@ag.express</span>
              </p>
            </div>
            <div className="mt-8">
              <button onClick={() => setSelected(null)} className="w-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 font-bold py-3.5 px-4 rounded-xl transition">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
