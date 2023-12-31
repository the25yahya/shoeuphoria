import React, {createContext, useContext, useState, useEffect, useReducer} from "react"
import PropTypes from "prop-types"
import AllProducts from '../Data/AllProducts.json'
import MenProducts from '../Data/MenProducts.json'
import WomenProducts from '../Data/womenProducts.json'
const StateContext = createContext();



const initialState = {
    cart : false,
    user : false,
} 


export const ContextProvider = ({children}) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [sneakers, setSneakers] = useState(AllProducts);
  const [mensneakers, setMenSneakers] = useState(MenProducts);
  const [womensneakers, setWomenSneakers] = useState(WomenProducts);
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
      //cartReducer.js  
    const cartReducer = ( state, action )=>{
      switch(action.type){
        case 'ADD_TO_CART' :{
        const updatedCart = [...state.cart,action.payload];
        const updatedSubtotal = updatedCart.reduce((sum,item) =>sum + item.price, 0);
         return{
          ...state, cart: updatedCart,
          subtotal : updatedSubtotal,
         };}
        case 'REMOVE_FROM_CART' :{
         const updatedCart = state.cart.filter(item => item.id !== action.payload);
         const updatedSubtotal = updatedCart.reduce((sum,item) => sum + item.price,0) 
         return{
          ...state, cart: state.cart.filter(item => item.id !== action.payload),
          subtotal: updatedSubtotal,
         };}
        default :
        return state;
      }
    }

    const cartInitialState = {
      cart:[],
      subtotal:0,
    }
    const [ state, dispatch ] = useReducer(cartReducer,cartInitialState)
    const [displayedProduct, setDisplayedProduct] = useState(null);
    const [productDisplay, setProductDisplay] = useState(false);
    const [productDisplayMen, setProductDisplayMen] = useState(false);
    const [productDisplayWomen, setProductDisplayWomen] = useState(false);
    return(
        <StateContext.Provider
          value={{loading,setLoading,isClicked,setIsClicked,handleClick,activeMenu,setActiveMenu,sortBy,setSortBy,gender,price,brands,shoeFeel,bestFor,color,setActiveBestFor,setActiveGender,setActivePrice,setActiveBrands,setActiveShoeFeel,setActiveColor,sneakers,setSneakers,cartReducer,cartInitialState,state,dispatch,displayedProduct,setDisplayedProduct,productDisplay,setProductDisplay,mensneakers,setMenSneakers,womensneakers,setWomenSneakers,searchTerm,setSearchTerm,productDisplayMen,productDisplayWomen,setProductDisplayMen,setProductDisplayWomen}}
        >
            {children}
        </StateContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);
