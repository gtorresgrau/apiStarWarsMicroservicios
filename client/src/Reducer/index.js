import { 
    GET_CHARACTERS,
    GET_AZ,
    GET_POP,
    GET_DETAILS, 
    GET_CHARACTER, 
    GET_PLANET,
    GET_FILMS,
    ADD_ACTIVITY,
    GET_CHARBYFILM,
  } from '../Actions/ActionsType.js';

export const initialState ={
    characters: [],
    allCharacters:[],
    detail: [],
    films:[]
}

export default function rootReducer(state = initialState, action ){
    switch(action.type) {
        case GET_CHARACTERS:
            return{
                ...state,
                characters: action.payload,
                allCharacters: action.payload
            }
        case GET_AZ:
            let sort = action.payload === 'az'
            ?state.characters.sort((a,b) => {
                if(a.name>b.name)return 1;
                if(a.name<b.name)return -1;
                return 0})
           :state.characters.sort((a,b)=>{
                    if(a.name>b.name)return -1;
                    if(a.name<b.name)return 1;
                    return 0;})
            return{
                ...state,
                characters: sort
            }
        case GET_POP:
            let sortpop = action.payload === '+a-'
            ?state.characters.sort((a,b) => {
                if(a.population>b.population)return -1;
                if(a.population<b.population)return 1;
                return 0})
           :state.characters.sort((a,b)=>{
                if(a.population>b.population)return 1;
                if(a.population<b.population)return -1;
                return 0})
            return{
                ...state,
                characters: sortpop
            }
        case GET_CHARACTER:
            return{
                ...state,
                characters: action.payload,
            }
        case GET_PLANET:
            return{
                ...state,
                characters: action.payload,
            }
        case GET_FILMS:
            const filmset = new Set();
            const filterFilm = action.payload.reduce((acc, film) => {
                if (!filmset.has(film.name)){
                    filmset.add(film.name, film)
                    acc.push(film)
                    }
                return acc;
              },[]);
           return{
             ...state,
              films: filterFilm
            }
        case GET_CHARBYFILM:
            const CharactersWithFilms = [];
            state.allCharacters.map(e=>{
                if(e.films.length){
                    e.films.map(el => {if(el.name === action.payload){
                      return  CharactersWithFilms.push(e)
                    } return 'ok'}) 
                } return console.log('Films filtered')
            })
            return{
             ...state,
             characters: CharactersWithFilms
            }
        case ADD_ACTIVITY:
            return{
                ...state,
            }
        case GET_DETAILS:
            return{
                ...state,
                detail: action.payload,
            }
        default :
                return{
                    ...state
                }
}};
