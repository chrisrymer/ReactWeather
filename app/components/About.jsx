var React = require('react');

var About = (props)  =>{
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application built on react as a demo</p>
            <p>
                Here are the tools used
            </p>
            <ul>
                <li><a href="https://facebook.githib.io/react">REACT Framework</a></li>
                <li><a href="http://openweathermap.ord">Open Weather API</a></li>
            </ul>
        </div>
    )
};

module.exports = About;