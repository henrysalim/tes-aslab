import MainLayout from "../Layout/MainLayout.jsx";
import MainHeading from "../Components/MainHeading.jsx";

export default function Services() {
    return (
        <MainLayout>
            <MainHeading>Our Services</MainHeading>
            <div className="flex justify-center">
                <p className="w-full md:w-1/2 mt-16 text-center">
                    Di <span className="font-bold">CreatixStudio</span>, kami menawarkan rangkaian layanan kreatif yang
                    komprehensif, dirancang untuk
                    membantu
                    merealisasikan setiap aspek visi kreatif Anda. Berikut adalah gambaran lebih lanjut tentang layanan
                    utama yang kami tawarkan:
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
            <div className="flex flex-col-reverse lg:flex-row justify-center gap-3 md:gap-8 lg:gap-16 mt-10">
                <div className="w-full lg:w-1/3">
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Pengembangan Game</h2>
                    <p className="text-justify">Tim pengembang game kami mengkombinasikan seni
                        kreatif dengan teknologi terbaru
                        untuk menciptakan pengalaman bermain game yang menarik dan mendalam. Dari game mobile hingga
                        aplikasi edukasi interaktif, kami menawarkan solusi game yang tidak hanya menghibur tetapi juga
                        mempertahankan nilai edukatif dan interaktif.
                    </p>
                </div>
                <div>
                    <img loading="lazy" src="./images/gamedev.jpg" alt="Graphic Design"
                         className="w-full lg:w-[400px] rounded"/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-3 md:gap-8 lg:gap-16 mt-10">
                <div>
                    <img loading="lazy" src="./images/video-prod.jpg" alt="Graphic Design"
                         className="w-full lg:w-[400px] rounded"/>
                </div>
                <div className="w-full lg:w-1/3">
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Produksi Video</h2>
                    <p className="text-justify">
                        Apakah Anda membutuhkan video korporat, iklan, atau konten media sosial, tim produksi video kami
                        memiliki keahlian untuk menghasilkan video berkualitas tinggi yang beresonansi dengan audiens
                        Anda. Kami menggabungkan narasi visual yang menarik dengan editing dan post-produksi yang cermat
                        untuk memastikan setiap video tidak hanya terlihat profesional tetapi juga memiliki dampak yang
                        kuat.
                    </p>
                </div>
            </div>

            <div className="flex justify-center">
                <p className="w-full md:w-1/2 mt-16 text-center italic">
                    Di <span className="font-bold">CreatixStudio</span>, setiap proyek dianggap sebagai sebuah kesempatan untuk inovasi dan keunggulan
                    kreatif. Kami bangga dapat bekerja erat dengan klien kami untuk menghasilkan hasil yang tidak hanya
                    memenuhi, tetapi seringkali melampaui harapan. Mari bawa visi Anda ke realitas bersama kami!
                </p>
            </div>
        </MainLayout>
    )
}