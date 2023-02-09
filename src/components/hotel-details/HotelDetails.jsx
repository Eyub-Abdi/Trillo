import React, { useEffect } from 'react'
import './hotel-details.scss'

// ICON
import { HiChevronRight } from 'react-icons/hi'
function HotelDetails() {
  return (
    <div className="details">
      <div className="details__description">
        <p className="details__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At veritatis asperiores inventore animi corporis.</p>
        <p className="details__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit accusamus deserunt fuga, itaque distinctio?</p>
        <ul className="details__list">
          <li className="details__list__item">
            <HiChevronRight className="details__icon" /> Close to the beach
          </li>
          <li className="details__list__item">
            <HiChevronRight className="details__icon" /> Breakfast icluded
          </li>
          <li className="details__list__item">
            <HiChevronRight className="details__icon" /> Free airport shuttle
          </li>
          <li className="details__list__item">
            <HiChevronRight className="details__icon" /> Free wi-fi in all rooms
          </li>
          <li className="details__list__item">
            <HiChevronRight className="details__icon" /> Air conditioning and heating
          </li>
          <li className="details__list__item">
            <HiChevronRight className="details__icon" /> Pets allowed
          </li>
          <li className="details__list__item">
            <HiChevronRight className="details__icon" /> We speak all languages
          </li>
          <li className="details__list__item">
            <HiChevronRight className="details__icon" /> Perfect for families
          </li>
        </ul>

        <div className="recommend">
          <p className="recommend__count">Lucy and other 3 friends recommed this hotel.</p>
          <div className="recommend__friends">
            <img src=" https://cdn.pixabay.com/photo/2015/07/22/21/25/woman-856125_960_720.jpg" alt="user photo" className="recommend__photo" />
            <img src=" https://cdn.pixabay.com/photo/2015/11/03/13/47/love-1020869_960_720.jpg" alt="user photo" className="recommend__photo" />
            <img src=" https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224__340.jpg" alt="user photo" className="recommend__photo" />
            <img src=" https://cdn.pixabay.com/photo/2018/01/24/19/49/people-3104635_960_720.jpg" alt="user photo" className="recommend__photo" />
          </div>
        </div>
      </div>
      <div className="details__user-review">
        <figure className="review">
          <blockquote className="review__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit!</blockquote>
          <figcaption className="review__user">
            <img src="https://cdn.pixabay.com/photo/2015/07/22/21/25/woman-856125_960_720.jpg" className="review__photo" alt=" User photo" />
            <div className="review__user-box">
              <p className="review__user-name">Mary Thomas</p>
              <p className="review__user-date">Feb 29rd, 2023</p>
            </div>
            <div className="review__rating">9.0</div>
          </figcaption>
        </figure>
        <figure className="review">
          <blockquote className="review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, blanditiis.</blockquote>
          <figcaption className="review__user">
            <img src=" https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224__340.jpg" alt=" Review photo" className="review__photo" />
            <div className="review__user-box">
              <p className="review__user-name">Jack Jonas</p>
              <p className="review__user-date">Feb 23rd, 2023</p>
            </div>
            <div className="review__rating">7.8</div>
          </figcaption>
        </figure>
        <button className="btn-inline">
          See all <span>&rarr;</span>
        </button>
      </div>
    </div>
  )
}

export default HotelDetails
