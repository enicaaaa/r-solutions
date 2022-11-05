import "../styles/UserEvent.scss";
import nature from "../assets/images/nature.jpeg";

const UserEvent = () => {
  return (
    <div className="user-event">
      <div className="user-event__in-progress">in Progress</div>
      <div className="user-event__info-container">
        <img className="user-event__image" src={nature} alt="nature" />
        <div className="user-event__event-info">
          <div className="user-event__user-name">
            Created by: Djordje Stamenkovic
          </div>
          <div className="user-event__event-location">
            Location: Nis, Serbia
          </div>
          <div className="user-event__event-timer">Timer: 14 min</div>
        </div>
      </div>
    </div>
  );
};

export default UserEvent;
