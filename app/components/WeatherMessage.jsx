var React = require('react');

var WeatherMessage = ({location, temp}) => {
    return (
        <h3 className="text-center">It is {temp}˚C in {location} today</h3>
    )
};

module.exports = WeatherMessage;