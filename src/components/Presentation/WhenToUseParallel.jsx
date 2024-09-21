import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function WhenToUseParallelStreams() {
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
        When to Use Parallel Streams
      </motion.h2>

      <motion.ul
        className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10"
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
          <span className="text-orange-300 font-bold">Large datasets</span>:
          When large enough to justify the overhead of managing multiple
          threads.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-red-300 font-bold">
            Computationally heavy operations
          </span>
          : If operations are computationally heavy, parallelism will reduce
          runtime.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-300 font-bold">Multi-core systems</span>:
          Parallel streams are more beneficial on machines with multiple CPU
          cores.
        </motion.li>
      </motion.ul>

      <motion.h3
        className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Example: Appropriate Use of Parallel Streams
      </motion.h3>

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
          {`// Example: Parallel Stream for Summing Large Numbers
List<Integer> largeNumbers = Arrays.asList(10000, 20000, 30000, ..., 100000);
int sum = largeNumbers.parallelStream()
                      .mapToInt(Integer::intValue)
                      .sum();
// Efficient use of parallel stream due to the large size and simplicity of operation`}
        </SyntaxHighlighter>
      </motion.div>

      <motion.h3
        className="text-2xl md:text-3xl font-semibold text-red-300 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        Example: When Sequential Streams Are Better
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <SyntaxHighlighter
          language="java"
          style={oneDark}
          customStyle={customStyle}
        >
          {`// Example: Sequential Stream for Simple Operations on Small Data
List<Integer> smallNumbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = smallNumbers.stream() // No need for parallelism
                      .mapToInt(Integer::intValue)
                      .sum();
// Sequential is optimal here due to the small size and straightforward operation`}
        </SyntaxHighlighter>
      </motion.div>
    </motion.div>
  );
}
