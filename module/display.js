const containerDiv = document.getElementById('container');

function displayTenMovies(movieList){
    containerDiv.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        let divEl = document.createElement('div');
        let moviePosterImgEl = document.createElement('img');
        let movieTitleH1El = document.createElement('h1');
        let releaseDateH2El = document.createElement('h2');

        moviePosterImgEl.src = `https://www.themoviedb.org/t/p/w300${movieList[i].poster_path}`;
        movieTitleH1El.innerText = movieList[i].title;
        releaseDateH2El.innerHTML = `Release date: ${movieList[i].release_date}`;

        containerDiv.appendChild(divEl);
        divEl.append(moviePosterImgEl, movieTitleH1El, releaseDateH2El);
    };
};

function displayPageOneMovies(movieList){
    containerDiv.innerHTML = '';
    for(let i = 0; i < movieList.length; i++){
        let divEl = document.createElement('div');
        let moviePosterImgEl = document.createElement('img');
        let movieTitleH1El = document.createElement('h1');
        let releaseDateH2El = document.createElement('h2');
        let overviewPEl = document.createElement('p');

        if(movieList[i].poster_path === null){
            moviePosterImgEl.src = './Images/ImageNotFound.jpeg';
        }
        else{
            moviePosterImgEl.src = `https://www.themoviedb.org/t/p/w300${movieList[i].poster_path}`;
        };
        movieTitleH1El.innerText = movieList[i].title;
        releaseDateH2El.innerHTML = `Release date: ${movieList[i].release_date}`;
        overviewPEl.innerHTML = movieList[i].overview;

        containerDiv.appendChild(divEl);
        divEl.append(moviePosterImgEl, movieTitleH1El, releaseDateH2El, overviewPEl);
    };
};

function displayActors(actorList){
    containerDiv.innerHTML = '';
    for(let i = 0; i < actorList.length; i++){
        let divEl = document.createElement('div');
        let actorImgEl = document.createElement('img');
        let actorNameH1El = document.createElement('h1');
        let actorKnownForH2El = document.createElement('h2')
        let participatedInDiv = document.createElement('div');

        if(actorList[i].profile_path === null){
            actorImgEl.src = './Images/ImageNotFound.jpeg';
        }
        else{
            actorImgEl.src = `https://www.themoviedb.org/t/p/w300${actorList[i].profile_path}`;
        };
        actorNameH1El.innerText = actorList[i].name;
        actorKnownForH2El.innerText = `Known for: ${actorList[i].known_for_department}`;
        for(let j = 0; j < actorList[i].known_for.length; j++){
            let participatedInPEl = document.createElement('p');
            if(actorList[i].known_for[j] == undefined){
                participatedInPEl.innerText = '';
            }
            else if(actorList[i].known_for[j].title == undefined){
                participatedInPEl.innerText = `${actorList[i].known_for[j].media_type}: ${actorList[i].known_for[j].name}`;
            }
            else{
                participatedInPEl.innerText = `${actorList[i].known_for[j].media_type}: ${actorList[i].known_for[j].title}`;
            };
            participatedInDiv.appendChild(participatedInPEl);
        };

        containerDiv.appendChild(divEl);
        divEl.append(actorImgEl, actorNameH1El, actorKnownForH2El, participatedInDiv);
    };
};

function displayCategoryError(category, searchResult){
    containerDiv.innerHTML = '';
    let h1ElCreate = document.createElement('h1');

    if(!searchResult.trim()){
        h1ElCreate.innerText = `Please enter a name!`;
    }
    else{
        h1ElCreate.innerText = `${category} ${searchResult} not found!`;
    }
    containerDiv.appendChild(h1ElCreate);
};

function displayFetchError(){
    containerDiv.innerHTML = '';
    let h1ElCreate = document.createElement('h1');
    h1ElCreate.innerText = `Something went wrong! Connection problems or database problems.`;
    containerDiv.append(h1ElCreate);
};

export{displayActors, displayPageOneMovies, displayTenMovies, displayCategoryError, displayFetchError};