import React, {createContext, useContext, useState, useEffect, useReducer} from "react"
import PropTypes from "prop-types"
import AllProducts from '../Data/AllProducts.json'

const StateContext = createContext();



const initialState = {
    cart : false,
    user : false,
} 
const sneakersInitialState = {
  sneakers: AllProducts,
  filterState: 'all',
}
const FILTER_MEN = 'FILTER_MEN';
const FILTER_WOMEN = 'FILTER_WOMEN';
const RESET_FILTER = 'RESET_FILTER';

// Create your reducer function
const sneakersReducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_MEN':
      return {
        ...state,
        sneakers: state.sneakers.filter(product => product.gender === 'Men'),
        filterState: 'Men',
      };
    case 'FILTER_WOMEN':
      return {
        ...state,
        sneakers: state.sneakers.filter(product => product.gender === 'Women'),
        filterState: 'Women',
      };
    case 'RESET_FILTER':
      return {
        ...state,
        sneakers: AllProducts,
        filterState: 'All',
      };
    default:
      return state;
  }
};
export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(sneakersReducer, sneakersInitialState);
  ///////////////////////////////////////
  const [sneakers, setSneakers] = useState(AllProducts);
  ///////////////////////////////////////////////
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a delay for loading content
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }, []);
    /////////////////////////////////
    const [gender, setActiveGender] = useState(false);
    const [price, setActivePrice] = useState(false);
    const [brands, setActiveBrands] = useState(false);
    const [shoeFeel, setActiveShoeFeel] = useState(false);
    const [bestFor, setActiveBestFor] = useState(false);
    const [color, setActiveColor] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState);
    const [sortBy, setSortBy] = useState(false);
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
      }
    
    return(
        <StateContext.Provider
          value={{loading,setLoading,isClicked,setIsClicked,handleClick,activeMenu,setActiveMenu,sortBy,setSortBy,gender,price,brands,shoeFeel,bestFor,color,setActiveBestFor,setActiveGender,setActivePrice,setActiveBrands,setActiveShoeFeel,setActiveColor,sneakers,setSneakers,state,dispatch,FILTER_MEN,FILTER_WOMEN,RESET_FILTER}}
        >
            {children}
        </StateContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);