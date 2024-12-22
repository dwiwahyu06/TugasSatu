const ContactUs = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center justify-center p-4">
                  <h1 className="text-2xl font-bold text-center text-[#D5BFBF] mb-4">Contact</h1>

        <div className="bg-gradient-to-r from-gray-200 to-gray-400 shadow-md rounded-lg p-12 max-w-2xl w-full">
          <div className="space-y-6">
            <p className="text-gray-800">
              <a
                href="https://www.instagram.com/dwi.wyu_s/"
                className="inline-block bg-gradient-to-r from-gray-700 to-gray-400 text-white py-2 px-6 rounded-md hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                @dwi.wyu_s
              </a>
            </p>
  
            <p className="text-gray-800">
              <a
                href="mailto:wywahyu7@gmail.com"
                className="inline-block bg-gradient-to-r from-gray-700 to-gray-400 text-white py-2 px-6 rounded-md hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-500 transition duration-300"
              >
                wywahyu7@gmail.com
              </a>
            </p>
  
            <p className="text-gray-800">
              <a
                href="https://wa.me/6281528412476"
                className="inline-block bg-gradient-to-r from-gray-700 to-gray-400 text-white py-2 px-6 rounded-md hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with me on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  