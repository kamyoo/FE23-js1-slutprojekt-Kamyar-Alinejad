import {displayFetchError} from "./display.js";

const API_KEY = 'e260aeb962197fce7f389cbc57692172';

async function fetchTmdb(urlApi){
    const url = urlApi + API_KEY;

    try{
        const res = await fetch(url);
        const data = await res.json();
        if(data.results.length === 0){
            return 'noResults';
        }
        else{
            return data.results;
        };
    }
    catch(error){
        return displayFetchError(error);
    };
};

export{fetchTmdb};