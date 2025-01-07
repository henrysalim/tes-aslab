import {Carousel} from "flowbite-react";
import {useState, useEffect} from "react";
import axios from "axios";

export default function OurProjectsCarousel() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=10');
                setImages(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="h-56 sm:h-80 xl:h-96 mt-6">
            <Carousel slideInterval={5000}>
                {images.map((image, index) => (
                    <img src={image.download_url} key={index} alt={image.author}/>
                ))}
            </Carousel>
        </div>
    );
}
