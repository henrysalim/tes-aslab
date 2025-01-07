import MainLayout from "../Layout/MainLayout.jsx";
import MainHeading from "../Components/MainHeading.jsx";
import Welcoming from "../Components/Home/Welcoming.jsx";
import OurServices from "../Components/Home/OurServices.jsx";
import OurProjects from "../Components/Home/OurProjects.jsx";

export default function Home() {
    return (
        <MainLayout>
            <MainHeading>Selamat datang di <span
                className="font-extrabold">CreatixStudio</span>!
            </MainHeading>

            <Welcoming/>
            <OurProjects/>
            <OurServices/>
        </MainLayout>
    )
}