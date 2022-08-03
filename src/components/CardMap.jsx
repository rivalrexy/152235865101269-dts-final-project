import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const CardMap = () => {
  const mapStyles = {
    height: "80vh",
    width: "50%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.API_KEY_GMAPS}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default CardMap;
