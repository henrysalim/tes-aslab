import MainLayout from "../Layout/MainLayout.jsx";
import MainHeading from "../Components/MainHeading.jsx";
import {Button, Label, Textarea, TextInput} from "flowbite-react";
import Map from "../Components/Map.jsx";

export default function ContactUs() {
    return (
        <MainLayout>
            <MainHeading>Hubungi Kami</MainHeading>
            <div className="flex justify-center">
                <form className="flex w-full md:w-3/4 flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email"/>
                        </div>
                        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your message"/>
                        </div>
                        <Textarea id="comment" placeholder="Leave a comment..." required rows={4}/>
                    </div>
                    <Button type="submit" className="btn-primary">Submit</Button>
                </form>
            </div>

            <Map/>
        </MainLayout>
    )
}