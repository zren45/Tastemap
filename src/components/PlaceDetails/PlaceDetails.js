import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles.js";

function PlaceDetails({ place }) {
  const classes = useStyles();
  return (
    <div>
      <Card>
        {/* photo */}
        <CardMedia
          style={{ height: 350 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          }
          title={place.name}
        />

        {/* content */}
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>

          <Box display="flex" justifyContent={"space-between"}>
            <Typography variant="subtitle1">{place.price_level}</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.ranking}
            </Typography>
          </Box>

          {place?.awards?.map((award) => (
            <Box display="flex" justifyContent="space-between" my={1}>
              <img src={award.images.small} />
              <Typography variant="subtitle2" color="textSecondary">
                {award.display_name}
              </Typography>
            </Box>
          ))}
          {/* category chip */}
          {place?.cuisine?.map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            />
          ))}

          {place.address && (
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              className={classes.subtitle}
            >
              <LocationOnIcon />
              {`${place.address_obj.street1} ${place.address_obj.street2}, ${place.address_obj.city}, ${place.address_obj.state}`}
            </Typography>
          )}

          {place.phone && (
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.spacing}
            >
              <PhoneIcon /> {place.phone}
            </Typography>
          )}
        </CardContent>
        {/* Link */}
        <CardActions>
          <Button
            size="small"
            color="secondary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default PlaceDetails;
