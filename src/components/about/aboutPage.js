var React = require('react');

var About = React.createClass({

  static: {
    willTransitionTo: function(transition, params, query, callback){
      if(!confirm('Are you sure you want to read a page that\'s this boring?')){
        transition.about();
      } else {
        callback();
      }
    }
  },
  
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>
          This amazing application uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    )
  }
});

module.exports = About;
