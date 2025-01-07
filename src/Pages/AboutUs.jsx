import MainLayout from "../Layout/MainLayout.jsx";
import MainHeading from "../Components/MainHeading.jsx";

export default function AboutUs() {
    return (
        <MainLayout>
            <MainHeading>About Us</MainHeading>
            <div className="mt-16">
                <img src="./images/hero-aboutus.jpg" alt="CreatixStudio" className="object-cover rounded w-full h-96"/>
                <p className="mt-4 text-center"><span className="font-bold">CreatixStudio</span> didirikan dengan visi
                    untuk mendorong batas-batas
                    kreativitas dan inovasi dalam dunia
                    digital. Sejak awal, kami telah berkomitmen untuk menyajikan hasil karya yang tidak hanya menarik
                    secara
                    estetika, tetapi juga efektif dalam menyampaikan pesan dan nilai klien kami. Dengan tim yang terdiri
                    dari para ahli yang berbakat di bidang desain grafis, animasi, pengembangan game, dan produksi
                    video,
                    kami menghadirkan solusi kreatif yang holistik dan integratif.</p>
            </div>
            <div className="mt-32 bg-primary text-gray-200 rounded-md p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-center lg:text-left text-2xl font-bold">Filosofi Kami</h2>
                        <p className="text-center lg:text-left mt-3">
                            Di <span className="font-bold">CreatixStudio</span>, kami percaya bahwa setiap ide memiliki
                            potensi untuk berkembang menjadi
                            sesuatu
                            yang luar biasa. Kunci dari keberhasilan kami adalah pendekatan kolaboratif kami, di mana
                            kami
                            bekerja bersama klien sebagai satu tim untuk memahami dan memperluas visi mereka. Kami
                            mengutamakan
                            inovasi dan detail dalam setiap aspek pekerjaan kami, yang memungkinkan kami untuk
                            menciptakan
                            produk yang unik dan personal.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-center lg:text-left text-2xl font-bold">Pencapaian Kami</h2>
                        <p className="text-center lg:text-left mt-3">
                            Sepanjang perjalanan kami, <span className="font-bold">CreatixStudio</span> telah meraih
                            berbagai pencapaian penting. Kami
                            telah bekerja dengan ratusan klien, dari start-up yang inovatif hingga merek besar yang
                            diakui secara global, membantu mereka semua dalam mencapai tujuan bisnis mereka melalui
                            solusi kreatif yang efektif. Projek-projek kami telah diakui dan dipuji baik dalam lingkup
                            lokal maupun internasional, menegaskan komitmen kami terhadap keunggulan kreatif.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-center mt-6">Komitmen Kami ke Depan</h2>
                    <p className="mt-3 text-center">
                        Maju ke depan, <span className="font-bold">CreatixStudio</span> tetap berdedikasi untuk
                        mengembangkan teknik dan metodologi baru,
                        memperluas jasa kami untuk mencakup teknologi terbaru dalam AI dan virtual reality, dan terus
                        memperkuat tim kami dengan talenta-talenta terbaik di industri. Kami berkomitmen untuk terus
                        mempelopori inovasi dan mendorong batas-batas kreatif, sambil memastikan bahwa setiap klien
                        mendapatkan solusi yang bukan hanya memenuhi, tetapi juga melampaui ekspektasi mereka.
                    </p>
                </div>
            </div>
            <div className="mt-32">
                <img src="./images/about-bottom.jpg" alt="CreatixStudio"
                     className="rounded w-full h-96 lg:h-[600px] object-cover"/>
                <div className="flex justify-center">
                    <p className="w-full lg:w-1/2 mt-3 text-center italic">
                        Di <span className="font-bold">CreatixStudio</span>, kami bukan hanya membuat desain; kami
                        membantu Anda menceritakan kisah Anda
                        kepada dunia. Bergabunglah dengan kami dalam perjalanan kreatif ini dan transformasikan cara
                        dunia
                        melihat merek Anda.
                    </p>
                </div>
            </div>
        </MainLayout>
    )
}