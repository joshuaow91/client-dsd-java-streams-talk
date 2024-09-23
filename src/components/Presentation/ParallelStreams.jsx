import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function ParallelStreams() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const [activeTab, setActiveTab] = useState("tradeoffs");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
        <span className="text-green-300 font-bold">Concurrency</span>: Splits tasks into smaller units executed across multiple threads. <br />
        <span className="text-blue-300 font-bold">ForkJoinPool</span>: Manages thread distribution and task execution behind the scenes. <br />
        <span className="text-orange-300 font-bold">Task Splitting</span>: Automatically divides large datasets into chunks processed in parallel. <br />
        <span className="text-purple-300 font-bold">Task Coordination</span>: Combines results from threads automatically after processing.
      </motion.p>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => handleTabChange("tradeoffs")}
          className={`px-4 py-2 text-lg md:text-2xl font-semibold rounded-md ${
            activeTab === "tradeoffs" ? "bg-blue-500 text-white" : "bg-gray-500 text-gray-300"
          }`}
        >
          Trade-offs
        </button>
        <button
          onClick={() => handleTabChange("considerations")}
          className={`px-4 py-2 text-lg md:text-2xl font-semibold rounded-md ${
            activeTab === "considerations" ? "bg-blue-500 text-white" : "bg-gray-500 text-gray-300"
          }`}
        >
          Considerations
        </button>
      </div>

      {activeTab === "tradeoffs" && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="list-disc marker:text-pink-500 pl-6 text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">Reduced Runtime</span>: For large datasets, parallel streams use multiple CPU cores to process faster.
            </li>
            <li>
              <span className="text-red-300 font-bold">Increased Memory Usage</span>: Tasks are split across threads, requiring additional memory per thread.
            </li>
          </ul>

          <SyntaxHighlighter language="java" style={oneDark} customStyle={customStyle}>
            {`// Trade-off Example: Using Parallel Streams for a Large Dataset
// 1. Generate a large list of numbers (1 to 1,000,000)
List<Integer> numbers = IntStream.rangeClosed(1, 1000000).boxed().collect(Collectors.toList());

// 2. Use a parallel stream to process the numbers concurrently
int sum = numbers.parallelStream()  // Switches to parallel processing using multiple threads
                 .mapToInt(Integer::intValue) // Intermediate operation: maps each element to an integer
                 .sum(); // Terminal operation: sums all the integers

// Result: Faster processing due to parallelism, but with higher memory usage
// Output: 500000500000
`}
          </SyntaxHighlighter>
        </motion.div>
      )}

      {activeTab === "considerations" && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="list-disc marker:text-pink-500 pl-6 text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-green-300 font-bold">Immutability/Statelessness</span>: Make sure your data and operations don&apos;t rely on anything that can be changed by other threads. Crucial for avoiding race conditions.
            </li>
            <li>
              <span className="text-purple-300 font-bold">Synchronization</span>: If shared mutable data is modified by multiple threads, synchronization is required to avoid race conditions. However, this can negate the performance benefits of parallelism.
            </li>
          </ul>

          <SyntaxHighlighter language="java" style={oneDark} customStyle={customStyle}>
            {`// Considerations Example: Handling Shared Mutable State with Synchronization
// 1. Generate a large list of numbers (1 to 1,000,000)
List<Integer> numbers = IntStream.rangeClosed(1, 1000000).boxed().collect(Collectors.toList());

// 2. Shared mutable state: This array will be modified by multiple threads
int[] sharedState = {0};

// 3. Use a parallel stream to modify the shared state, requiring synchronization
numbers.parallelStream().forEach(num -> synchronized (sharedState) {
    sharedState[0] += num;  // Synchronization prevents race conditions
});

// Result: Correct output, but synchronization reduces performance gains from parallelism
`}
          </SyntaxHighlighter>
        </motion.div>
      )}
    </motion.div>
  );
}
