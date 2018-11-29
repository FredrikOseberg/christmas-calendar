import React, { Component } from 'react';
import { FadeIn } from 'react-anim-kit';

import giftIcon from '../images/icons/gift.svg';

import './CalendarDayDetail.css';

class CalendarDayDetail extends Component {
  render() {
    const { id, mainImage, secondaryImage, text, resetActiveDay } = this.props;
    return (
      <div className="calendar-day-detail__container">
        <FadeIn left by={300} delayBy={0.3}>
          <div className="calendar-day-detail__inner-container">
            <div className="calendar-day-detail__box">
              <div className="calendar-day-detail__left-container">
                <h1>Luke {id}</h1>
                <img src={mainImage} alt="calendar" className="calendar-day-detail__main-image" />
              </div>
              <div className="calendar-day-detail__right-container">
                <img src={giftIcon} alt="gift" className="calendar-day-detail__gift-icon" />
                <p className="calendar-detail__text">{text}</p>
                <img
                  src={secondaryImage}
                  alt="calendar"
                  className="calendar-day-detail__secondary-image"
                />
              </div>
            </div>
          </div>
          <button className="calendar-day-detail__button" onClick={resetActiveDay}>
            Tilbake
          </button>
        </FadeIn>
      </div>
    );
  }
}

export default CalendarDayDetail;