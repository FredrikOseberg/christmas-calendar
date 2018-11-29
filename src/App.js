import React, { Component } from 'react';
import { ConditionallyRender } from 'react-util-kit';
import { FadeIn } from 'react-anim-kit';

import Jumbotron from './Jumbotron/Jumbotron';
import CalendarDay from './CalendarDay/CalendarDay';
import CalendarDayDetail from './CalendarDayDetail/CalendarDayDetail';

import './App.css';

import olaf from './images/olaf.png';
import mikke from './images/mikke.gif';
import sled from './images/santassled.png';
import heartIcon from './images/icons/heart.svg';

import data from './data/data.json';

class App extends Component {
  state = {
    opened: [],
    activeDay: null
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handleBack);

    const opened = this.getItemFromLocalStorage('opened');

    if (opened && opened.length > 0) {
      this.setState({ opened });
    }
  }

  handleBack = () => {
    this.resetActiveDay();
    window.history.replaceState({}, '', '');
  };

  setActiveDay = activeDay => {
    const { opened } = this.state;

    const inArray = opened.includes(activeDay.id);
    if (!inArray) opened.push(activeDay.id);

    this.setState({ activeDay, opened }, this.saveStateToLocalStorage);
  };

  saveStateToLocalStorage = () => {
    const { opened } = this.state;
    if (localStorage) {
      localStorage.setItem('opened', JSON.stringify(opened));
    }
  };

  getItemFromLocalStorage = key => {
    if (localStorage) {
      const item = localStorage.getItem(key);

      return JSON.parse(item);
    }
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
            <FadeIn left by={300} delayBy={0.1}>
              <div className="app-container">
                <img src={olaf} alt="olaf" className="app-image-left" />
                {this.renderDays()}
                <img src={mikke} alt="olaf" className="app-image-right" />
                <div className="app-bottom-image__container">
                  <img src={sled} alt="santas sled" className="app-image-bottom" />
                </div>
                <p className="app-made-with__paragraph">
                  Made with <img src={heartIcon} alt="heart" />
                </p>
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
