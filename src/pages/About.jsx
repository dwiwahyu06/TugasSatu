import "react";

const About = () => {
    return (
        <div className="p-6 mt-10 mb-32">
          <h1 className="text-4xl font-bold text-center text-[#D5BFBF] mb-16">
            About
          </h1>
          <div className="w-[90%] mx-auto bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 shadow-2xl rounded-xl p-8 text-center">
            <img
              src="https://i.pinimg.com/736x/fe/a7/40/fea740de3cf1b723d038ceda43106bee.jpg"
              alt="Dwi wahyu susilowati"
              className="w-36 h-36 object-cover rounded-full mx-auto mb-6 border-4 border-[#6C4E31] transition-transform transform hover:scale-105"
            />
            <p className="text-lg text-[#040303] mb-4 font-semibold">Full Name: <span className="font-normal">Dwi wahyu susilowati</span></p>
            <p className="text-lg text-[#040303] mb-4 font-semibold">Date of Birth: <span className="font-normal">06 September 2005</span></p>
            <p className="text-lg text-[#040303] mb-4 font-semibold">
              Faculty: <span className="font-normal">Ilmu Komputer</span>
            </p>
            <p className="text-lg text-[#040303] mb-4 font-semibold">
              Major: <span className="font-normal">Manajemen Informatika</span>
            </p>
            <p className="text-lg text-[#040303] mb-6 font-semibold">
              Hobby: <span className="font-normal">Travelling,Running, and watching movies</span>
            </p>        
          </div>
        </div>
      );
    };
export default About;
