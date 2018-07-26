import React, { Component } from 'react';

class Clock extends Component {
    
    
    render() {
        const time = this.props.timeRemaining
        return (
            <div className="clock">
                <div className="clock__days clock__box"> 
                    <lable className="clock__title">DAYS </lable>
                    <lable className="clock__amount">{time.days}</lable>
                </div>
                <div className="clock__hours clock__box"> 
                    <lable className="clock__title">HOURS </lable>
                    <lable className="clock__amount">{time.hours}</lable>
                </div>
                <div className="clock__minutes clock__box"> 
                    <lable className="clock__title">MINUTES </lable>
                    <lable className="clock__amount">{time.minutes}</lable>
                </div>
                <div className="clock__seconds clock__box"> 
                    <lable className="clock__title">SECONDS </lable>
                    <lable className="clock__amount">{time.seconds}</lable>
                </div>
            </div>    
        );
    }
}

export default Clock;