import React, { Component } from 'react';

class Clock extends Component {
    render() {
        return (
            <div className="clock">
                <div className="clock__days"> 
                    <lable className="clock__title">DAYS </lable>
                    <lable className="clock__amount">25</lable>
                </div>
                <div className="clock__hours"> 
                    <lable className="clock__title">HOURS </lable>
                    <lable className="clock__amount">25</lable>
                </div>
                <div className="clock__minutes"> 
                    <lable className="clock__title">MINUTES </lable>
                    <lable className="clock__amount">25</lable>
                </div>
                <div className="clock__seconds"> 
                    <lable className="clock__title">SECONDS </lable>
                    <lable className="clock__amount">25</lable>
                </div>
            </div>    
        );
    }
}

export default Clock;