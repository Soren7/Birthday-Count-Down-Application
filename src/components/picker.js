import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class Picker extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
        startDate: moment()
    };
        this.handleChange = this.handleChange.bind(this);
  }
 
    handleChange(date) {
        console.log('tring to change date for', date._d);
        this.setState({
        startDate: date
    });
  }
  
    render() {
        return (
            <div className="picker">
                <DatePicker 
                selected={this.state.startData}
                onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Picker;