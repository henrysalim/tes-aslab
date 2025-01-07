import MainLayout from "../Layout/MainLayout.jsx";
import MainHeading from "../Components/MainHeading.jsx";
import {Button, Label, Textarea, TextInput} from "flowbite-react";
import Map from "../Components/Map.jsx";
import {useEffect, useRef} from "react";
import {Alert} from "flowbite-react";
import gsap from "gsap";

export default function ContactUs() {
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

    const handleSubmit = () => {
        document.getElementById("alert").classList.toggle("hidden");
    }

    return (
        <MainLayout>
            <div ref={divRef} style={{
                opacity: 100,
                transform: 'translateY(0)',
            }}>
                <div className="flex justify-center mb-4">
                    <Alert color="success" id="alert" className="hidden w-full md:w-3/4" onDismiss={() => document.getElementById("alert").classList.toggle("hidden")}>
                        Terima kasih! Anda akan segera kami hubungi, silakan cek email Anda secara berkala!
                    </Alert>
                </div>

                <MainHeading>Hubungi Kami</MainHeading>
                <div className="flex justify-center">
                    <form className="flex w-full md:w-3/4 flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email"/>
                            </div>
                            <TextInput id="email1" type="email" placeholder="name@something.com"/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="Your message"/>
                            </div>
                            <Textarea id="comment" placeholder="Tinggalkan pesan Anda di sini..." rows={4}/>
                        </div>
                        <Button type="submit" onClick={handleSubmit} className="btn-primary">Submit</Button>
                    </form>
                </div>
                <Map/>
            </div>
        </MainLayout>
    )
}