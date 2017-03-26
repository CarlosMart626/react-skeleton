var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function() {
        return {items:[], newItemText: ''};
    },
    handleSubmit: function(e) {
        e.preventDefault();

        var currentItems = this.state.items;

        if (this.state.newItemText != '') {
            currentItems.push(this.state.newItemText);

            this.setState({items: currentItems, newItemText: ''});
        }

    },
    onChange: function(e){
        this.setState({newItemText: e.target.value});
    },
    render: function() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="ui fluid action input">
                      <input onChange={this.onChange} value={this.state.newItemText}  placeholder="New Item..." />
                      <button className='ui labeled icon primary button'>
                          <i className="plus icon"></i>
                          Add</button>
                    </div>
                </form>
                <div className="ui divider"></div>
                <List items={this.state.items} />
            </div>
        );
    }
});

module.exports = ListManager;
