import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function LazyShortCircuiting() {
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
        Lazy Evaluation / Short-Circuiting
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
          <span className="text-blue-300 font-bold">Lazy evaluation</span> helps
          optimize performance by delaying execution of operations until a
          result is required.
        </motion.li>

        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          If we had a large list of 1000 elements and streams were{" "}
          <span className="text-orange-300 font-bold">eagerly processed</span>,
          then every element would be processed, even if we only needed one
          result. With{" "}
          <span className="text-green-300 font-bold">lazy evaluation</span>, the
          stream stops processing as soon as the condition is satisfied.
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
          {`List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");
List<String> result = names.stream()
    .filter(name -> name.length() > 3)  // This won’t run yet
    .map(String::toUpperCase)           // Still won’t run
    .findFirst()                        // Triggers the execution
    .orElse("No match");     // Provides default if no matching element is found`}
        </SyntaxHighlighter>
      </motion.div>
    </motion.div>
  );
}
