import React, {createContext, useContext, useState, useEffect} from "react"
import PropTypes from "prop-types"

const StateContext = createContext();

const initialState = {
    cart : false,
    user : false,
} 

export const ContextProvider = ({children}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a delay for loading content
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }, []);
    /////////////////////////////////
    const [isClicked, setIsClicked] = useState(initialState);
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
      }
    
    return(
        <StateContext.Provider
          value={{loading,setLoading,isClicked,setIsClicked,handleClick}}
        >
            {children}
        </StateContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);