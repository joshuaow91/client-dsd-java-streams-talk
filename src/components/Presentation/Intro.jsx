import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-7xl font-bold text-white/90 mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Intro to Streams
      </motion.h2>

      <motion.ul
        className="list-disc marker:text-pink-500 pl-6 text-lg md:text-2xl mb-6 leading-8 md:leading-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
          hidden: { opacity: 0 },
        }}
      >
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-orange-300 font-bold">
            Introduced in Java 8
          </span>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-300 font-bold">
            Offer a functional/declarative approach
          </span>{" "}
          to perform operations on a collection of objects.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          With streams, we specify{" "}
          <span className="text-red-300 font-bold">&quot;what&quot;</span> we
          want through operations. The{" "}
          <span className="text-red-300 font-bold">&quot;how&quot;</span> is
          handled by the Streams API, making the approach{" "}
          <span className="text-blue-300 font-bold">declarative</span>, focusing
          on the outcome rather than the process.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-300 font-bold">
            Iteration is handled internally
          </span>
          , eliminating the need for explicit loops, reducing runtime, and
          saving memory.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Streams are{" "}
          <span className="text-orange-300 font-bold">immutable</span>; each
          operation does not modify the original source.
        </motion.li>
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <SyntaxHighlighter
          language="java"
          style={oneDark}
          customStyle={customStyle}
        >
          {`// Example: Filtering Names
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");
List<String> filteredNames = names.stream()
                                  .filter(name -> name.startsWith("A"))
                                  .collect(Collectors.toList());
// Result: ["Angela"]`}
        </SyntaxHighlighter>
      </motion.div>
    </motion.div>
  );
}
