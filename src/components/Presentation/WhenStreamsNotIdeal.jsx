import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function WhenStreamsNotIdeal() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-7xl font-bold text-white/90 mb-4">
        When Streams May Not Be Ideal
      </h2>
      <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          <span className="text-orange-300 font-bold">Small datasets</span>: The
          overhead of setting up a stream can outweigh the benefits.
        </li>
        <li>
          <span className="text-blue-300 font-bold">Simple operations</span>:
          Streams may add unnecessary complexity for simpler tasks.
        </li>
        <li>
          <span className="text-red-300 font-bold">I/O heavy operations</span>:
          Latency issues, such as waiting for data from a database, will
          dominate runtime regardless of lazy evaluation or parallelism.
        </li>
        <li>
          <span className="text-purple-300 font-bold">Memory constraints</span>:
          Operations like sorting or collecting large datasets can require
          significant memory, especially if multiple operations are chained.
        </li>
      </ul>

      <h3 className="text-2xl md:text-3xl font-semibold text-orange-300 mb-4">
        Example: Small Dataset
      </h3>
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

      <h3 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4">
        Example: Simple Operation
      </h3>
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

      <h3 className="text-2xl md:text-3xl font-semibold text-red-300 mb-4">
        Example: I/O Heavy Operations
      </h3>
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

      <h3 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">
        Example: Memory Constraints
      </h3>
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
    </div>
  );
}
