import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function HowStreamsWork({ isConcise }) {
  return (
    <div className="max-w-5xl mx-auto pb-48">
      <h2 className="text-6xl font-bold mb-6 max-w-3xl">
        How Streams Work (Stream Pipeline)
      </h2>

      {isConcise ? (
        <>
          <ul className="list-disc list-inside text-2xl mb-6 leading-10 marker:text-pink-500">
            <li>
              <strong className="text-orange-300">Source</strong>: The starting
              point, like a collection or an array.
            </li>
            <li>
              <strong className="text-blue-300">Intermediate Operations</strong>
              : Transformations like{" "}
              <code className="text-blue-300">filter()</code> or{" "}
              <code className="text-blue-300">map()</code>.
            </li>
            <li>
              <strong className="text-green-300">Terminal Operation</strong>:
              The final action that produces a result, like{" "}
              <code className="text-green-300">collect()</code> or{" "}
              <code className="text-green-300">forEach()</code>.
            </li>
          </ul>
          <SyntaxHighlighter language="java" style={oneDark}>
            {`// Example of Stream Pipeline

// Source: A list of names
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

// Stream pipeline: Source -> Intermediate Operations -> Terminal Operation
List<String> filteredNames = names.stream()                 // Source
                                  .filter(name -> name.startsWith("A"))  // Intermediate Operation
                                  .map(String::toUpperCase)  // Intermediate Operation
                                  .toList();  // Terminal Operation (Java 16+)

// The resulting list: ["ALICE"]
`}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <p className="text-2xl mb-2 leading-10">
            A Stream pipeline consists of three parts:{" "}
            <strong className="text-orange-300">Source</strong>,{" "}
            <strong className="text-blue-300">Intermediate Operations</strong>,
            and a <strong className="text-green-300">Terminal Operation</strong>
            .
          </p>

          <ul className="list-disc list-inside text-2xl mb-6 leading-10 marker:text-pink-500">
            <li>
              <strong className="text-orange-300">Source</strong>: The data
              source for the stream (like a collection or an array).
            </li>
            <li>
              <strong className="text-blue-300">Intermediate Operations</strong>
              : The steps that transform the data (e.g.,{" "}
              <code className="text-blue-300">filter()</code>,{" "}
              <code className="text-blue-300">map()</code>). These operations
              are lazy, meaning they don’t execute until a terminal operation is
              invoked.
            </li>
            <li>
              <strong className="text-green-300">Terminal Operation</strong>:
              The final step that triggers the execution of the stream pipeline
              and produces a result or a side effect (e.g.,{" "}
              <code className="text-green-300">collect()</code>,{" "}
              <code className="text-green-300">forEach()</code>).
            </li>
          </ul>

          <SyntaxHighlighter language="java" style={oneDark}>
            {`// Example of Stream Pipeline

// Source: A list of names
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

// Stream pipeline: Source -> Intermediate Operations -> Terminal Operation
List<String> filteredNames = names.stream()                 // Source
                                  .filter(name -> name.startsWith("A"))  // Intermediate Operation
                                  .map(String::toUpperCase)  // Intermediate Operation
                                  .toList();  // Terminal Operation (Java 16+)

// The resulting list: ["ALICE"]
`}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  );
}

HowStreamsWork.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
