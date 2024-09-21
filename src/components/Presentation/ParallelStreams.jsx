import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function ParallelStreams() {
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
        Parallel Streams
      </motion.h2>

      <motion.p
        className="text-lg md:text-2xl mb-6 leading-8 md:leading-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Parallel streams provide a way to take advantage of multiple CPU cores
        by breaking down the work into smaller tasks that run concurrently.
      </motion.p>

      <motion.h3
        className="text-xl md:text-3xl font-semibold text-blue-300"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Trade-offs:
      </motion.h3>

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
          <span className="text-orange-300 font-bold">Reduced runtime</span>:
          With large datasets, the work can be divided among multiple threads,
          reducing the total time to complete the task.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-red-300 font-bold">Increased memory usage</span>
          : Parallel streams typically consume more memory compared to
          sequential streams, as tasks are divided and executed in separate
          threads.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-300 font-bold">Considerations</span>:
          Thread management, synchronization, and task coordination are crucial
          factors when using parallel streams.
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
          {`// Example: Summing a list of numbers using Parallel Streams
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Parallel stream to sum the numbers
int sum = numbers.parallelStream()
                 .mapToInt(Integer::intValue)
                 .sum(); 

// Output: 55`}
        </SyntaxHighlighter>
      </motion.div>
    </motion.div>
  );
}
