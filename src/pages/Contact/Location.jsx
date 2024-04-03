import React from 'react';

function LocationLink() {
  const latitude = 42.65635611766278; 
  const longitude = 21.153014698607468;
   
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <a className='flex items-center gap-2' href={mapsUrl} target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg> Rr. Musa Tolaj, Nartel Center Lam B, Kati 12, Pristina, Kosovo
    </a>
  );
}

export default LocationLink;
