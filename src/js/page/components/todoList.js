 var React = require('react');
 var TodoList = React.createClass({
        render: function() {
          var createItem = function(item) {
            return <li key={item.id}>{item.text}</li>;
          };
          return <ul>{this.props.items.map(createItem)}</ul>;
        }
      });   
      
 module.exports = TodoList;