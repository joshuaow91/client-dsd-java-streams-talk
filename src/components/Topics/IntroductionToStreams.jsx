import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function IntroductionToStreams() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Introduction to Java Streams
      </h2>

      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        Java Streams provide a powerful,{" "}
        <span className="text-green-300 font-bold">functional</span> way to
        process data collections. They simplify data manipulation tasks by
        handling sequences of elements either in{" "}
        <span className="text-green-300 font-bold">parallel</span> or{" "}
        <span className="text-green-300 font-bold">sequentially</span>, reducing
        the need for verbose, boilerplate code. By leveraging the functional
        programming paradigm, streams allow for more readable, maintainable, and
        efficient code.
      </p>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        A <span className="text-green-300 font-bold">functional approach</span>{" "}
        means focusing on <span className="text-blue-300 font-bold">what</span>{" "}
        needs to be done with the data rather than{" "}
        <span className="text-blue-300 font-bold">how</span> to perform the
        operations. This shifts the emphasis from explicit control flow to
        declarative data transformations.
      </p>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        Java Streams support various operations such as{" "}
        <span className="text-blue-300 font-bold">filtering</span>,{" "}
        <span className="text-blue-300 font-bold">mapping</span>,{" "}
        <span className="text-blue-300 font-bold">reducing</span>, and many
        others that can be executed in a chain, enhancing the expressiveness and
        flexibility of code.
      </p>
      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
      >
        {`// Example: Filtering and Mapping Names
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");
List<String> result = names.stream()
                           .filter(name -> name.startsWith("A"))
                           .map(String::toUpperCase)
                           .collect(Collectors.toList());
// Result: ["ANGELA"]`}
      </SyntaxHighlighter>
      <p className="text-lg md:text-2xl mt-6 leading-8 md:leading-10">
        This example demonstrates how a stream can filter a list to include only
        names that start with &apos;A&apos; and then map those names to
        uppercase. The code is concise, readable, and avoids the need for
        explicit loops and conditionals.
      </p>
      <h3 className="text-3xl md:text-4xl font-bold mt-8 mb-4">
        Benefits of Using Java Streams
      </h3>
      <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          <span className="text-green-300 font-bold">Conciseness</span>: Reduces
          boilerplate code, making code shorter and easier to read.
        </li>
        <li>
          <span className="text-green-300 font-bold">Parallel Processing</span>:
          Leverages multi-core processors to process data in parallel,
          potentially improving performance.
        </li>
        <li>
          <span className="text-green-300 font-bold">Immutability</span>:
          Promotes immutable operations, reducing the risk of side effects and
          enhancing code safety.
        </li>
        <li>
          <span className="text-green-300 font-bold">Lazy Evaluation</span>:
          Streams are evaluated lazily, meaning operations are only executed
          when necessary, optimizing performance.
        </li>
      </ul>
      <h3 className="text-3xl md:text-4xl font-bold mt-8 mb-4">
        Real-World Application of Streams
      </h3>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        In real-world applications, streams can be used to simplify complex data
        processing tasks. For example, processing large datasets, performing
        transformations, and aggregating results can all be done concisely with
        streams. They are particularly useful in scenarios such as data
        analysis, machine learning pipelines, and handling real-time data
        streams.
      </p>
      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
      >
        {`// Real-World Example: Aggregating Employee Salaries
List<Employee> employees = getEmployees();
double totalSalary = employees.stream()
                              .filter(
                              employee -> employee.getDepartment().equals("Sales"))
                              .mapToDouble(Employee::getSalary)
                              .sum();
// Result: Total salary of employees in the Sales department`}
      </SyntaxHighlighter>
      <p className="text-lg md:text-2xl mt-6 leading-8 md:leading-10">
        In this example, the stream filters employees by department and then
        maps their salaries to a double stream, which is subsequently summed up.
        This showcases how streams can be effectively used to aggregate and
        compute results from data collections.
      </p>
    </div>
  );
}
