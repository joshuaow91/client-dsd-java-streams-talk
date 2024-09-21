import PropTypes from "prop-types";

export default function Header({ isPresentationMode }) {
  return (
    <header className="flex flex-col justify-center max-w-7xl mx-auto">
      <h1
        className={`${
          isPresentationMode
            ? "text-6xl md:text-[200px] max-w-5xl py-24"
            : "text-9xl max-w-4xl pt-24"
        }  mb-8 tracking-tighter drop-shadow-lg uppercase font-black
      bg-[length:130%_auto] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-bg-position`}
      >
        Java Streams API
      </h1>
    </header>
  );
}

Header.propTypes = {
  isPresentationMode: PropTypes.bool.isRequired,
};
