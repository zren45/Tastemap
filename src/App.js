import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import { getPlacesData } from "./api";
import Map from "./components/Map/Map";
import { CssBaseline, Grid, Button } from "@material-ui/core";

const App = () => {
  // const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  function handleClick() {
    console.log("onClick");
    if (bounds) {
      getPlacesData(bounds.ne, bounds.sw).then((data) => {
        setPlaces(data);
      });
    }
  }

  return (
    <div>
      <CssBaseline />

      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places}></List>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          ></Map>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Search this Area
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
