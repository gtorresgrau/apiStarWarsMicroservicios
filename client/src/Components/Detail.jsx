import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { details } from "../Actions/index.js";
import Style from '../Components/Styles/Detail.module.css'

export default function Detail(){
    const {id} = useParams();
    const dispatch = useDispatch();

    //console.log('detail id:', id)

    useEffect(()=>{
        dispatch(details(id))
    },[dispatch,id])

    const characterDetail = useSelector(state => state.detail)
    //console.log('detail:',countryDetail.Activities)
    return (
        <div className={Style.allDetail}>
             <div className={Style.backContain}>
                    <Link to='/Character'>
                        <button className={Style.back} >BACK</button>
                    </Link>
                </div>
            {
                Object.keys(characterDetail).length?
            <div className={Style.detail}>
                 <h1 className={Style.cname}>{characterDetail.name}</h1>
                 <img className={Style.flag} src={characterDetail.flags?characterDetail.flags:'Does not have a flag to display'} alt={characterDetail.name}/>
                 <h2 className={Style.datos}>Continent: {characterDetail.continents}</h2>
                 <h2 className={Style.datos}>Subregion: {characterDetail.subregion}</h2>
                 <h3 className={Style.datos}>Codigo Pais: {characterDetail.id}</h3>
                 <h2 className={Style.datos}>Capital: {characterDetail.capital}</h2>
                 <h3 className={Style.datos}>Area: {characterDetail.area}</h3>
                 <h3 className={Style.datos}>Population: {characterDetail.population}</h3>
                 
                 <div className={Style.turist}>
                     <h3 className={Style.cname}>Tourist Activities</h3>
                     <div className={Style.activities}>
                         {
                            characterDetail.films.length?characterDetail.films.map((e) => {
                                return(
                                    <div key={e.id} className={Style.info}>
                                        <h3>ACTIVITY:</h3>
                                        <h4>Name:  {e.name}</h4>
                                        <h4>Difficulty:  {e.difficulty}</h4>
                                        <h4>Duration:  {e.duration}</h4>
                                        <h4>Season:  {e.season}</h4>
                                        <br/>
                                    </div>
                                )
                            }):
                            <div className={Style.datos}>'It does not have tourist activities'</div>
                        }
                     </div>
                </div>
                 
            </div>
                : <h1>LOADING..</h1>
                }
        </div>
    )
}