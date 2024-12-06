import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "108%",
  height: "100vh",
};
const center = {
  lat: 40.409264,
  lng: 49.867092,
};

const Location = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBO7WH0giFRMiPR2ZcjbR6XP20esti4Bso",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps...</div>;
  }

  return (
    <section className="storeLocation">
      <div className="container">
        <div className="items">
          <div className="top">
            <h1>FIND DIPPIN’ DOTS ICE CREAM</h1>
            <p>
              Use our locator to find a Dippin' Dots store or shopping center location near you! <br />
              You can also find Dippin' Dots in thousands of locations across the country, from amusement parks to zoos - and just about everywhere in between!
            </p>
          </div>
          <div className="content">
            <div className="contentItem">
              <div className="city">
                <label>Enter your zip code or city</label>
                <form>
                  <input type="text" placeholder="Enter a location" />
                </form>
                <div className="buttons">
                  <button className="button">SEARCH</button>
                  <span className="border"></span>
                </div>
              </div>
              <div className="googleMap">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={10}
                  center={center}
                >
                  <Marker position={center} />
                </GoogleMap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
