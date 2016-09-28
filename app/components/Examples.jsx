var React = require('react');
var {Link, IndexLink} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few examples to try out:</p>
            <ol>
                <li>
                    <Link to="?location=Leeds">Leeds, West Yorkshire</Link>
                </li>
                <li>
                    <Link to="?location=Brighton">Brighton, Hove</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;