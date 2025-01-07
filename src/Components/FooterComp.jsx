import {Footer} from "flowbite-react";

export default function FooterComp() {
    return (
        <Footer container className="bottom-0 w-full">
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <span className="text-2xl font-bold">CreatixStudio</span>
                    <Footer.LinkGroup>
                        <Footer.Link href="/">Home</Footer.Link>
                        <Footer.Link href="/about-us">About Us</Footer.Link>
                        <Footer.Link href="/services">Services</Footer.Link>
                        <Footer.Link href="/portfolio">Portfolio</Footer.Link>
                        <Footer.Link href="/contact-us">Contact Us</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider/>
                <Footer.Copyright href="/" by="CreatixStudio™" year={2025}/>
            </div>
        </Footer>
    );
};