import MainLayout from "../Layout/MainLayout.jsx";
import MainHeading from "../Components/MainHeading.jsx";
import Welcoming from "../Components/Home/Welcoming.jsx";
import OurServices from "../Components/Home/OurServices.jsx";
import OurProjects from "../Components/Home/OurProjects.jsx";
import {useEffect, useRef} from "react";
import gsap from "gsap";

export default function Home() {
    const divRef = useRef(null);

    useEffect(() => {
        gsap.from(divRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        });
    }, []);

    return (
        <MainLayout>
            <div ref={divRef} style={{
                opacity: 100,
                transform: 'translateY(0)',
            }}>
                <MainHeading>Selamat datang di <span
                    className="font-extrabold">CreatixStudio</span>!
                </MainHeading>

                <Welcoming/>
                <OurProjects/>
                <OurServices/>
            </div>
        </MainLayout>
    )
}