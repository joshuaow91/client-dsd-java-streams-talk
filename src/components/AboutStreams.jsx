import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AboutSection = () => {
  return (
    <section className="py-16 px-8 text-gray-300 rounded-3xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold mb-4">What are Java Streams?</h2>

        <p className="text-2xl mb-12 leading-10">
          Java Streams is a tool introduced in Java 8 that makes it easier to
          work with groups of data, like lists or arrays. It lets you describe
          what you want to do with the data in a clear and simple way, making
          your code shorter and easier to read. With Streams, you can handle
          complex data tasks more efficiently and with less code.
        </p>

        <h2 className="text-4xl font-bold mb-4">Why Use Streams?</h2>
        <ul className="list-disc marker:text-pink-500 list-inside text-2xl mb-6 leading-10">
          <li>Simplifies data processing with concise and readable code.</li>
          <li>
            Allows for easy manipulation of collections, arrays, and more.
          </li>
          <li>
            Supports parallel processing, making it easier to write concurrent
            code.
          </li>
          <li>
            Offers a functional approach, making your code more expressive.
          </li>
        </ul>

        <SyntaxHighlighter
          language="java"
          style={oneDark}
          className=""
        >
          {`List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
List<String> filteredNames = names.stream()
                                  .filter(name -> name.startsWith("A"))
                                  .collect(Collectors.toList());`}
        </SyntaxHighlighter>

        <p className="text-2xl mb-16 leading-10 mt-6">
          In this declarative approach, you&apos;re stating what you want
          (filtering names that start with &quot;A&quot;) rather than the how
          (like using loops and conditional statements). The{" "}
          <code className="text-blue-300">filter()</code> method internally
          handles the details, making the code more concise and readable.
        </p>

        <h2 className="text-4xl font-bold mb-4">Types of Stream Operations</h2>
        <p className="text-2xl mb-4 leading-10">
          Stream operations are categorized into two types:
          <strong className="text-blue-400"> Intermediate</strong> and
          <strong className="text-red-400"> Terminal</strong>.
        </p>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2 text-blue-400">
            Intermediate Operations
          </h3>
          <p className="text-2xl mb-4 leading-10">
            Intermediate operations return a new stream. They are lazy, meaning
            they don&apos;t execute until a terminal operation is invoked.
            Examples include <code className="text-blue-300">filter()</code>,{" "}
            <code className="text-blue-300">map()</code>, and{" "}
            <code className="text-blue-300">sorted()</code>.
          </p>
          <p className="text-xl mb-6 leading-8 text-gray-400">
            <em>Layman&apos;s Explanation:</em> Think of intermediate operations
            like steps in a recipe. You can list out all the steps (like
            chopping vegetables or mixing ingredients), but nothing actually
            gets cooked until you start the oven. Similarly, intermediate
            operations set up what you want to do with your data, but they
            don&apos;t do anything until you say &quot;go&quot; with a terminal
            operation.
          </p>

          <h3 className="text-2xl font-semibold mb-2 text-red-400">
            Terminal Operations
          </h3>
          <p className="text-2xl mb-4 leading-10">
            Terminal operations trigger the execution of the stream pipeline and
            produce a result or a side effect. Examples include{" "}
            <code className="text-red-300">collect()</code>,{" "}
            <code className="text-red-300">forEach()</code>, and{" "}
            <code className="text-red-300">reduce()</code>.
          </p>
          <p className="text-xl leading-8 text-gray-400">
            <em>Layman&apos;s Explanation:</em> Terminal operations are like
            pressing the &quot;start&quot; button on your oven. This is the
            moment when all the preparation steps (intermediate operations)
            actually get executed, and the final meal (result) is produced. Once
            you trigger a terminal operation, the whole process runs, and you
            get your output.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
