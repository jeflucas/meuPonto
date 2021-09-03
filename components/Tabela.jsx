import React from "react";
import DaySummary from "./DaySummary";
import { minsToTimeStr, timeStrToMins } from "./CalculaHora";

class Tabela extends React.Component {
  constructor() {
    super();
    this.dailyValues = [0, 0, 0, 0, 0];
    this.weeklyRequired = 40 * 60; //35 hrs required per week (testing)
    this.state = {
      weeklySummary: 0,
      overTime: 0,
    };
  }

  dailySummary = (d, v) => {
    this.dailyValues[d] = v;
    let sum = this.dailyValues.reduce((a, b) => {
      return a + b;
    });
    let ot = sum - this.weeklyRequired;

    this.setState({ weeklySummary: minsToTimeStr(sum) });
    this.setState({ overTime: minsToTimeStr(ot) });
  };

  render() {
    return (
      <div>
        <table className="days-container">
          <DaySummary
            dayName="Segunda-Feira"
            changeNotify={(v) => this.dailySummary(0, v)}
          />
          <DaySummary
            dayName="Terça-Feira"
            changeNotify={(v) => this.dailySummary(1, v)}
          />
          <DaySummary
            dayName="Quarta-Feira"
            changeNotify={(v) => this.dailySummary(2, v)}
          />
          <DaySummary
            dayName="Quinta-Feira"
            changeNotify={(v) => this.dailySummary(3, v)}
          />
          <DaySummary
            dayName="Sexta-Feira"
            changeNotify={(v) => this.dailySummary(4, v)}
          />
        </table>
        <h3 className="primary-col">
          Horas Trabalhadas {this.state.weeklySummary}
        </h3>
        <h3 className="primary-col">
          Carga Horária Semanal {minsToTimeStr(this.weeklyRequired)}
        </h3>
        <h3
          className={
            timeStrToMins(this.state.overTime) > 0 ? "primary-col" : ""
          }
        >
          Hora Extra / Banco de Horas {this.state.overTime}
        </h3>
      </div>
    );
  }
}

export default Tabela;
