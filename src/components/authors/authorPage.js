var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Authors</h1>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
        </table>
      </div>
    )
  }
});

module.exports = Authors;
