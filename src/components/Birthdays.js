
import './style/Birthdays.css';
import './style/responsive.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';

function Birthdays() {

  const birthdayData = [
    {name: "Eliza Watson", avatar: "images/avatar1.png", birthday: "Today", iconColour: "cake-one"},
    {name: "Federico Vasquez", avatar: "images/avatar2.png", birthday: "27th Aug", iconColour: "cake-two"},
    {name: "Emilee Vaught", avatar: "images/avatar3.png", birthday: "1st Sept", iconColour: "cake-three"},
    {name: "Jackson Cooperson", avatar: "images/avatar4.png", birthday: "5th Oct", iconColour: "cake-four"},
    {name: "Natasha Jackson", avatar: "images/avatar5.png", birthday: "17th Oct", iconColour: "cake-five"}
  ]

  const birthdays = birthdayData.map((data, index) => (
    <div className='birthday-card' key={index}>
      <img class="avatar-img" src={data.avatar} alt="avatar" />
      <div class="birthday-card-content">
        <h3 class="full-name">{data.name}</h3>
        <p class="birth-date"><FontAwesomeIcon className={data.iconColour} icon={faCakeCandles}/>{data.birthday}</p>
      </div>
    </div>
  ))


  return (
  <div className='birthdays-wrapper'>
    <h1>Upcoming Birthdays</h1>

    <div class="birthday-cards">
      {birthdays}
    </div>
    <div className='birthday-btn'>Add birthday</div>
  </div>


  )
};


export default Birthdays;
