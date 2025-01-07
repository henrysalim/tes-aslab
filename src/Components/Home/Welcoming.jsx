import {Button} from "flowbite-react";

export default function Welcoming() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-semibold mt-16">
            <div>
                <img loading="lazy" src="./images/company.jpg" alt="Company" className="rounded-md"/>
            </div>
            <div>
                <p className="text-justify text-base md:text-lg">Selamat datang di Creatix Studio, tempat di mana
                    imajinasi Anda bertransformasi menjadi realitas visual yang memukau. Dengan dedikasi yang kuat
                    terhadap inovasi dan kreativitas, kami mengkhususkan diri dalam menciptakan animasi yang
                    dinamis, desain grafis yang revolusioner, dan pengembangan game yang imersif. Di Creatix Studio,
                    setiap piksel menceritakan kisah, dan kami berkomitmen untuk membawa visi kreatif Anda ke
                    tingkat yang lebih tinggi dengan solusi yang tidak hanya memenuhi, tapi melampaui ekspektasi
                    Anda.</p>
                <div className="flex flex-row gap-6">
                    <a href="/about-us">
                        <Button
                            className="btn-primary">Learn More About Us &rarr;</Button>
                    </a>
                    <a href="/contact-us">
                        <Button
                            className="mt-6 hover:bg-gray-700 hover:text-gray-200 hover:-translate-y-2 transition-all duration-200 ease-in-out bg-transparent border-b border-primary text-primary">Contact
                            Us</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}