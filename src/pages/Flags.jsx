import  { useEffect, useState } from "react";

export default function Flags() {
  const [countries, setCountries] = useState([]);

  // Fetch data dari country.json
  useEffect(() => {
    fetch("/country.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-4xl font-bold mb-10 text-gray-800">
        Country Flags and Details
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {countries.map((country) => (
          <div
            key={country.id}
            className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Gambar Bendera */}
            <img
  src={country.image}
  alt={`Flag of ${country.nama}`}
  className="w-full h-64 object-cover"
/>

            {/* Detail Negara */}
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {country.nama}
              </h2>
              <p className="text-gray-600 mb-1">
                <span className="font-bold">Ibu Kota:</span> {country["ibu kota"]}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Penduduk:</span> {country.penduduk}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
