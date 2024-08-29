import { useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function MaxProductStreamExample({ isConcise }) {
  const [showLoopExample, setShowLoopExample] = useState(false);

  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Simplifying Nested Loops with Streams
      </h2>

      {isConcise ? (
        <>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            This example demonstrates how a simple stream operation can replace
            a nested loop for finding the maximum product of two elements in an
            array.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-green-300">
            Find the Maximum Product of Two Elements in an Array
          </h3>
          <p className="text-lg md:text-2xl mb-4 leading-8 md:leading-10">
            Using Java Streams, we can find the maximum product of two distinct
            elements in a single, concise operation.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`int maxProduct = Arrays.stream(nums)
    .boxed()
    .sorted(Comparator.reverseOrder())
    .limit(2)
    .reduce(1, (a, b) -> a * b);
`}
          </SyntaxHighlighter>

          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
            onClick={() => setShowLoopExample(!showLoopExample)}
          >
            {showLoopExample ? "Hide" : "Show"} for-loop Equivalent
          </button>

          {showLoopExample && (
            <SyntaxHighlighter
              language="java"
              style={oneDark}
              customStyle={customStyle}
              className="mt-4"
            >
              {`int maxProduct = Integer.MIN_VALUE;
for (int i = 0; i < nums.length; i++) {
    for (int j = i + 1; j < nums.length; j++) {
        maxProduct = Math.max(maxProduct, nums[i] * nums[j]);
    }
}
`}
            </SyntaxHighlighter>
          )}
        </>
      ) : (
        <>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            This example demonstrates how a simple stream operation can replace
            a nested loop for finding the maximum product of two elements in an
            array. Let&apos;s explore a more concise solution using Java
            Streams.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-green-300">
            Stream Example: Finding Maximum Product
          </h3>
          <p className="text-lg md:text-2xl mb-4 leading-8 md:leading-10">
            Using Java Streams, we can find the maximum product of two distinct
            elements in a single, concise operation. This approach leverages the
            power of the streams API to make the code more readable and
            maintainable.
          </p>
          <p className="text-lg md:text-2xl mb-4 leading-8 md:leading-10">
            The stream operation below first converts the array to a stream,
            then sorts the elements in descending order, selects the top two
            elements, and finally computes their product using a reduction
            operation.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Stream example: Finding maximum product
int maxProduct = Arrays.stream(nums)
    .boxed() // Convert int[] to Stream<Integer>
    .sorted(Comparator.reverseOrder()) // Sort elements in descending order
    .limit(2) // Take the top two elements
    .reduce(1, (a, b) -> a * b); // Calculate the product of the two elements
`}
          </SyntaxHighlighter>

          <p className="text-lg md:text-2xl mt-6 leading-8 md:leading-10">
            This stream operation is more concise than the equivalent nested
            loop and eliminates the need for managing loop indices and
            conditions explicitly.
          </p>

          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
            onClick={() => setShowLoopExample(!showLoopExample)}
          >
            {showLoopExample ? "Hide" : "Show"} for-loop Equivalent
          </button>

          {showLoopExample && (
            <SyntaxHighlighter
              language="java"
              style={oneDark}
              customStyle={customStyle}
              className="mt-4"
            >
              {`// For-loop equivalent: Nested loops with condition
int maxProduct = Integer.MIN_VALUE;
for (int i = 0; i < nums.length; i++) {
    for (int j = i + 1; j < nums.length; j++) {
        maxProduct = Math.max(maxProduct, nums[i] * nums[j]);
    }
}
`}
            </SyntaxHighlighter>
          )}

          <h3 className="text-2xl md:text-3xl font-semibold mb-4 mt-8">
            Performance Considerations
          </h3>
          <p className="text-lg md:text-2xl mb-4 leading-8 md:leading-10">
            The stream-based approach is not only more readable but also
            leverages Java&apos;s internal optimizations. For example, the
            stream&apos;s sorting and limiting operations are optimized for
            performance, which can be especially beneficial for large datasets.
          </p>
          <p className="text-lg md:text-2xl mb-4 leading-8 md:leading-10">
            In contrast, the nested loop approach requires O(n^2) time
            complexity due to its double iteration over the array. The stream
            approach reduces this by first sorting (O(n log n)) and then
            performing a constant time operation to find the product of the top
            two elements (O(1)).
          </p>
          <p className="text-lg md:text-2xl mb-4 leading-8 md:leading-10">
            While the performance benefits may not be significant for small
            arrays, the readability and maintainability of the code using
            streams are markedly improved.
          </p>
        </>
      )}
    </div>
  );
}

MaxProductStreamExample.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
