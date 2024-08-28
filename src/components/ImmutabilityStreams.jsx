import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../utils/codeBlockStyles";

export default function ImmutabilityInStreams({ isConcise }) {
  return (
    <div className="max-w-7xl mx-auto mb-24 md:pb-48">
      <h3 className="text-4xl md:text-6xl font-semibold mb-4">Immutability in Streams</h3>

      {isConcise ? (
        <>
          <ul className="list-disc list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10 marker:text-pink-500">
            <li>
              <strong className="text-orange-300">
                Non-Destructive Operations:
              </strong>{" "}
              Operations like <code className="text-green-300">filter()</code>,{" "}
              <code className="text-green-300">map()</code>, or{" "}
              <code className="text-green-300">sorted()</code> do not modify the
              original data.
            </li>
            <li>
              <strong className="text-orange-300">Chaining Operations:</strong>{" "}
              You can chain multiple stream operations together while the
              original data remains unchanged.
            </li>
          </ul>

          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example of immutability in streams

List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

// Chaining operations on the stream
List<String> processedNames = names.stream()                   // Original data source unchanged
                                   .filter(name -> name.length() > 3) // Intermediate: filter
                                   .map(String::toUpperCase)          // Intermediate: map
                                   .sorted()                          // Intermediate: sorted
                                   .toList();                         // Terminal: toList

// The original list 'names' is unchanged
// The resulting list 'processedNames' contains the modified elements: ["ANGELA", "DWIGHT", "MICHAEL"]
`}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <ul className="list-disc list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10 marker:text-pink-500">
            <li>
              <strong className="text-orange-300">
                Non-Destructive Operations:
              </strong>{" "}
              Operations performed on a stream, such as{" "}
              <code className="text-green-300">filter()</code>,{" "}
              <code className="text-green-300">map()</code>, or{" "}
              <code className="text-green-300">sorted()</code>, create a new
              stream representing the result without modifying the original data
              source.
            </li>
            <li>
              <strong className="text-orange-300">Chaining Operations:</strong>{" "}
              Multiple operations can be chained together to build a processing
              pipeline. Each operation creates a new stream object reflecting
              the applied transformations or filtering, while the original data
              structure remains unaffected.
            </li>
          </ul>

          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example of immutability in streams

List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

// Chaining operations on the stream
List<String> processedNames = names.stream()                   // Original data source unchanged
                                   .filter(name -> name.length() > 3) // Intermediate: filter
                                   .map(String::toUpperCase)          // Intermediate: map
                                   .sorted()                          // Intermediate: sorted
                                   .toList();                         // Terminal: toList

// The original list 'names' is unchanged
// The resulting list 'processedNames' contains the modified elements: ["ANGELA", "DWIGHT", "MICHAEL"]
`}
          </SyntaxHighlighter>

          <p className="text-lg md:text-2xl mb-6 mt-6 leading-8 md:leading-10">
            This code example shows how multiple operations can be applied to a
            stream without changing the original list. The stream pipeline
            starts with the original list{" "}
            <code className="text-green-300">names</code> and creates a new list{" "}
            <code className="text-green-300">processedNames</code> containing
            filtered, mapped, and sorted names. The original data remains
            unchanged, demonstrating the immutability of streams.
          </p>
        </>
      )}
    </div>
  );
}

ImmutabilityInStreams.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
