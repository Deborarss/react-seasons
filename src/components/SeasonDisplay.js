import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  verão: {
    text: 'Vamos à praia!',
    iconName: 'sun'
  },
  inverno: {
    text: 'Burr, está gelado!',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'verão' : 'inverno';
  } else {
    return lat > 0 ? 'inverno' : 'verão';
  }
};

const SeasonDisplay = props => {
  // console.log(props.lat);

  const season = getSeason(props.lat, new Date().getMonth());
  // console.log(season);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display d-flex ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
