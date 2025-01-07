import OurProjectsCarousel from "./OurProjectsCarousel.jsx";

export default function OurProjects() {
    return (
        <div className="mt-36">
            <h1 className="text-center text-3xl md:text-4xl font-semibold">Our Projects</h1>
            <OurProjectsCarousel/>
            <a href="/portfolio" className="block underline mt-4 text-center">See more our
                projects &rarr;</a>
        </div>
    )
}