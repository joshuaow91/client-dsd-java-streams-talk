import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function ParallelStreams() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-7xl font-bold text-white/90 mb-4">
        Parallel Streams
      </h2>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        Parallel streams provide a way to take advantage of multiple CPU cores
        by breaking down the work into smaller tasks that run concurrently.
      </p>

      <h3 className="text-xl md:text-3xl font-semibold text-blue-300">
        Trade-offs:
      </h3>
      <ul className="list-disc marker:text-pink-500 pl-6 text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          <span className="text-orange-300 font-bold">Reduced runtime</span>:
          With large datasets, the work can be divided among multiple threads,
          reducing the total time to complete the task.
        </li>
        <li>
          <span className="text-red-300 font-bold">Increased memory usage</span>
          : Parallel streams typically consume more memory compared to
          sequential streams, as tasks are divided and executed in separate
          threads.
        </li>
        <li>
          <span className="text-green-300 font-bold">Considerations</span>:
          Thread management, synchronization, and task coordination are crucial
          factors when using parallel streams.
        </li>
      </ul>

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
    </div>
  );
}
