import {fetchTmdb} from './module/fetchAPI.js';
import {displayTenMovies, displayPageOneMovies, displayActors, displayCategoryError} from './module/display.js';

const searchBar = document.getElementById('searchForm')
const topTenMovies = document.getElementById('topTenMovies');

searchBar.addEventListener('submit', async event => {
    event.preventDefault();

    let textSearch = document.getElementById('textSearch').value;
    let btnMovie = document.getElementById('movieBtn').checked;
    let btnActor = document.getElementById('actorBtn').checked;

    let movieList = await fetchTmdb(`https://api.themoviedb.org/3/search/movie?query=${textSearch}&include_adult=false&language=en-US&api_key=`);
    let actorList = await fetchTmdb(`https://api.themoviedb.org/3/search/person?query=${textSearch}&include_adult=false?language=en-US&api_key=`);

    if(btnMovie === true){
        if(movieList === 'noResults'){
            displayCategoryError('Movie', textSearch);
        }
        else if(movieList.length > !undefined){
            displayPageOneMovies(movieList);
        };
        searchBar.reset();
    }
    else if(btnActor === true){
        if(actorList === 'noResults'){
            displayCategoryError('Actor', textSearch)
        }
        else if(actorList.length > !undefined){
            displayActors(actorList);
        };
        searchBar.reset();
    }
    else{
        alert('Please choose Movie or Actor!');
    };
});

topTenMovies.addEventListener('click', async event => {
    event.preventDefault();

    let popularMovieArray = await fetchTmdb(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=`);
    let topRatedMovieArray = await fetchTmdb(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=`);

    if(event.target.id == 'popularBtn' && popularMovieArray != undefined){
        displayTenMovies(popularMovieArray);
    }
    else if(event.target.id == 'topRatedBtn' && topRatedMovieArray != undefined){
        displayTenMovies(topRatedMovieArray);
    };
});

let websiteTitleAnimation = {
    targets: '.centerElements h1',
    translateY: '-10px',
    easing: 'easeOutQuad',
    delay: anime.stagger(100),
    direction: 'alternate',
    loop: true,
}

anime(websiteTitleAnimation)