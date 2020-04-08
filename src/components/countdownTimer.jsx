// code used for https://www.seeleycoder.com/blog/react-countdown-timer
import * as React from 'react';
import PropTypes from 'prop-types';

// https://www.npmjs.com/package/countdown
import './countdownTimer.scss'
import countdown from 'countdown';

const TimerSpanDisplay = function TimerSpanDisplay(props) {
    const { className, value, label } = props;

    return (
        <div className={`timespan-display d-flex flex-column justify-content-center align-items-center px-2 px-sm-4 px-md-3 px-lg-3 px-xl-3 py-2 ${className || ''}`}>
            <span className="timespan-value">{`${value.toString().padStart(2, '0')}`}</span>
            <span className="timespan-label text-uppercase">{label}</span>
        </div>
    );
}

export class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timespan: this.calculateTimespan(props.endDate)
        };
    }

    componentDidMount() {
        this._timerId = setInterval(() => {
            this.setState({ timespan: this.calculateTimespan(this.props.endDate) });
        }, 1000);
    }

    componentWillUnmount() {
        // if (!isNullOrUndefined(this._timerId))
        if(this._timerId!=null || this._timerId!=undefined)
            clearInterval(this._timerId);
    }

    calculateTimespan(endDate) {
        let now = new Date();

        let timespan = countdown(now, endDate, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
        return timespan;
    }

    render() {
        const { timespan } = this.state;

        return (
            <div className={`bg-dark text-white d-flex justify-content-between w-100`}>
                <TimerSpanDisplay className="ml-5 ml-md-0" value={timespan.days} label="Days" />
                <TimerSpanDisplay value={timespan.hours} label="Hrs" />
                <TimerSpanDisplay value={timespan.minutes} label="Min" />
                <TimerSpanDisplay value={timespan.seconds} label="Sec" />
                <div className="bg-black px-4 px-xl-3 py-1 d-flex align-items-center justify-content-center w-md-100 w-md-auto">
                    <i className="fal fa-angle-right fa-3x"></i>
                </div>
            </div>
        );
    }
}