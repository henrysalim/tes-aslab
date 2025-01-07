import { Navbar } from "flowbite-react";

export default function Navigation() {
    return (
        <Navbar className="bg-gray-900 py-4">
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-2xl font-extrabold text-gray-200">CreatixStudio</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#" className="text-gray-200">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#" className="text-gray-200">
                    About Us
                </Navbar.Link>
                <Navbar.Link href="#" className="text-gray-200">Services</Navbar.Link>
                <Navbar.Link href="#" className="text-gray-200">Portfolio</Navbar.Link>
                <Navbar.Link href="#" className="text-gray-200">Contact Us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
