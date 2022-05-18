import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import hotelImage from './img/hotel-loures.jpg';
import './index.css';

const Image = (props) => {  
  return(
    <img className={props.className} src={props.src} alt={props.alt} />
  );
}

const Header = (props) => {
  return(
    <div className='header hotelCardComponent'>
      <h1>{props.children}</h1>
      <p>{props.localization}</p>
      <EvaluationDiv evaluationGrade={props.evaluation} />
    </div>
  );
}

const Description = (props) => {
  return(
    <article className='description hotelCardComponent'>
      <h2>Descrição</h2>
      <p>{props.children}</p>
    </article>
  );
}

const StarIcon = (props) => {
  let starType = ((props.type === "empty") ? regular('star') : ((props.type === "full") ? solid('star') : solid('star-half-stroke')) );

  return(
    <FontAwesomeIcon className="starIcon" icon={starType} />
  );
}

const EvaluationDiv = (props) => {
  let starsAdded = 0, evaluationGrade = eval(props.evaluationGrade), starsDiv = [], existHalfStar = false;
  
  if(evaluationGrade % 1 !== 0){
    evaluationGrade -= 0.5;
    starsDiv[evaluationGrade] = <StarIcon type="half" />
    existHalfStar = true;
  }

  for(starsAdded; starsAdded < evaluationGrade; starsAdded++){
    starsDiv[starsAdded] = <StarIcon type="full" />
  }
  
  while((starsAdded + existHalfStar) != 5){
    starsDiv[starsAdded+existHalfStar] = <StarIcon type="empty" />
    starsAdded++;
  }

  return(
    <div className='hotelCardComponent evaluationDiv'>
      {starsDiv}
    </div>
  );
}

const FacilityIcon = (props) => {
  let facilityType = ((props.type === "wifi") ? solid('wifi') : 
                      (props.type === "pool") ? solid('water-ladder') :
                      (props.type === "animals-allowed") ? solid('dog') :
                      (props.type === "cable-tv") ? solid('tv') :
                      (props.type === "parking") ? solid('square-parking') :
                      (props.type === "air-conditioner") ? solid('wind') :
                      (props.type === "restaurant") ? solid('utensils') :
                      (props.type === "gym") ? solid('dumbbell') :
                      (props.type === "breakfast") ? solid('bread-slice') : 
                      solid('question')
                    );

  return(
    <FontAwesomeIcon className="facilityIcon" icon={facilityType} />
  );
}

const FacilitiesDiv = (props) => {
  let facilitiesTypes = props.facilities, facilitiesIcons = [];

  facilitiesTypes.forEach( (facilityType) => {
    facilitiesIcons.push( <FacilityIcon type={facilityType} /> );
  });
  return(
    <div className='facilitiesDiv hotelCardComponent'>
      <h2>Facilidades</h2>
      <div className='facilitiesIcons'>
        {facilitiesIcons}
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='hotelExpandedCard'>
    <Image className="hotelCardImage" src={hotelImage} alt="Fotografia da fachada do Hotel Loures" />
    <div className='content'>
      <Header localization="Campos do Jordão" evaluation="4">
        Hotel Loures
      </Header>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Description>
      <FacilitiesDiv facilities={["wifi","cable-tv","gym","animals-allowed"]} />
    </div>
  </div>
);
