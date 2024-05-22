import {
  GoogleMap,
  useLoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import { data } from "./cordinate.json/cordinate";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const App = () => {
  const newCordinates = data?.map(
    (item: any) =>
      item?.loc.coordinates && {
        lat: item?.loc.coordinates[0],
        lng: item?.loc.coordinates[1],
      }
  );

  const center = newCordinates[0];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB-UWylaoP7bqyRI-LbyPFY-7D0vm9zk20",
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Polyline path={newCordinates} />
      </GoogleMap>
    </div>
  );
};

export default App;
