import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Search from "./components/Search";

function App() {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || "";

  return (
    <APIProvider apiKey={API_KEY}>
      <div style={{ height: "100vh" }}>
        <Map
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
        <Search />
      </div>
    </APIProvider>
  );
}

export default App;
