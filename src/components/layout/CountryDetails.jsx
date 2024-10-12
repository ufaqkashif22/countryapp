import { NavLink, useParams } from "react-router-dom"
import {getCountryIndData} from "../../api/postApi";
import { useEffect, useState, useTransition } from "react";


export const CountryDetails =()=>{
    const params = useParams()
    console.log(params);
    const [isPending,startTransition]=useTransition()
    const [myCountry,setMyCountries]= useState();


    useEffect(()=>{
        startTransition(async()=>{
            const res= await getCountryIndData(params.id);
            console.log(res.data);
            if (res.status === 200) {
                setMyCountries(res.data[0]);
              }
        
              console.log(Object.keys(res.data[0].name.nativeName));
         
            
        })
    }, [])

    if(isPending) return <h2>loading...</h2> 

    return (
    
        <section className="card country-details-card container">
        <div className="container-card bg-white-box">
            {myCountry &&(
                    <div className="country-image grid grid-two-cols">
                    <img
                    src={myCountry.flags.svg}
                    alt={myCountry.flags.alt}
                    className="flag"
                    />
                    <div className="country-content">
              <p className="card-title"> {myCountry.name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(myCountry.name.nativeName)
                    .map((key) => myCountry.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {myCountry.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {myCountry.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {myCountry.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {myCountry.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {myCountry.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(myCountry.currencies)
                    .map((curElem) => myCountry.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(myCountry.languages)
                    .map((key) => myCountry.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
            </div>
                )}
                <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
            </div>
            </section>
            );
};