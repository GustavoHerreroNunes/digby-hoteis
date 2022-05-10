import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import './index.css';

const Image = (props) => {
  let imageClass = `img-${props.type}`;
  
  return(
    <img className={imageClass} src={props.src} alt={props.alt} />
  );
}

const Header = (props) => {
  return(
    <div className='header'>
      <h1>{props.children}</h1>
      <p>{props.localization}</p>
      <StarAvaliationDiv starsNumber={props.avaliation} />
    </div>
  );
}

const Description = (props) => {
  return(
    <article className='description'>
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </article>
  );
}

const StarIcon = (props) => {
  let starType = ((props.type === "empty") ? regular('star') : ((props.type == "full") ? solid('star') : solid('star-half-stroke')) );

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
    <div>
      {starsDiv}
    </div>
  );
}

const FacilityIcon = (props) => {

}

const FacilitiesDiv = (props) => {
  let testeDiv = <div>
    <h1>Testando</h1>
  </div>
  return(
    testeDiv
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <EvaluationDiv evaluationGrade="2.5" />
  </div>
);
