import {Navbar} from "flowbite-react";

export default function Navigation() {
    let href = window.location.pathname.split("/");

    return (
        <Navbar className="bg-gray-900 py-4">
            <Navbar.Brand href="/">
                <span
                    className="self-center whitespace-nowrap text-2xl font-extrabold text-gray-200 transition-transform ease-in-out duration-200 hover:-translate-y-2">CreatixStudio</span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link href="/" className={`${
                    href[1] === ""
                        ? "bg-white md:bg-transparent text-blue-600"
                        : "text-gray-200 hover:text-primary md:hover:text-blue-600"
                }`}>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/about-us" className={`${
                    href[1] === "about-us"
                        ? "bg-white md:bg-transparent text-blue-600"
                        : "text-gray-200 hover:text-primary md:hover:text-blue-600"
                }`}>
                    About Us
                </Navbar.Link>
                <Navbar.Link href="/services" className={`${
                    href[1] === "services"
                        ? "bg-white md:bg-transparent text-blue-600"
                        : "text-gray-200 hover:text-primary md:hover:text-blue-600"
                }`}>Services</Navbar.Link>
                <Navbar.Link href="/portfolio" className={`${
                    href[1] === "portfolio"
                        ? "bg-white md:bg-transparent text-blue-600"
                        : "text-gray-200 hover:text-primary md:hover:text-blue-600"
                }`}>Portfolio</Navbar.Link>
                <Navbar.Link href="/contact-us" className={`${
                    href[1] === "contact-us"
                        ? "bg-white md:bg-transparent text-blue-600"
                        : "text-gray-200 hover:text-primary md:hover:text-blue-600"
                }`}>Contact Us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
