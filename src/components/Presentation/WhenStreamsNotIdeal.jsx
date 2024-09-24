import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function WhenStreamsNotIdeal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const [activeTab, setActiveTab] = useState("smallDatasets");

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
        When Streams May Not Be Ideal
      </motion.h2>

      <div className="flex md:flex-row flex-col gap-4 my-6">
        <button
          onClick={() => handleTabChange("smallDatasets")}
          className={`px-4 py-2 text-lg md:text-2xl font-semibold rounded-md ${
            activeTab === "smallDatasets" ? "bg-blue-500 text-white" : "bg-gray-500 text-gray-300"
          }`}
        >
          Small Datasets
        </button>
        <button
          onClick={() => handleTabChange("simpleOperations")}
          className={`px-4 py-2 text-lg md:text-2xl font-semibold rounded-md ${
            activeTab === "simpleOperations" ? "bg-blue-500 text-white" : "bg-gray-500 text-gray-300"
          }`}
        >
          Simple Operations
        </button>
        <button
          onClick={() => handleTabChange("ioHeavy")}
          className={`px-4 py-2 text-lg md:text-2xl font-semibold rounded-md ${
            activeTab === "ioHeavy" ? "bg-blue-500 text-white" : "bg-gray-500 text-gray-300"
          }`}
        >
          I/O Heavy Operations
        </button>
        <button
          onClick={() => handleTabChange("memoryConstraints")}
          className={`px-4 py-2 text-lg md:text-2xl font-semibold rounded-md ${
            activeTab === "memoryConstraints" ? "bg-blue-500 text-white" : "bg-gray-500 text-gray-300"
          }`}
        >
          Memory Constraints
        </button>
      </div>

      {activeTab === "smallDatasets" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-orange-300 mb-4">
            Small Datasets
          </h3>
          <p className="text-lg md:text-2xl mb-6">
            For small datasets, the overhead of setting up a stream can outweigh the benefits.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Simple for-loop better for small datasets
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = 0;
for (int num : numbers) {
    sum += num;  // Efficient and simple for small datasets
}`}
          </SyntaxHighlighter>
        </motion.div>
      )}

      {activeTab === "simpleOperations" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4">
            Simple Operations
          </h3>
          <p className="text-lg md:text-2xl mb-6">
            Streams may add unnecessary complexity for simpler tasks.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Simple arithmetic operation, no need for stream
int num = 5;
int square = num * num;  // Direct and clear, no need for Stream API
// For such simple tasks, the Stream API would be overkill.`}
          </SyntaxHighlighter>
        </motion.div>
      )}

      {activeTab === "ioHeavy" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-red-300 mb-4">
            I/O Heavy Operations
          </h3>
          <p className="text-lg md:text-2xl mb-6">
            Latency issues, such as waiting for data from a database, will dominate runtime regardless of lazy evaluation or parallelism.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Waiting for a database call, stream adds no benefit
String data = database.fetchData();  // Latency from I/O dominates runtime
if (data != null) {
    process(data);  // Processing happens after the data is fetched
}`}
          </SyntaxHighlighter>
        </motion.div>
      )}

      {activeTab === "memoryConstraints" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">
            Memory Constraints
          </h3>
          <p className="text-lg md:text-2xl mb-6">
            Operations like sorting or collecting large datasets can require significant memory, especially if multiple operations are chained.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Chained stream operations on a large dataset may use excessive memory
List<String> largeList = getLargeDataset();
List<String> result = largeList.stream()
                               .filter(s -> s.startsWith("A"))
                               .sorted()
                               .limit(100)
                               .toList();  // Memory intensive for large data
// Large collections and multiple operations can consume excessive memory.`}
          </SyntaxHighlighter>
        </motion.div>
      )}
    </motion.div>
  );
}
