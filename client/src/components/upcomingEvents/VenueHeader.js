import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GenreIcon from '@material-ui/icons/MusicNote';
import PhoneIcon from '@material-ui/icons/Phone';
import WebsiteIcon from '@material-ui/icons/Language';
import CapacityIcon from '@material-ui/icons/Group';
import AgesIcon from '@material-ui/icons/ChildCare';
import AlcoholIcon from '@material-ui/icons/LocalDrink';
import PaymentIcon from '@material-ui/icons/Payment';
import PriceIcon from '@material-ui/icons/MonetizationOn';

import useStyles from './styles/VenueStyles';
import { formatNumber, formatPhone } from '../../utils/formats';
import venueImage from '../../assets/testVenueImage.jpg';

export default function VenueHeader({ venue }) {
  const classes = useStyles();
  console.log('venue', venue);
  return (
    <Paper className={classes.headerPaper}>
      <Grid container>
        <Grid item sm={5} className={classes.headerImage}>
          <img src={venueImage} alt="venue logo" />
        </Grid>

        <Grid item sm={7} className={classes.headerDetails}>
          <div className={classes.detailsHeader}>
            <Typography className={classes.venueName}>{venue.venueName}</Typography>
            <Typography className={classes.venueAddress}>{venue.Address}</Typography>
            <Typography className={classes.venueAddress}>
              {venue.venueCity} {venue.zipCode}
            </Typography>
          </div>
          <div className={classes.detailsBody}>
            <div>
              <Typography>
                <PhoneIcon />{' '}
                <a href={`tel:${venue.phoneNumber}`}> {formatPhone(venue.phoneNumber)} </a>
              </Typography>
              <Typography>
                <WebsiteIcon /> <a href={venue.website}>Venue Website</a>
              </Typography>
              <Typography>
                <GenreIcon /> {venue.genres}
              </Typography>
              <Typography>
                <CapacityIcon /> {formatNumber(venue.capacity)}
              </Typography>
            </div>
            <div>
              <Typography>
                <AgesIcon /> {venue.ages}
              </Typography>
              <Typography>
                <AlcoholIcon /> {venue.alcohol}
              </Typography>
              <Typography>
                <PaymentIcon /> {venue.payment}
              </Typography>
              <Typography>
                <PriceIcon /> {venue.price}
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
