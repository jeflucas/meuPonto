import TimeInput from "./TimeInput.jsx";
import React from "react";

class DaySummary extends React.Component {
  constructor() {
    super();

    this.state = {
      daySummary: 0,
    };

    this.dayStart = 0;
    this.lunchStart = 0;
    this.lunchEnd = 0;
    this.dayEnd = 0;

    this.calcDaySummary = this.calcDaySummary.bind(this);
  }

  strTimeToMins(strTime) {
    console.log(strTime);
    if (!strTime) return 1;

    let [h, m] = strTime.split(":");

    return Number(h) * 60 + Number(m);
  }

  minsToStrTime(val) {
    let m = val % 60;
    let h = (val - m) / 60;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;

    return `${h}:${m}`;
  }

  calcDaySummary() {
    let summaryVal =
      this.dayEnd - this.dayStart - (this.lunchEnd - this.lunchStart);
    if (!summaryVal) summaryVal = 0;
    summaryVal = Math.max(summaryVal, 0);

    this.setState({
      daySummary: this.minsToStrTime(summaryVal),
    });

    this.props.changeNotify(summaryVal);
  }

  notifyDayStart = (v) => {
    this.dayStart = v;
    this.calcDaySummary();
  };

  notifyLunchStart = (v) => {
    this.lunchStart = v;
    this.calcDaySummary();
  };

  notifyLunchEnd = (v) => {
    this.lunchEnd = v;
    this.calcDaySummary();
  };

  notifyDayEnd = (v) => {
    this.dayEnd = v;
    if (this.dayEnd < this.dayStart) this.dayEnd += 12 * 60;
    this.calcDaySummary();
  };

  render() {
    return (
      <tr className="day-summary">
        <label className="day-name">{this.props.dayName}</label>
        <TimeInput changeNotify={this.notifyDayStart} default="08:00" />
        <TimeInput changeNotify={this.notifyLunchStart} default="12:00" />
        <TimeInput changeNotify={this.notifyLunchEnd} default="13:30" />
        <TimeInput changeNotify={this.notifyDayEnd} default="17:30" />
        <label className="day-summary-value">
          Total do dia: {this.state.daySummary}
        </label>
      </tr>
    );
  }
}

export default DaySummary;
