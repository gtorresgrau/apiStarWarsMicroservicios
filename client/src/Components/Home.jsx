import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllCharacters, getFilms, filterByPlanet, sortAz, sortPop, getCharactersFilms } from "../Actions/index.js";

import Nav from "./Nav.jsx";
import Card from "./Card.jsx";
import Paginado from "./Paginado.jsx";
import Style from './Styles/Home.module.css'


export default function Home (){
    const dispatch = useDispatch();
    //const{id} = useParams ();
    const allCharacters= useSelector((state)=> state.characters);
    const films = useSelector((state) => state.films);

    const filterChar = document.getElementById('filterChar')
    const filterFilm = document.getElementById('filterFilm')

    const [page, setPage] = useState(1);
    const [characterPage] = useState(10);
    const [, setOrden] = useState(1);
                        
    let indexLastCharacter =  page * characterPage;
    let indexFirstCharacter = indexLastCharacter - characterPage
    
     if(page === 1){
        indexLastCharacter = 9;
        indexFirstCharacter = 0;
     }else{
        indexLastCharacter = indexLastCharacter -1;
        indexFirstCharacter = indexFirstCharacter -1;
     };
    
    const actualyCharacters = allCharacters.slice(indexFirstCharacter, indexLastCharacter); // 0 a 10

    useEffect(()=>{
        dispatch(getFilms());
    },[dispatch]);
    
    useEffect(()=>{
        dispatch(getCharactersFilms());
    },[dispatch]);

    useEffect(()=>{
        dispatch(getAllCharacters())
    },[dispatch]);

    function handlerFilterPlanet(e){
        setPage(1);
        e.preventDefault();
        dispatch(filterByPlanet(e.target.value))
        filterFilm.value='All';
    }
    
    function handlerFilms(e){
        e.preventDefault();
        dispatch(getFilms(e.target.value))
        dispatch(getCharactersFilms(e.target.value))
        filterChar.value='planet';
    }

    function handlerFilter(e){
      dispatch(sortAz(e.target.value))
      
      setOrden(e.target.value)
      setPage(1);
    }

    function handlerFilterPop(e){
      dispatch(sortPop(e.target.value))
      setOrden(e.target.value)
      setPage(1);
    }

    return (
        <div className={Style.container}>
            <div className={Style.header}>
                <div className={Style.navigate}>
                    <Nav setPage={setPage} className={Style.nav}/>
                </div>
                <form id='Filtros' className={Style.filters}>
                    <div className={Style.sort}>
                        <div className={Style.az}>
                            <p>Sort by Name</p>
                            <label htmlFor='az'>
                            <input name='sortName' id='az' value='az' type='radio' className='input-radio' onChange={e=>handlerFilter(e)}/>A-Z</label>
                            <label htmlFor="za">
                            <input name='sortName' id='za' value='za' type='radio' className='input-radio' onChange={e=>handlerFilter(e)}/>Z-A</label>
                        </div>
                        <div className={Style.mm}>
                            <p>Sort by Population</p>
                            <label htmlFor='+a-'>
                            <input name='sortPop' id='+a-' value='+a-' type='radio' className='input-radio' onChange={e=>handlerFilterPop(e)}/> Mayor a Menor </label>
                            <label htmlFor='-a+'>
                            <input name='sortPop' id='-a+' value='-a+' type='radio' className='input-radio' onChange={e=>handlerFilterPop(e)}/> Menor a Mayor </label>
                        </div>
                    </div>
                    <div className={Style.select}>
                        <div className={Style.cont}>
                            <p>Filter by Planet</p>
                            <select onChange={e=>handlerFilterPlanet(e)} defaultValue='planet' id='filterPlanet'>
                                <option value='world' >All Planets</option>
                                <option value='Antarctica'>Antartica</option>
                                <option value='Africa'>Africa</option>
                                <option value='Asia'>Asia</option>
                                <option value='Europe'>Europe</option>
                                <option value='Oceania'>Oceania</option>
                                <option value='South America'>South America</option>
                                <option value='North America'>North America</option>
                            </select>
                        </div>
                        <div className={Style.act}>
                            <p>Filter by Films</p>
                            <select onChange={handlerFilms} defaultValue='All' id='filterFilm'>
                                <option disabled value='All'>All Films</option>
                                {films.map((e)=>(
                                    <option key={e.id} value={e.name}>{e.name}</option>
                                    ))}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div className={Style.paginado}>
            <Paginado 
                    characterPage={characterPage}
                    allPages={allCharacters.length}
                    page={page}
                    setPage={setPage}
            />
            </div>
            <div className={Style.cards}>
                { actualyCharacters?.map((e)=>{
                    return(
                            <div key={e.id} className={Style.oneCountry} >
                                <Link to={`/Character/${e.id}`}>
                                    <Card name={e.name} planet={e.homeworld} key={e.id}/>
                                </Link>
                            </div>
                            )
                })}
            </div>
        </div>
    )
};