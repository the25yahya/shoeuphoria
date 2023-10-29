import React, {createContext, useContext, useState} from "react"
import PropTypes from "prop-types"

const StateContext = createContext();

const initialState = {
    cart : false,
    userProfile : false,
} 

export const ContextProvider = ({children}) => {
    return(
        <StateContext.Provider
          value={{}}
        >
            {children}
        </StateContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);