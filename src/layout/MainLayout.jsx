import Navigation from "../components/Navigation.jsx";

export default function MainLayout({children}) {
    return (
        <div className="bg-stone-200 h-screen text-primary">
            <Navigation/>
            <div className="mx-10 mt-10 md:mx-32">
                {children}
            </div>
        </div>
    )
}