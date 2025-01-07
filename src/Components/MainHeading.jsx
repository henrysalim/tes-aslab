export default function MainHeading({children, className}) {
    return (
        <h1 className={`text-center text-3xl md:text-4xl lg:text-5xl font-semibold ` + className}>{children}</h1>
    )
}