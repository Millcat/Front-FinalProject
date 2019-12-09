import React, { Component } from 'react'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
export const pureComponentAvailable = true;

export default class Calendar extends Component {

    state = {
        date: null,
        isDayBlocked: null
    };

    // isDayBlocked: PropTypes.func,
    // isOutsideRange: PropTypes.func,
    // isDayHighlighted: PropTypes.func,


    // 1 / Get all the dates that are included in The start and end Date (start and end included) and post in the BDD
    // 2 / Write a function to showDaysStatus (available || blocked)
    // dates = [] => doit être sélectionnable dans le calendar
    // LOGIQUE : // function showDaysStatus() if tour.dates => show highlited | if !tour.dates => block the dates

    handleChange(date) {
        this.setState({ date })
        this.props.handleDateChange(date)
    }
    test() {
        console.log("appelé")
    }

    render() {
        return (
            <div>
                <SingleDatePicker
                    isDayBlocked={this.test}
                    // onChange={this.getDate}
                    date={this.state.date} // momentPropTypes.momentObj or null
                    onDateChange={date => this.handleChange(date)} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="your_unique_id" // PropTypes.string.isRequired,
                    isDayBlocked={this.state.blocked}
                />
            </div>
        )
    }
}


