var React = require('react');

var WeatherMessage = ({location, temp}) => {
    return (
        <p>It is {temp}˚C in {location} today</p>
    )
};

module.exports = WeatherMessage;