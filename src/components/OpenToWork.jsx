export default function OpenToWork() {
  return (
    <div className="snap-start h-screen flex flex-col items-center justify-center bg-blk py-12">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex flex-col">
          <h2 className="text-9xl max-w-4xl mb-12 tracking-tighter drop-shadow-lg uppercase font-black bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Open to Work, <br />
            Hire Me!
          </h2>

          <div className="flex flex-col space-y-4">
            <a
              href="https://www.linkedin.com/in/JoshuaOwDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-4xl bg-green-500 text-white font-bold py-4 px-6 rounded-md shadow-lg hover:bg-green-600 transition">
                LinkedIn
              </button>
            </a>
            <a
              href="https://joshuaow.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-4xl bg-blue-500 text-white font-bold py-4 px-6 rounded-md shadow-lg hover:bg-blue-600 transition">
                Portfolio
              </button>
            </a>
            <a
              href="https://github.com/joshuaow91/Stock-Scanner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-4xl bg-purple-500 text-white font-bold py-4 px-6 rounded-md shadow-lg hover:bg-purple-600 transition">
                Stock Scanner Repo
              </button>
            </a>
          </div>
        </div>

        <div className="ml-16 flex justify-center items-center">
          <div className="w-[600px] h-[600px] bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
            <img
              src="/qr.svg"
              alt="QR Code"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
