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
      <Grid container style={{ width: "100%", padding: "10px" }}>
        <Grid item xs={12} md={6}>
          <List places={places}></List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="inherit"
            onClick={handleClick}
            style={{
              position: "relative",
              top: "80px",
              right: "-45%",
              zIndex: "9999",
            }}
          >
            Search this Area
          </Button>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          ></Map>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
