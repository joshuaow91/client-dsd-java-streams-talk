import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function WhenToUseParallelStreams() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-7xl font-bold text-white/90 mb-4">
        When to Use Parallel Streams
      </h2>
      <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          <span className="text-orange-300 font-bold">Large datasets</span>:
          When large enough to justify the overhead of managing multiple
          threads.
        </li>
        <li>
          <span className="text-red-300 font-bold">
            Computationally heavy operations
          </span>
          : If operations are computationally heavy, parallelism will reduce
          runtime.
        </li>
        <li>
          <span className="text-blue-300 font-bold">Multi-core systems</span>:
          Parallel streams are more beneficial on machines with multiple CPU
          cores.
        </li>
      </ul>

      <h3 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4">
        Example: Appropriate Use of Parallel Streams
      </h3>
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

      <h3 className="text-2xl md:text-3xl font-semibold text-red-300 mb-4">
        Example: When Sequential Streams Are Better
      </h3>
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
    </div>
  );
}
