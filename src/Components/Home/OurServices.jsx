import {Button} from "flowbite-react";

export default function OurServices() {
    return (
        <div className="mt-36">
            <h1 className="text-center text-3xl md:text-4xl font-semibold">Our Services</h1>
            <div className="flex justify-center">
                <p className="mt-4 w-full lg:w-1/2 text-center">
                    Di Creatix Studio, kami menawarkan rangkaian layanan kreatif yang komprehensif, dirancang untuk
                    membantu merealisasikan setiap aspek visi kreatif Anda. Berikut adalah gambaran lebih lanjut
                    tentang
                    layanan utama yang kami tawarkan:
                </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center gap-3 md:gap-8 lg:gap-16 mt-10">
                <div className="w-full lg:w-1/3">
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Desain Grafis</h2>
                    <p className="text-justify">
                        Di <span className="font-bold">CreatixStudio</span>, kami mengerti bahwa desain
                        grafis lebih dari sekedar estetika;
                        ini adalah cara komunikasi yang kuat. Tim kami yang terdiri dari desainer berbakat siap
                        menghasilkan segala sesuatu mulai dari identitas merek yang menawan hingga materi pemasaran
                        yang
                        inovatif. Kami berfokus pada penciptaan desain yang tidak hanya menarik secara visual tetapi
                        juga memenuhi tujuan strategis Anda.
                    </p>
                </div>
                <div>
                    <img loading="lazy" src="./images/graphic-design.jpg" alt="Graphic Design"
                         className="w-full lg:w-[400px] rounded"/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-3 md:gap-8 lg:gap-16 mt-10">
                <div>
                    <img loading="lazy" src="./images/animation.jpg" alt="Graphic Design"
                         className="w-full lg:w-[400px] rounded"/>
                </div>
                <div className="w-full lg:w-1/3">
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Animasi</h2>
                    <p className="text-justify">Dengan teknologi animasi terdepan dan tim kreatif
                        yang berpengalaman, kami menyediakan
                        layanan animasi yang meliputi animasi 2D, 3D, motion graphics, dan animasi eksplainer. Setiap
                        frame yang kami buat dipersiapkan dengan perhatian terhadap detail yang ketat, memastikan bahwa
                        setiap proyek memberikan dampak visual yang maksimal dan menyampaikan pesan Anda dengan efektif.
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <a href="/services">
                    <Button className="btn-primary">See more our Services &rarr;</Button>
                </a>
            </div>
        </div>
    )
}