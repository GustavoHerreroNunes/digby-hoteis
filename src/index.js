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
  
  console.log("Tipo de estrela", props.type);
  console.log("[starType]", starType);

  return(
    <FontAwesomeIcon className="starIcon" icon={starType} />
  );
}

const StarAvaliationDiv = (props) => {
  let starsAdded = 0, starsNumber = eval(props.starsNumber), halfStars = 0, starsDiv = [];
  
  //Se houver uma estrela e meia
  if(starsNumber % 1 !== 0){
    starsNumber -= 0.5;
    starsDiv[starsNumber] = <StarIcon type="half" />
    halfStars++;
  }

  for(starsAdded = 0; starsAdded < starsNumber; starsAdded++){
    starsDiv[starsAdded] = <StarIcon type="full" />
  }
  
  
  let starsMissing = 5 - starsAdded - halfStars;

  for(let i = 0; i < starsMissing; i++){
    starsDiv[starsAdded+halfStars] = <StarIcon type="empty" />
    starsAdded++;
  }

  return(
    <div>
      {returnMultipleDivs(starsDiv)}
    </div>
  );
}

const FacilitieIcon = (props) => {

}

const FacilitieDiv = (props) => {
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
    <StarAvaliationDiv starsNumber="1.5" />
  </div>
);
