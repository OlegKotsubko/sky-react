import "./map.css";

const Circle = ({ city }) => {
    const cityName = typeof city === "string" ? city : "";
    const className = "map__alert-item map__alert-item--" + cityName
    return (
        <div className={className}></div>
    )
}

export const Map = ({ cities }) => {
    return (
        <div className="map">
            <div className="map__alert">
                {
                    cities.map((city, ind) => {
                        return <Circle key={ind} city={city} />
                    })
                }
            </div>
            <div className="img">
                <img src="img/map.svg" alt="Map of Ukraine" />
            </div>
        </div>
    )
}
