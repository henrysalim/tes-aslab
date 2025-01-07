import MainLayout from "../Layout/MainLayout.jsx";
import MainHeading from "../Components/MainHeading.jsx";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import gsap from "gsap";

export default function Portfolio() {
    const [images, setImages] = useState([]);
    const divRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=20');
                setImages(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

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
                <MainHeading>Our Portfolio</MainHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-72 md:w-64 md:h-64 xl:w-96 xl:h-96">
                            <img loading="lazy" className="rounded object-cover w-full h-full" src={image.download_url}
                                 alt={image.author}/>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}