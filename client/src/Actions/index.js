import axios from 'axios';

import { 
    GET_CHARACTERS,
    GET_AZ,
    GET_POP,
    GET_DETAILS, 
    GET_CHARACTER, 
    GET_PLANET,
    GET_FILMS,
    GET_CHARBYFILM,
  } from './ActionsType.js';


//

export function getAllCharacters(){
    return async function(dispatch){
        try{
            let allCharacters = await axios(`http://34.125.141.34:8000/Character`);
            console.log('ACTIONS:', allCharacters.data)
                return dispatch({
                    type: GET_CHARACTERS,
                    payload: allCharacters.data
                })
        }
        catch(e){
            window.location.href = "http://localhost:3000/Character";
            alert(`Something happened when fetching the data from the Server, try to refresh the web`)
        }
    }
}
//-----------------------------------------------------------------------------
        
export function sortAz(payload){
    return{
        type: GET_AZ,
        payload
    }
};

export function sortPop(payload){
    return{
        type: GET_POP,
        payload
    }
};

//---------------------------------------------------------------------------------------------

export function getCharacterByName(name){
    return async function(dispatch){
        try{
            let getCharacter = await axios(`http://34.125.141.34:8000/Character?name=${name}`);
                return dispatch({
                    type: GET_CHARACTER,
                    payload: getCharacter.data
                })
        }
        catch(e){
            window.location.href = "http://localhost:3000/Character";
            console.log(`There are no character with the combination of Characters entered: ${name}`)
            alert(`There are no character with the combination of Characters entered: ${name}`)
        }
    }
};

export function filterByPlanet(payload){
    return async function(dispatch){
        if(payload === 'planet') { var urlBack = `http://34.125.141.34:8000/Planet`}
        else{ urlBack = `http://34.125.141.34:8000/Planet/${payload}`}
        try{                
            let getPlanet = await axios(urlBack);
                return dispatch({
                    type: GET_PLANET,
                    payload: getPlanet.data
                })
            
            }
            catch(e){
                window.location.href = "http://localhost:3000/Planet";
                console.log(`Something happened when filtering by Planet: ${payload}`)
                alert(`Something happened when filtering by Planet: ${payload}`)
            }
    }
};

//--------------------------------------------------------------------------------------------------

export function getFilms(){
    return async function(dispatch){
        const films = await axios(`http://34.125.141.34:8000/Film`);
        return dispatch({
            type: GET_FILMS,
            payload: films.data
        })
    }
};

export function getCharactersFilms(payload){
    return async function(dispatch){
        //console.log( 'payload:', payload )
        return dispatch({
            type: GET_CHARBYFILM,
            payload
        })
    }
};

export function addActivity(payload){
    return async function(){
        const add = await axios.post(`http://34.125.141.34:8000/Film`, payload)
        return add;
    }
};


//------------------------------------------------------------------------------------------
export function details(id){
    return async function(dispatch){
        try{
            const info = await axios(`http://34.125.141.34:8000/Character/${id}`);
            return dispatch({
                type: GET_DETAILS,
                payload: info.data
            })
        }
        catch(e){
            window.location.href = "http://34.125.141.34:8000/Character/";
            console.log(`Something happened when filtering by id: ${id}`)
            alert(`Something happened when filtering by id: ${id}`)
        }
    }
}