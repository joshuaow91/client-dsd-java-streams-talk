import AboutSection from "./AboutStreams";

export default function Header() {

    return (
        <header className="flex flex-col items-center justify-center py-24">
            <h1 className="text-9xl mb-8 tracking-tighter drop-shadow-lg uppercase font-black bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                Java Streams API
            </h1>

            <AboutSection/>
        </header>
    )
}