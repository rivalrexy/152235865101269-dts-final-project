import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const CardMapLeaflet = ({ cordinateLon, cordinateLat }) => {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  const position = [cordinateLon, cordinateLat];

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  return (
    <MapContainer
      className="w-2/3"
      center={position}
      zoom={13}
      scrollWheelZoom={false}>
      <ChangeView center={[cordinateLat, cordinateLon]} zoom={13} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[cordinateLat, cordinateLon]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default CardMapLeaflet;
