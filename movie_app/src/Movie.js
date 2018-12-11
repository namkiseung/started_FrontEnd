import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

// class Movie extends Component{  
//     static propTypes ={  
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired,  
//         index: PropTypes.number
//     }
//     render(){                
//         return (            
//             <table border="1"><tr><td><MoviePoster poster={this.props.poster} /><h3>{this.props.title}</h3></td></tr></table>
//         )
//     }
// }
// class MoviePoster extends Component{
//     static propTypes={
//         poster: PropTypes.string.isRequired
//     }    
//     render(){        
//         console.log('smart MoviePoster')        
//         return(
//             <img src={this.props.poster} />
//         )
//     }
// }
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
MovieGenre.prototype = {
    genres: PropTypes.string.isRequired
}

function Movie({title, poster, genres, synopsis}){ //dump MoviePoster
    return (
        <div className="Movie">
            <div className="Movie__Columns"><MoviePoster poster={poster} alt={title}/></div>
            <div className="Movie__Columns"><h2>{title}</h2>
            <div className="Movie__Genres">{genres.map((genre, index) => <MovieGenre genre={genre} key={index} /> )}</div>
            <div className="Movie__Synopsis">
            {/* <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            baseOn='letters'
            /> */}
            {synopsis}
            </div>
        </div>
    </div>
    )
}
function MovieGenre({genres}){
    return(
        <span className="Movie__Genre">{genres}</span>
    )
}
function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

export default Movie;