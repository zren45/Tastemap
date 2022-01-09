import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles";

function Map() {
  const classes = useStyles();
  const coordinates = { lat: 43.047902, lng: -89.337126 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClik={""}
      ></GoogleMapReact>
      <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
    </div>
  );
}

export default Map;
