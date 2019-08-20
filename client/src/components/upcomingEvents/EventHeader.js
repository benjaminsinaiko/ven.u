import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import SetlistIcon from '@material-ui/icons/Receipt';

import useStyles from './styles/EventStyles';
import useFetchImage from '../../hooks/useFetchImage';
import crowdImage from '../../assets/crowdImage_small.jpg';

export default function EventHeader({ event }) {
  const classes = useStyles();
  const [image, loading] = useFetchImage(event);

  return (
    !loading && (
      <Card raised className={classes.header}>
        <CardMedia image={image ? image[0].url : crowdImage} className={classes.cardMedia}>
          <div className={classes.title}>
            <h1>{event.title}</h1>
          </div>
          <div className={classes.setlistsButton}>
            <Button variant="contained">
              <SetlistIcon />
              Setlists
            </Button>
          </div>
        </CardMedia>
      </Card>
    )
  );
}
