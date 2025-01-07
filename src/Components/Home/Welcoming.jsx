import {Button} from "flowbite-react";

export default function Welcoming() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-semibold mt-16">
            <div>
                <img src="./images/company.jpg" alt="Company" className="rounded-md"/>
            </div>
            <div>
                <p className="text-justify text-base md:text-lg">Selamat datang di Creatix Studio, tempat di mana
                    imajinasi Anda bertransformasi menjadi realitas visual yang memukau. Dengan dedikasi yang kuat
                    terhadap inovasi dan kreativitas, kami mengkhususkan diri dalam menciptakan animasi yang
                    dinamis, desain grafis yang revolusioner, dan pengembangan game yang imersif. Di Creatix Studio,
                    setiap piksel menceritakan kisah, dan kami berkomitmen untuk membawa visi kreatif Anda ke
                    tingkat yang lebih tinggi dengan solusi yang tidak hanya memenuhi, tapi melampaui ekspektasi
                    Anda.</p>
                <Button
                    className="btn-primary">Contact Us</Button>
            </div>
        </div>
    )
}