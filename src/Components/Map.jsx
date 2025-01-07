export default function Map() {
    return (
        <div className="flex justify-center">
            <iframe
                className="mt-6 w-full h-[400px] md:w-[1000px] md:h-[600px] rounded"
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_IVtwYtxHSL9MqhobNoWSWFTrQBd6OIY
    &q=Universitas+Multimedia+Nusantara">
            </iframe>
        </div>
    )
}