import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage =()=>{
    const error= useRouteError();
    console.log(error);
    
    return (
       
        <>
          <div>
            <h1>
               Ooops An Eroor Occured!
            </h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/" >
                <button>go home</button>
            </NavLink>
          </div>  
        </>
    )
}