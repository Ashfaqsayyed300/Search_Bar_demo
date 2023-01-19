import React from 'react'
import classes from "./Movie.module.css"
const setVoteClass= (vote)=>{
  if(vote >= 8){
    return "green";
  }else if(vote >=6){
    return "orange";
  }else{
    return "red";
  }
}

const Movie = ({title,overview,poster_path,rating}) => {
  

  return (
    <div className={classes.movie}>
      <img className={classes.image} src={poster_path? "https://image.tmdb.org/t/p/original/"+ poster_path: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} alt='main-img'/>
      <div className={classes['movie-info']}>
        <h3>{title}</h3>
        <span className={classes[`tag-${setVoteClass(rating)}`]} 
        style={{padding: "0.5rem", backgroundColor: "#22254b", borderRadius: "5px"}}>
          {rating}</span>
      </div>
      <div className={classes['movie-over']}>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Movie