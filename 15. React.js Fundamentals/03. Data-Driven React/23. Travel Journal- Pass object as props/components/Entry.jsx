/**
 * Challenge: Fix our component! 😱
 */

export default function Entry(prop) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={prop.entry.img.src}
                    alt={prop.entry.img.alt}
                />
            </div>
            <div className="info-container">
                <img
                    className="marker"
                    src="../images/marker.png"
                    alt="map marker icon"
                />
                <span className="country">{prop.entry.country}</span>
                <a href={prop.entry.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{prop.entry.title}</h2>
                <p className="trip-dates">{prop.entry.dates}</p>
                <p className="entry-text">{prop.entry.text}</p>
            </div>

        </article>
    )
}
