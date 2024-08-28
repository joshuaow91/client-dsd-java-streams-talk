import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../utils/SyntaxStyles";

export default function WhatAreStreams({ isConcise }) {

  return (
    <div className="max-w-7xl mx-auto mt-16 pb-48">
      <h2 className="text-6xl font-bold mb-4">What are Java Streams?</h2>

      {isConcise ? (
        <>
          <ul className="list-disc marker:text-pink-500 list-inside text-2xl mb-6 leading-10">
            <li>Simplifies data processing with concise and readable code.</li>
            <li>Easy manipulation of collections, arrays, and more.</li>
            <li>Supports parallel processing for concurrent code.</li>
            <li>Provides a more expressive functional approach.</li>
          </ul>
          <SyntaxHighlighter language="java" style={oneDark} customStyle={customStyle}>
            {`//Streams Code
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

public List<String> filterNamesUsingStream(List<String> names) {
    List<String> filteredNames = names.stream()
                                      .filter(name -> name.startsWith("A"))
                                      .collect(Collectors.toList());
    return filteredNames;
}`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="java" style={oneDark} customStyle={customStyle}>
            {`//For Loop Equivalent
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

public List<String> filterNamesUsingLoop(List<String> names) {
    List<String> filteredNames = new ArrayList<>();
    for (String name : names) {
        if (name.startsWith("A")) {
            filteredNames.add(name);
        }
    }
    return filteredNames;
}`}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <p className="text-2xl mb-6 leading-10">
            Java 8 introduced the Streams API, revolutionizing the way we
            perform operations on collections by providing a more functional,
            declarative approach. Streams allow Java to bridge the gap between
            imperative programming (using explicit loops and conditionals) and
            functional programming (using operations like{" "}
            <code className="text-green-300">map</code>,{" "}
            <code className="text-green-300">filter</code>, and{" "}
            <code className="text-green-300">reduce</code>).
          </p>
          <ul className="list-disc marker:text-pink-500 list-inside text-2xl mb-6 leading-10">
            <li>
              Simplifies data processing with <u>concise</u> and <u>readable</u>{" "}
              code.
            </li>
            <li>
              Allows for easy manipulation of collections, arrays, and more.
            </li>
            <li>
              Supports parallel processing, making it easier to write concurrent
              code.
            </li>
            <li>
              Offers a functional approach, making your code more{" "}
              <u>expressive.</u>
            </li>
          </ul>
          <SyntaxHighlighter language="java" style={oneDark} customStyle={customStyle}>
            {`//Streams Code
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

public List<String> filterNamesUsingStream(List<String> names) {
    List<String> filteredNames = names.stream()
                                      .filter(name -> name.startsWith("A"))
                                      .collect(Collectors.toList());
    return filteredNames;
}`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="java" style={oneDark} customStyle={customStyle}>
            {`//For Loop Equivalent
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

public List<String> filterNamesUsingLoop(List<String> names) {
    List<String> filteredNames = new ArrayList<>();
    for (String name : names) {
        if (name.startsWith("A")) {
            filteredNames.add(name);
        }
    }
    return filteredNames;
}`}
          </SyntaxHighlighter>
          <p className="text-2xl mt-6 mb-4 leading-10">
            In the <strong>Streams</strong> example, we&apos;re using a more{" "}
            <em>declarative approach</em>. This means we&apos;re focusing on{" "}
            <strong>what</strong> we want to achieve—filtering names that start
            with &apos;A&apos;—without worrying about the <strong>how</strong>
            —like writing the actual loop or conditions. The{" "}
            <code className="text-green-300">filter()</code> method takes care
            of those details for us.
          </p>
          <p className="text-2xl mb-4 leading-10">
            On the other hand, in the <strong>For Loop</strong> example,
            we&apos;re writing out every single step ourselves. We tell the
            program exactly <strong>how</strong> to loop through the list, check
            each name, and add it to a new list if it meets our condition.
          </p>
          <p className="text-2xl leading-10">
            Using <strong>Streams</strong> makes our code shorter and easier to
            read, because we let Java handle the low-level details.
          </p>
        </>
      )}
    </div>
  );
}

WhatAreStreams.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
