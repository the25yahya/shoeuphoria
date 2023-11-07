import React, {createContext, useContext, useState, useEffect, useReducer} from "react"
import PropTypes from "prop-types"
import AllProducts from '../Data/AllProducts.json'

const StateContext = createContext();
const productsContext = createContext();



//////////////////////////////////////////////////////////////////////////////////////////////////////////
const initialProductsState = {
  products: AllProducts,
  filters: {
    gender: '',
    price: '',
    brand: '',
  }
}

export function ProductsProvider({children}) {
  const [state, dispatch] = useReducer(productsReducer, initialProductsState);
  return(
    <productsContext.Provider value={{state, dispatch}}>
      {children}
    </productsContext.Provider>
  )
}

export function useProducts() {
  return useContext(productsContext);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

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
          value={{loading,setLoading,isClicked,setIsClicked,handleClick,activeMenu,setActiveMenu,sortBy,setSortBy,gender,price,brands,shoeFeel,bestFor,color,setActiveBestFor,setActiveGender,setActivePrice,setActiveBrands,setActiveShoeFeel,setActiveColor}}
        >
            {children}
        </StateContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);