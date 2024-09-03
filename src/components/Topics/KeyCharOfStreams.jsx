import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function KeyCharacteristicsOfStreams({ isConcise }) {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Key Characteristics of Java Streams
      </h2>

      {isConcise ? (
        <>
          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">
                Declarative Style
              </span>
              : Focus on the <span className="font-bold">what</span> rather than
              the <span className="font-bold">how</span>.
            </li>
            <li>
              <span className="text-orange-300 font-bold">Lazy Evaluation</span>
              : Operations are executed only when necessary, optimizing
              performance.
            </li>
            <li>
              <span className="text-orange-300 font-bold">Single Use</span>:
              Streams cannot be reused once consumed; they are designed for
              single-pass processing.
            </li>
            <li>
              <span className="text-orange-300 font-bold">
                Non-Destructive Operations
              </span>
              : Methods like{" "}
              <span className="text-blue-300 font-bold">filter()</span>,{" "}
              <span className="text-blue-300 font-bold">map()</span>, and{" "}
              <span className="text-blue-300 font-bold">sorted()</span> do not
              modify the original data.
            </li>
            <li>
              <span className="text-orange-300 font-bold">
                Internal Iteration
              </span>
              : Streams handle iteration internally, unlike collections that
              require explicit loops.
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Stream Characteristics with Lazy Evaluation
List<String> result = names.stream()
                           .filter(name -> name.length() > 3) // Lazy
                           .map(String::toUpperCase) // Non-Destructive Operation
                           .toList();  // Triggers execution
// Output: ["ANGELA", "DWIGHT", "MICHAEL"]`}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Java Streams have several key characteristics that make them
            powerful tools for data processing. These characteristics help
            developers write cleaner, more efficient, and more readable code.
          </p>
          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">
                Declarative Style
              </span>
              : Emphasizes the <span className="font-bold">what</span> to do
              rather than the <span className="font-bold">how</span> to do it.
              This allows developers to focus on the desired outcomes and
              results of data processing rather than the specific steps to
              achieve those outcomes.
            </li>
          </ul>

          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Declarative Style Example
List<String> longNames = names.stream()
                              .filter(name -> name.length() > 3)
                              .collect(Collectors.toList());
// Instead of using explicit loops and conditionals
`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">Lazy Evaluation</span>
              : Operations are not executed until a terminal operation is
              invoked, optimizing performance by avoiding unnecessary
              computations.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Lazy evaluation means that streams are processed on demand. No
            operation is performed until it&apos;s needed for a terminal
            operation. This optimizes the performance and allows for the
            building of complex pipelines without immediate computation
            overhead.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Lazy Evaluation Example
List<String> processedNames = names.stream()
                                   .filter(name -> name.length() > 3)
                                   .map(String::toUpperCase)
                                   .collect(Collectors.toList());
// Output printed during processing due to peek()
`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">Single Use</span>:
              Streams are designed to be consumed once. Attempting to reuse a
              stream after it has been processed will result in an{" "}
              <span className="text-red-400 font-bold">
                IllegalStateException
              </span>
              .
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Streams follow a &quot;single-use&quot; principle, meaning once a
            stream has been consumed by a terminal operation, it cannot be
            reused. This promotes immutability and side-effect-free operations
            but requires caution to avoid inadvertently trying to reuse streams.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Single Use Example
Stream<String> nameStream = names.stream();
nameStream.forEach(System.out::println);
nameStream.forEach(System.out::println); // Throws IllegalStateException
`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">
                Non-Destructive Operations
              </span>
              : Methods like{" "}
              <span className="text-blue-300 font-bold">filter()</span>,{" "}
              <span className="text-blue-300 font-bold">map()</span>, and{" "}
              <span className="text-blue-300 font-bold">sorted()</span> do not
              modify the original data, preserving data integrity.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Stream operations are non-destructive, meaning the original data
            remains unchanged. This immutability makes streams safer and easier
            to work with, as there are no unintended side effects that can alter
            data.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Non-Destructive Example
List<String> originalNames = new ArrayList<>(Arrays.asList("Michael", "Jim", "Pam"));
List<String> modifiedNames = originalNames.stream()
                                          .map(String::toUpperCase)
                                          .collect(Collectors.toList());
// 'originalNames' remains unchanged
`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">
                Internal Iteration
              </span>
              : Unlike collections that require explicit loops (external
              iteration), streams use internal iteration, handling the logic
              behind the scenes.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Streams abstract away the iteration logic, making the code more
            concise and readable. The iteration is handled internally, freeing
            developers from managing the loop counters and breaking conditions.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Internal Iteration Example
names.stream().forEach(System.out::println);
// The iteration is handled internally, no need for 'for' or 'while' loops
`}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  );
}

KeyCharacteristicsOfStreams.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
