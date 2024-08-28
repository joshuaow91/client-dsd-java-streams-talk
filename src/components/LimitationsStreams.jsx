import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../utils/codeBlockStyles";

export default function LimitationsOfStreams({ isConcise }) {
  return (
    <div className="max-w-7xl mx-auto pb-24 md:pb-48">
      <h3 className="text-4xl md:text-6xl font-semibold mb-4">
        Limitations of Streams
      </h3>

      {isConcise ? (
        <>
          <ul className="list-disc list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <strong className="text-orange-300">Single-Use:</strong> Streams
              are single-use; reusing them throws an error.
            </li>
            <li>
              <strong className="text-orange-300">No Indexed Access:</strong>{" "}
              Cannot directly access elements by index.
            </li>
            <li>
              <strong className="text-orange-300">Debugging Complexity:</strong>{" "}
              Stream operations can make stack traces harder to read.
            </li>
          </ul>

          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Single Method Example Highlighting All Limitations
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

try {
    // Example of Single-Use Limitation
    Stream<String> stream = names.stream();
    stream.forEach(System.out::println);  // Prints each name
    stream.forEach(System.out::println);  // ERROR: Stream already used
    
    // Example of No Indexed Access
    String thirdName = names.stream()
                            .skip(2)
                            .findFirst()
                            .orElse("No name");  // No direct index, workaround needed

    // Example of Debugging Complexity
    names.stream()
         .filter(name -> {
             if (name.equals("Jim")) throw new RuntimeException("Error processing stream");
             return true;
         })
         .forEach(System.out::println);  // Complex stack trace when error occurs
} catch (Exception e) {
    e.printStackTrace();
}
`}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <ul className="list-disc list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <strong className="text-orange-300">Single-Use:</strong> Streams
              can only be used once. After a terminal operation, attempting to
              use the stream again will result in an error.
            </li>
            <li>
              <strong className="text-orange-300">
                No Direct Index Access:
              </strong>{" "}
              Streams do not support direct indexed access to their elements.
              You need to use operations like{" "}
              <code className="text-blue-300">skip()</code> and{" "}
              <code className="text-blue-300">findFirst()</code> to mimic
              indexed access.
            </li>
            <li>
              <strong className="text-orange-300">Debugging Complexity:</strong>{" "}
              The use of functional and lambda expressions can lead to stack
              traces that are harder to interpret, complicating debugging
              efforts.
            </li>
          </ul>

          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Single Method Example Demonstrating All Limitations
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

try {
    // Example of Single-Use Limitation
    Stream<String> stream = names.stream();
    stream.forEach(System.out::println);  // Works fine the first time
    stream.forEach(System.out::println);  // ERROR: Stream already operated upon or closed
    
    // Example of No Indexed Access
    String thirdName = names.stream()
                            .skip(2)  // Skips first two elements
                            .findFirst()  // Gets the third element (zero-based index)
                            .orElse("No name available");  // Workaround for lack of direct index
    
    // Example of Debugging Complexity
    names.stream()
         .filter(name -> {
             if (name.equals("Jim")) throw new RuntimeException("Stream processing error");
             return true;
         })
         .forEach(System.out::println);  // Complex stack trace due to lambda
} catch (Exception e) {
    e.printStackTrace();
}
`}
          </SyntaxHighlighter>

          <p className="text-lg md:text-2xl mt-6 leading-8 md:leading-10">
            In this example, the method demonstrates:
            <strong> Single-Use </strong> by showing that a stream cannot be
            reused,
            <strong> No Direct Index Access </strong> by needing a workaround to
            access the third element, and
            <strong> Debugging Complexity </strong> with a lambda that causes a
            stack trace.
          </p>
        </>
      )}
    </div>
  );
}

LimitationsOfStreams.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
