import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function CoreOperationsOfStreams({ isConcise }) {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Core Operations of Java Streams
      </h2>

      {isConcise ? (
        <>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Java Streams support three types of operations:{" "}
            <span className="text-green-300 font-bold">
              Intermediate Operations
            </span>
            ,{" "}
            <span className="text-green-300 font-bold">
              Terminal Operations
            </span>
            , and{" "}
            <span className="text-green-300 font-bold">
              Short-Circuit Operations
            </span>
            .
          </p>
          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-blue-300 font-bold">
                Intermediate Operations
              </span>
              : Return another stream and are lazily executed.
            </li>
            <li>
              <span className="text-blue-300 font-bold">
                Terminal Operations
              </span>
              : Produce a result or a side effect, marking the end of the
              pipeline.
            </li>
            <li>
              <span className="text-blue-300 font-bold">
                Short-Circuit Operations
              </span>
              : Stop processing as soon as a result is found, optimizing
              performance.
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Core Operations
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

List<String> result = names.stream()
                           .filter(name -> name.length() > 3)  // Intermediate
                           .map(String::toUpperCase)   // Intermediate
                           .findFirst()                // Short-Circuit
                           .orElse("No match");        // Terminal
// Result: "MICHAEL"`}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The core operations supported by Java Streams fall into three
            categories:
          </p>
          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-blue-300 font-bold">
                Intermediate Operations
              </span>
              : These operations, such as{" "}
              <span className="text-orange-300 font-bold">filter()</span> and{" "}
              <span className="text-orange-300 font-bold">map()</span>, return
              another stream and are lazy, meaning they are not executed until a
              terminal operation is called.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Intermediate operations are essential for building a stream
            pipeline. They transform the stream, filter data, or map elements to
            new values, but do not themselves trigger processing. Because these
            operations are lazy, they are evaluated only when a terminal
            operation is invoked, allowing for more efficient data processing.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Intermediate Operations
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> evenNumbers = numbers.stream()
                                   .filter(n -> n % 2 == 0)  // Intermediate
                                   .map(n -> n * n)          // Intermediate
                                   .collect(Collectors.toList()); // Terminal
// Result: [4, 16]
`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-blue-300 font-bold">
                Terminal Operations
              </span>
              : Operations like{" "}
              <span className="text-orange-300 font-bold">collect()</span> and{" "}
              <span className="text-orange-300 font-bold">forEach()</span>{" "}
              produce a result or a side effect and trigger the processing of
              the stream.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Terminal operations are the final steps in a stream pipeline. They
            initiate the processing of data and produce a result, whether
            it&apos;s a collection of results, a sum, or a side effect like
            printing to the console. Once a terminal operation is invoked, the
            stream is considered consumed and can no longer be used.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Terminal Operations
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

names.stream()
     .filter(name -> name.length() > 3)
     .forEach(System.out::println);  // Terminal: forEach
// Output: Michael, Dwight, Angela
`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-blue-300 font-bold">
                Short-Circuit Operations
              </span>
              : Operations such as{" "}
              <span className="text-orange-300 font-bold">findFirst()</span> and{" "}
              <span className="text-orange-300 font-bold">anyMatch()</span> can
              stop further processing as soon as a certain condition is met,
              improving efficiency.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Short-circuit operations are particularly useful for improving the
            efficiency of stream processing. They allow the pipeline to
            terminate early if a certain condition is met, preventing
            unnecessary computation on the rest of the elements.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Short-Circuit Operations
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

boolean hasEven = numbers.stream()
                         .map(n -> n * n)             // Intermediate: map
                         .anyMatch(n -> n % 2 == 0);  // Short-Circuit: anyMatch
// Result: true
`}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  );
}

CoreOperationsOfStreams.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
