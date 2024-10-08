import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function InternalWorkingsOfStream() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Internal Workings of a Stream and Pipeline
      </h2>

      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        Streams in Java process data using a pipeline model, which involves
        three main stages:
      </p>
      <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          <span className="text-blue-300 font-bold">Source</span>: Represents
          the data origin, such as a collection, an array, or an I/O channel.
          The source stage initiates the stream and provides the data elements
          that will be processed by the pipeline.
        </li>
      </ul>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        The source is the starting point of a stream. It can be any data
        structure that Java can iterate over, including collections (like lists
        and sets), arrays, or input/output channels (like files). The source
        establishes the type of data the stream will process.
      </p>
      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
      >
        {`// Example: Stream Source
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);  // Source: List collection
Stream<Integer> stream = numbers.stream();
`}
      </SyntaxHighlighter>

      <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          <span className="text-blue-300 font-bold">
            Intermediate Operations
          </span>
          : These operations transform a stream into another stream, allowing
          for various data manipulations. Examples include{" "}
          <span className="text-green-300 font-bold">filter()</span>,{" "}
          <span className="text-green-300 font-bold">map()</span>, and{" "}
          <span className="text-green-300 font-bold">sorted()</span>.
          Intermediate operations are always lazy; they are not executed until a
          terminal operation is invoked.
        </li>
      </ul>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        Intermediate operations allow you to build a pipeline of processing
        steps. They transform the data as it passes through the stream, allowing
        for filtering, mapping, and sorting. Because these operations are lazy,
        they do not perform any actual computation until the terminal operation
        is invoked.
      </p>
      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
      >
        {`// Example: Intermediate Operations
List<Integer> evenSquares = numbers.stream()          // Source
                                   .filter(n -> n % 2 == 0) // Intermediate
                                   .map(n -> n * n);   // Intermediate
// Nothing is printed or calculated until a terminal operation is called
`}
      </SyntaxHighlighter>

      <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          <span className="text-blue-300 font-bold">Terminal Operation</span>:
          An operation that produces a result or a side effect, such as{" "}
          <span className="text-green-300 font-bold">collect()</span>,{" "}
          <span className="text-green-300 font-bold">forEach()</span>, or{" "}
          <span className="text-green-300 font-bold">reduce()</span>. It
          triggers the execution of the entire pipeline, processing all elements
          as defined by the intermediate operations.
        </li>
      </ul>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        Terminal operations mark the end of the stream pipeline. They produce a
        result or a side effect and trigger the processing of all elements
        through the intermediate operations. Once a terminal operation is
        executed, the stream is considered &quot;consumed&quot; and can no
        longer be used.
      </p>
      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
      >
        {`// Example: Terminal Operation
List<Integer> result = evenSquares.collect(Collectors.toList()); // Terminal
// Result: [4, 16] - Stream pipeline execution triggered and completed
`}
      </SyntaxHighlighter>

      <h3 className="text-3xl md:text-4xl font-bold mt-8 mb-4">
        Putting It All Together: A Complete Stream Pipeline
      </h3>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        A complete stream pipeline includes a source, zero or more intermediate
        operations, and a terminal operation. This example demonstrates how a
        stream processes data from start to finish.
      </p>
      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
      >
        {`// Complete Stream Pipeline Example
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");
List<String> processedNames = names.stream()                 // Source
                                   .filter(name -> name.length() > 3) // Intermediate
                                   .map(String::toUpperCase)         // Intermediate
                                   .sorted()                         // Intermediate
                                   .collect(Collectors.toList());    // Terminal
// Result: ["ANGELA", "DWIGHT", "MICHAEL"]
`}
      </SyntaxHighlighter>

      <p className="text-lg md:text-2xl mt-6 leading-8 md:leading-10">
        In this pipeline, the stream starts with a source (the list of names),
        applies several intermediate operations (filtering, mapping, sorting),
        and finishes with a terminal operation (collecting the results into a
        list). Each stage plays a crucial role in the processing pipeline.
      </p>
    </div>
  );
}
