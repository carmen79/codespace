import React from "react";
import { ICity } from "../interfaces";
import { connect } from "react-redux";
import { IGlobalState } from "../reducers";
import { sendToken, setCities } from "../action";

interface IProps {

}

interface IPropsGlobal {
 token: string;
 cities: ICity[];
 setCities: (cities:ICity[]) => void
}

const Cities: React.FC<IProps & IPropsGlobal> = props => {
 const [cityInput, setCityInput] = React.useState("");

 const searchCity = (event: React.ChangeEvent<HTMLInputElement>) => 
   setCityInput(event.currentTarget.value);

 return (
   <div className="container">
     <div className="row">
       <div className="col-6">
         <h3>SEARCH YOUR CITY</h3>
         <input
           type="text"
           value={cityInput}
           className="form-control"
           placeholder="city"
           onChange={searchCity}
         />
         {props.cities
           .filter(city =>
             city.name.toLowerCase().startsWith(cityInput.toLowerCase())
           )
           .slice(0, 5)
           .map(city => (
             <div className="card w-75">
               <div className="card-body">
                 <h5 className="card-title">{city.country}</h5>
                 <p className="card-text">{city.name}</p>
               </div>
             </div>
           ))}
       </div>
     </div>
   </div>
 );
};

const mapDispatchToProps = { setCities:setCities};

const mapStateToProps = (state:IGlobalState) =>({
    cities: state.cities,
    token: state.token

})

export default connect (mapStateToProps,mapDispatchToProps) (Cities);