import React from "react";

const Form = (props) =>{
        return(
            <form onSubmit={props.getWheather}>
                <input type="text" name="city" placeholder="city..."/>
                <input type="text" name="country" placeholder="country..."/>
                <button>Get Wheather</button>
            </form>
        )
}

export default Form