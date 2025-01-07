import Navigation from "../Components/Navigation.jsx";
import FooterComp from "../Components/FooterComp.jsx";

export default function MainLayout({children}) {
    return (
        <div className="bg-stone-200 h-screen text-primary">
            <Navigation/>
            <div className="mx-10 mt-10 md:mx-32 pb-10">
                {children}
            </div>
            <FooterComp />
        </div>
    )
}