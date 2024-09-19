import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Intro() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Intro</h2>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        - Introduced in Java 8 <br />
        - Offer a functional/declarative approach to do operations on a
        collection of objects <br />- With streams we specify &quot;what&quot;
        we want through operations, the &quot;how&quot; is handled by the
        Streams API. This declarative approach focuses on the outcome rather
        than the process.
      </p>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        - Iteration is handled internally, eliminating the need for explicit
        loops, reducing runtime, and saving memory. Streams are immutable; each
        operation does not modify the original source.
      </p>
      <SyntaxHighlighter language="java" style={oneDark}>
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
