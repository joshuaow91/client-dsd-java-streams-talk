import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function WhenStreamsNotIdeal() {
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
        When Streams May Not Be Ideal
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
          <span className="text-orange-300 font-bold">Small datasets</span>: The
          overhead of setting up a stream can outweigh the benefits.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-300 font-bold">Simple operations</span>:
          Streams may add unnecessary complexity for simpler tasks.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-red-300 font-bold">I/O heavy operations</span>:
          Latency issues, such as waiting for data from a database, will
          dominate runtime regardless of lazy evaluation or parallelism.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-purple-300 font-bold">Memory constraints</span>:
          Operations like sorting or collecting large datasets can require
          significant memory, especially if multiple operations are chained.
        </motion.li>
      </motion.ul>

      <motion.h3
        className="text-2xl md:text-3xl font-semibold text-orange-300 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Example: Small Dataset
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
          {`// Example: Simple for-loop better for small datasets
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = 0;
for (int num : numbers) {
    sum += num;  // Efficient and simple for small datasets
}`}
        </SyntaxHighlighter>
      </motion.div>

      <motion.h3
        className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Example: Simple Operation
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
          {`// Example: Simple arithmetic operation, no need for stream
int num = 5;
int square = num * num;  // Direct and clear, no need for Stream API
`}
        </SyntaxHighlighter>
      </motion.div>

      <motion.h3
        className="text-2xl md:text-3xl font-semibold text-red-300 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        Example: I/O Heavy Operations
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
          {`// Example: Waiting for a database call, stream adds no benefit
String data = database.fetchData();  // Latency from I/O dominates runtime
if (data != null) {
    process(data);
}
`}
        </SyntaxHighlighter>
      </motion.div>

      <motion.h3
        className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        Example: Memory Constraints
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
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
`}
        </SyntaxHighlighter>
      </motion.div>
    </motion.div>
  );
}
