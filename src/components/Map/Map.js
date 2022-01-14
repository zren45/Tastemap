import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClik={""}
      ></GoogleMapReact>
      <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
    </div>
  );
};

export default Map;
