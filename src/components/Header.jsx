import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function Header({ isPresentationMode }) {
  return (
    <header className="flex flex-col justify-center max-w-7xl mx-auto">
      <motion.h1
        key={isPresentationMode}
        className={`${
          isPresentationMode
            ? "text-6xl md:text-[200px] max-w-5xl py-24"
            : "text-9xl max-w-4xl pt-24"
        } mb-8 tracking-tighter drop-shadow-lg uppercase font-black bg-[length:130%_auto] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-bg-position`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        Java Streams API
      </motion.h1>
    </header>
  );
}

Header.propTypes = {
  isPresentationMode: PropTypes.bool.isRequired,
};
