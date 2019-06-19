import React from 'react';
import Button from '@material-ui/core/Button';

import useStyles from './styles/LandingHeroStyles';
import logoIcon from '../../assets/logoIcon.png';

const LandingHero = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.heroContent}>
        <div className={classes.heroLogo}>
          <img src={logoIcon} alt="Logo icon" />
        </div>

        <div className={classes.heroText}>
          <p>Discover bands.</p>
          <p>See them live.</p>
          <p>Relive the moment.</p>
          <p className={classes.textPhrase} variant="h4">
            get more from your shows.
          </p>
        </div>
        <Button className={classes.herobutton}>Find Shows</Button>
      </div>
    </div>
  );
};

export default LandingHero;
