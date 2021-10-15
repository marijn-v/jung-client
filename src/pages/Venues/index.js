import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { selectVenues } from "../../store/event/selectors";
import { fetchEventsAndVenues } from "../../store/event/actions";

export default function Venues() {
  const dispatch = useDispatch();
  const venues = useSelector(selectVenues);
  // console.log("venue", venues);

  useEffect(() => {
    dispatch(fetchEventsAndVenues());
  }, []);

  return (
    <div>
      <div id="mapid" style={{ height: "180px" }}></div>
      <MapContainer
        center={[51.9244424, 4.47775]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {venues.map((venue) => {
          const coords = [venue.latitude, venue.longitude];
          // console.log("the coords", coords);
          return (
            <Marker key={venue.id} position={coords}>
              <Popup>
                <h4>{venue.name}</h4> <p>{venue.address}</p>
                <a href={venue.link}>go to venue</a>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
