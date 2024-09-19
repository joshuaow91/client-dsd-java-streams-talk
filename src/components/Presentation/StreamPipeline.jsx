import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function StreamPipeline() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Stream Pipeline</h2>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        - Streams create a pipeline with three stages: <br />
        - Source <br />
        - Intermediate: Lazy, don&apos;t immediately affect memory, only impact
        runtime when a terminal operation is invoked. <br />- Terminal: Triggers
        stream execution and determines the actual runtime cost.
      </p>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        - The more complex the terminal operation, the higher the potential
        memory and runtime usage.
      </p>
      <SyntaxHighlighter language="java" style={oneDark}>
        {`// Example: Filtering Names
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");
List<String> filteredNames = names.stream() // source
                                  .filter(name -> name.startsWith("A")) //int
                                  .toList() // terminal
// Result: ["Angela"]`}
      </SyntaxHighlighter>
    </div>
  );
}
