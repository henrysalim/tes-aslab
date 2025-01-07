import MainLayout from "./layout/MainLayout.jsx";
import {Button} from "flowbite-react";

export default function Home() {
    return (
        <MainLayout>
            <h1 className="text-center text-3xl md:text-4xl font-semibold">Selamat datang di <span
                className="font-extrabold">CreatixStudio</span>!
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-semibold mt-10">
                <div>
                    <img src="./images/company.jpg" alt="Company" className="rounded-md"/>
                </div>
                <div>
                    <p className="text-justify text-base md:text-lg">Kami adalah rumah bagi para kreator yang
                        berdedikasi
                        untuk membawa ide kreatif Anda ke realitas.
                        Temukan solusi digital yang inovatif dan efektif untuk semua kebutuhan desain, animasi, dan game
                        Anda di sini!</p>
                    <Button className="mt-6 bg-primary hover:bg-gray-700 hover:-translate-y-2 transition-all duration-200 ease-in-out">Contact Us</Button>
                </div>
            </div>
        </MainLayout>
    )
}