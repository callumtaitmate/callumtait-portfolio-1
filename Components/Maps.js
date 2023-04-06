import "mapbox-gl/dist/mapbox-gl.css";
import Map, { MapboxMap, Marker, Popup } from "react-map-gl";
import { max } from "date-fns";
import getCenter from "geolib/es/getCenter";
function Maps({ searchResults }) {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiY2FsbHVtdGFpdG1hdGUiLCJhIjoiY2xnM2JyYndyMGRvczNubjk1c20zNG14aiJ9.jXgKq4gqi6u0Y9H018AMAA";
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));
  const center = getCenter(coordinates);
  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: 600, height: "max-height" }}
      mapStyle="mapbox://styles/callumtaitmate/clg3bun01000701jzijkuf52x"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {searchResults.map((result) => {
        <div key={result.long}>
          <Marker longitude={result.long}
          latitude={result.lat}>
            <p>
            📌
            </p>
          </Marker>
          
        </div>;
      })}
    </Map>
  );
}

export default Maps;
