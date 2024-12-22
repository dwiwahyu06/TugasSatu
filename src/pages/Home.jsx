export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/dd/ac/d0/ddacd0e115d593e9383773c86b97951f.jpg')" }}></div>
      
      <div className="absolute inset-0 bg-gray-800/50"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-7xl font-bold text-[#DAC0A3] mb-4">
          Several unique facts about countries in the world
        </h1>
        <p className="text-lg text-[#DAC0A3] max-w-2xl">
          Website ini dibuat untuk mempermudah Anda dalam mencari informasi tentang berbagai wilayah di dunia. Website ini juga berisikan berbagai bendera dan detail dari negara itu sendiri.
        </p>
      </div>
    </div>
  );
}