/** @jsx React.DOM */
var React = require('react');

var u = require('./utils');

var CalendarMonth = require('./CalendarMonth.jsx');

var Calendar = React.createClass({
  propTypes: {
    today: u.propTypeMoment
  },
  getInitialState: function() {
    return {
      date: this.props.today.clone().startOf('month')
    };
  },
  prevMonth: function(e) {
    this.setState({
      date: this.state.date.clone().subtract(1, 'month')
    });
  },
  nextMonth: function(e) {
    this.setState({
      date: this.state.date.clone().add(1, 'month')
    });
  },
  render: function() {
    return (
<table className="table">

  <caption>
    <button className="pull-left"
      onClick={this.prevMonth}>Prev</button>
    <button className="pull-right"
      onClick={this.nextMonth}>Next</button>

    {this.state.date.format("MMMM YYYY")}
  </caption>

  <CalendarMonth
    today={this.props.today}
    date={this.state.date}
  />

</table>
    );
  }
});

module.exports = Calendar;