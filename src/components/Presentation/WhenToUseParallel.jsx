import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function WhenToUseParallelStreams() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const [activeTab, setActiveTab] = useState("largeDatasets");

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
        When to Use Parallel Streams
      </motion.h2>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => handleTabChange("largeDatasets")}
          className={`px-4 py-2 text-lg md:text-2xl font-semibold rounded-md ${
            activeTab === "largeDatasets" ? "bg-blue-500 text-white" : "bg-gray-500 text-gray-300"
          }`}
        >
          Large Datasets
        </button>
        <button
          onClick={() => handleTabChange("computationallyHeavy")}
          className={`px-4 py-2 text-lg md:text-2xl font-semibold rounded-md ${
            activeTab === "computationallyHeavy" ? "bg-blue-500 text-white" : "bg-gray-500 text-gray-300"
          }`}
        >
          Computationally Heavy
        </button>
        <button
          onClick={() => handleTabChange("multiCore")}
          className={`px-4 py-2 text-lg md:text-2xl font-semibold rounded-md ${
            activeTab === "multiCore" ? "bg-blue-500 text-white" : "bg-gray-500 text-gray-300"
          }`}
        >
          Multi-core Systems
        </button>
        <button
          onClick={() => handleTabChange("immutability")}
          className={`px-4 py-2 text-lg md:text-2xl font-semibold rounded-md ${
            activeTab === "immutability" ? "bg-blue-500 text-white" : "bg-gray-500 text-gray-300"
          }`}
        >
          Immutability/Statelessness
        </button>
      </div>

      {activeTab === "largeDatasets" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-orange-300 mb-4">
            Large Datasets
          </h3>
          <p className="text-lg md:text-2xl mb-6">
            When datasets are large enough to justify the overhead of managing multiple threads.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Parallel Stream for Summing Large Numbers
List<Integer> largeNumbers = Arrays.asList(10000, 20000, 30000, ..., 100000);
int sum = largeNumbers.parallelStream()
                      .mapToInt(Integer::intValue)
                      .sum();  // Efficient use of parallel stream`}
          </SyntaxHighlighter>
        </motion.div>
      )}

      {activeTab === "computationallyHeavy" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-red-300 mb-4">
            Computationally Heavy Operations
          </h3>
          <p className="text-lg md:text-2xl mb-6">
            If operations are computationally heavy, parallelism can reduce runtime by distributing tasks across threads.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Parallel Stream for Computationally Heavy Operations
List<Integer> numbers = Arrays.asList(1000, 2000, 3000);

int result = numbers.parallelStream()
                    .map(n -> {
                      // Simulating a computationally heavy task
                      return Math.pow(n, 3); // Cube the number
                    })
                    .mapToInt(Double::intValue)
                    .sum(); // Sum the results`}
          </SyntaxHighlighter>
        </motion.div>
      )}

      {activeTab === "multiCore" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4">
            Multi-core Systems
          </h3>
          <p className="text-lg md:text-2xl mb-6">
            Parallel streams are more beneficial on machines with multiple CPU cores because they utilize the available cores to process data concurrently.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Leveraging Multi-core System
List<Integer> numbers = Arrays.asList(1000, 2000, 3000, 4000);

// Efficient parallel stream processing on a multi-core system
int result = numbers.parallelStream()
                    .mapToInt(n -> n * 2) // Simple operation, but processed concurrently
                    .sum();`}
          </SyntaxHighlighter>
        </motion.div>
      )}

      {activeTab === "immutability" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-green-300 mb-4">
            Immutability/Statelessness
          </h3>
          <p className="text-lg md:text-2xl mb-6">
            Parallel streams work best with immutable data and stateless operations to avoid race conditions and the need for synchronization.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Stateless Operation for Parallel Streams
List<Integer> numbers = Arrays.asList(10, 20, 30, 40);

int sum = numbers.parallelStream()
                 .mapToInt(n -> n * 10) // Stateless operation, safe in parallel
                 .sum();`}
          </SyntaxHighlighter>
        </motion.div>
      )}
    </motion.div>
  );
}
