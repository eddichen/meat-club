import { useEffect, useState } from "react";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";

const Search = () => {
  const [placesService, setPlacesService] =
    useState<google.maps.places.PlacesService | null>(null);

  const map = useMap();
  const placesLibrary = useMapsLibrary("places");

  useEffect(() => {
    if (!placesLibrary || !map) return;

    // when placesLibrary is loaded, the library can be accessed via the
    // placesLibrary API object
    setPlacesService(new placesLibrary.PlacesService(map));
  }, [placesLibrary, map]);

  const request = {
    query: "Smokehouse Islington",
    fields: ["name", "formatted_address", "business_status", "icon", "types"],
  };

  useEffect(() => {
    if (!placesService) return;
    placesService.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log("results", results);
      }
    });
    placesService;
  }, [placesService]);

  return <div>search</div>;
};

export default Search;
