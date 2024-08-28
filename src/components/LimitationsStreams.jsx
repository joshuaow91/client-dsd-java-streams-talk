export default function LimitationsOfStreams() {
  return (
      <div className="max-w-5xl mx-auto pb-48">
        <h3 className="text-6xl font-semibold mb-4 mt-16">
          Limitations of Streams
        </h3>
        <ul className="list-disc list-inside text-2xl mb-48 leading-10">
          <li>
            <strong className="text-orange-300">Once-Only Usage:</strong>{" "}
            Streams cannot be reused once they’ve been operated upon or
            consumed. If you need to traverse a stream more than once, create a
            new stream.
          </li>
          <li>
            <strong className="text-orange-300">No Direct Index Access:</strong>{" "}
            Unlike traditional loops, streams do not support indexed access,
            which can make certain operations less straightforward.
          </li>
          <li>
            <strong className="text-orange-300">
              Debugging and Stack Traces:
            </strong>{" "}
            Debugging streams can be more challenging due to the functional and
            lambda-based syntax, which can lead to less informative stack
            traces.
          </li>
        </ul>
      </div>
  );
}
