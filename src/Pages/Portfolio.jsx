import MainLayout from "../Layout/MainLayout.jsx";
import MainHeading from "../Components/MainHeading.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Portfolio() {
    const [images, setImages] = useState([]);

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

    return (
        <MainLayout>
            <MainHeading>Our Portfolio</MainHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                {images.map((image, index) => (
                    <div key={index} className="w-full h-72 md:w-64 md:h-64 lg:w-96 lg:h-96">
                        <img className="rounded object-cover w-full h-full" src={image.download_url} alt={image.author}/>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}