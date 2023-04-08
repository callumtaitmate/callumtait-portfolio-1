import "mapbox-gl/dist/mapbox-gl.css";
import Map, { MapboxMap, Marker, Popup } from "react-map-gl";
import { max } from "date-fns";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";
function Maps({ searchResults }) {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiY2FsbHVtdGFpdG1hdGUiLCJhIjoiY2xnM2JyYndyMGRvczNubjk1c20zNG14aiJ9.jXgKq4gqi6u0Y9H018AMAA";
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));
  const center = getCenter(coordinates);
  const pins = searchResults.map((position) => {
    <div key={position.long}>
      <Marker
        longitude={-0.08452479386870405}
        latitude={51.50996326851979}
        offsetLeft={-20}
        offsetTop={-10}
        anchor="bottom"
      >
        <p className="cursor-pointer text-2xl">📌</p>
      </Marker>
    </div>;
  });
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
      {pins}
    </Map>
  );
}

export default Maps;
