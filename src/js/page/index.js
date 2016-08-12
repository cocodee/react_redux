 var React = require('react');
 var ReactDOM = require('react-dom');
 var $ = require('jquery');
 var TodoList = require('./components/todoList.js');
      var TodoApp = React.createClass({
        getInitialState: function() {
          return {items: [], text: ''};
        },
        onChange: function(e) {
          this.setState({text: e.target.value});
        },
        handleSubmit: function(e) {
          e.preventDefault();
          var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
          var nextText = '';
          this.setState({items: nextItems, text: nextText});
        },
        render: function() {
          return (
            <div>
              <h3>TODO</h3>
              <TodoList items={this.state.items} />
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} value={this.state.text} />
                <button>{'Add #' + (this.state.items.length + 1)}</button>
              </form>
            </div>
          );
        }
      });
      ReactDOM.render(<TodoApp />, document.getElementById('container1'));        
      // To get started with this tutorial running your own code, simply remove
      // the script tag loading scripts/example.js and start writing code here.
      
      
 var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var lastGist = result[0];
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists" />,
  document.getElementById('container2')
);     