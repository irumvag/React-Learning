export default function Entry(props) {
    return (
        <article className="journal-entry pb-10">
            <div className="main-image-container">
                <img 
                    className="main-image inline"
                    src={props.img.src} 
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">
                <div className="flex">
                <img 
                    className="marker"
                    src="./src/assets/location.png" 
                    alt="map marker icon"
                    height="10px"
                />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
            
        </article>
    )
}