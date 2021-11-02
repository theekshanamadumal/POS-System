import color from "@material-ui/core/colors/amber";
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function MapGL({sellersData}) {
  const [viewport, setViewport] = useState({
    latitude:7.489083614888397,
    longitude: 80.36274774593174,
    width: "72vw",
    height: "80vh",
    zoom: 8
  });
  const [selectedseller, setSelectedseller] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedseller(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="category">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/john-triggle/ckuzhwl5i0sy514rsr9ja85o1"
        onViewportChange={viewport => {
          setViewport(viewport);

        }}
      >
         <h2> Seller's Locations</h2> 
        {sellersData.map(sellerData => (
          <Marker
            key={sellerData._id}
            latitude={sellerData.location[0]}
            longitude={sellerData.location[1]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedseller(sellerData);
              }}
            >
              <img src="/skateboarding.svg" alt="Seller Icon" />
              <h4 style={{ color: 'blue' }}>{sellerData.sellerId.firstName}</h4>


            </button>
          </Marker>
        ))}

        {selectedseller ? (
          <Popup
            latitude={selectedseller.location[0]}
            longitude={selectedseller.location[1]}
            onClose={() => {
              setSelectedseller(null);
            }}
          >
            <div>
              <h2>{selectedseller.sellerId.firstName+" "+ selectedseller.sellerId.lastName}</h2>
              <p>ID : {selectedseller.sellerId.idNumber} <br/>Phone : {selectedseller.sellerId.phoneNumber}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
