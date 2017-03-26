var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({

getInitialState: function(){
  return {
    authors: []
  }
},

componentWillMount: function() {
  this.setState({authors: AuthorApi.getAllAuthors()})
}

  render: function () {
    return (
      <div>
        <h1>Authors</h1>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.state.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
});

module.exports = Authors;
