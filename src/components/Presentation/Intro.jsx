import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function Intro() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-7xl font-bold text-white/90 mb-4">
        Intro to Streams
      </h2>
      <ul className="list-disc marker:text-pink-500 pl-6 text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          <span className="text-orange-300 font-bold">
            Introduced in Java 8
          </span>
        </li>
        <li>
          <span className="text-blue-300 font-bold">
            Offer a functional/declarative approach
          </span>{" "}
          to do operations on a collection of objects
        </li>
        <li>
          With streams we specify{" "}
          <span className="text-red-300">&quot;what&quot;</span> we want through
          operations, the <span className="text-red-300">&quot;how&quot;</span>{" "}
          is handled by the Streams API. This declarative approach focuses on
          the outcome rather than the process.
        </li>
        <li>
          <span className="text-green-300 font-bold">
            Iteration is handled internally
          </span>
          , eliminating the need for explicit loops, reducing runtime, and
          saving memory.
        </li>
        <li>
          Streams are{" "}
          <span className="text-orange-300 font-bold">immutable</span>; each
          operation does not modify the original source.
        </li>
      </ul>
      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
      >
        {`// Example: Filtering Names
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");
List<String> filteredNames = names.stream()
                                  .filter(name -> name.startsWith("A"))
                                  .collect(Collectors.toList());
// Result: ["Angela"]`}
      </SyntaxHighlighter>
    </div>
  );
}
