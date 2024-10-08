export default function OpenToWork() {
  return (
    <div className="snap-start h-screen flex flex-col items-center justify-center bg-blk py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col">
          <h2 className="text-7xl animate-bounce md:text-9xl max-w-4xl mb-12 tracking-tighter drop-shadow-lg uppercase font-black bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Open to Work, <br />
            Hire Me!
          </h2>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/JoshuaOwDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-lg md:text-4xl bg-blue-500 text-white font-bold py-4 px-6 rounded-md shadow-lg hover:bg-blue-600 transition">
                LinkedIn
              </button>
            </a>
            <a
              href="https://joshuaow.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-lg md:text-4xl bg-green-500 text-white font-bold py-4 px-6 rounded-md shadow-lg hover:bg-green-600 transition">
                Portfolio
              </button>
            </a>
          </div>
        </div>

        <div className="hidden ml-16 mt-8 md:flex justify-center items-center">
          <div className="w-[600px] h-[600px] bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
            <img
              src="/qr.png"
              alt="QR Code"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
