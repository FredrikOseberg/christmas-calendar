import React, { Component } from 'react';
import { ConditionallyRender } from 'react-util-kit';
import { FadeIn } from 'react-anim-kit';

import Jumbotron from './Jumbotron/Jumbotron';
import CalendarDay from './CalendarDay/CalendarDay';
import CalendarDayDetail from './CalendarDayDetail/CalendarDayDetail';

import './App.css';

import olaf from './images/olaf.png';
import mikke from './images/mikke.gif';

import data from './data/data.json';

class App extends Component {
  state = {
    opened: [],
    activeDay: null
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handleBack);
  }

  handleBack = () => {
    this.resetActiveDay();
  };

  setActiveDay = activeDay => {
    const { opened } = this.state;

    const inArray = opened.includes(activeDay.id);
    if (!inArray) opened.push(activeDay.id);

    this.setState({ activeDay, opened });
  };

  resetActiveDay = () => this.setState({ activeDay: null });

  renderDays = () => {
    return data.calendar.map(item => {
      return (
        <CalendarDay
          key={item.id}
          {...item}
          setActiveDay={this.setActiveDay}
          opened={this.state.opened}
        />
      );
    });
  };

  render() {
    const { activeDay } = this.state;
    return (
      <div className="App">
        <Jumbotron />
        <ConditionallyRender
          ifTrue={!activeDay}
          show={
            <FadeIn left by={300} delayBy={0.3}>
              <div className="app-container">
                <img src={olaf} alt="olaf" className="app-image-left" />
                {this.renderDays()}
                <img src={mikke} alt="olaf" className="app-image-right" />
              </div>
            </FadeIn>
          }
          elseShow={
            <CalendarDayDetail {...this.state.activeDay} resetActiveDay={this.resetActiveDay} />
          }
        />
      </div>
    );
  }
}

export default App;
