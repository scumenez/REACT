import React from "react";
import useCurrentLocation from "./useLocation";

const LocationComponent = () => {
  const { location, fetchLocation, error, loading } = useCurrentLocation();

  return (
    <div>
      <button onClick={fetchLocation} disabled={loading}>
        {loading ? "Loading..." : "Get Current Location"}
      </button>
      {error && <p>Error: {error.message}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
};

export default LocationComponent;
