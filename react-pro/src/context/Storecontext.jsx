import { createContext, useEffect, useState } from "react";
import cas_salad from '../assets/cas_salad.jpeg';
import green_salad from '../assets/green_salad.jpeg';
import wal_salad from '../assets/wal_salad.jpeg';
import nv_salad from '../assets/nv_salad.jpeg';
import choc_cake from '../assets/choc_cake.jpeg';
import vanilla_cake from '../assets/vanilla.jpeg';
import straw_cake from '../assets/straw_cake.jpeg';
import egg_noodles from '../assets/egg_noodles.jpeg';
import chick_noodles from '../assets/chic_noodles.jpeg';
import soba_noodles from '../assets/soba_noodles.jpeg';
import m_pizza from '../assets/m_pizza.jpeg';
import ch_pizza from '../assets/ch_pizza.jpeg';
import pan_pizza from '../assets/pan_pizza.jpeg';
import cheese_sandwich from '../assets/cheese_sand.jpeg';
import chic_sand from '../assets/chic_sand.jpeg';
import pan_sand from '../assets/pan_sand.jpeg';
import veg_roll from '../assets/veg_roll.jpeg';
import egg_roll from '../assets/egg_roll.jpeg';
import chic_roll from '../assets/chic_roll.jpeg';
import mixed_roll from '../assets/mixed_roll.jpeg';
import veg_thali from '../assets/veg_thali.jpeg';
import roti_sabji from '../assets/roti_sabji.jpeg';
import pastry from '../assets/pastry.jpeg';
import sweet from '../assets/sweets.jpeg';
import sweet2 from '../assets/sweet2.jpeg';
import mugh_biryani from '../assets/mugh_biryani.jpeg';
import mutton_biryani from '../assets/mutton_biryani.jpeg';
import fry_biryani from '../assets/fry_biryani.jpeg';
import dhum_biryani from '../assets/dhum_biryani.jpeg';
import chilly_chicken from '../assets/chilly_chic.jpeg';
import chicken65 from '../assets/chic65.jpeg';
import crispy_chicken from '../assets/crispy_chic.jpeg';
import axios from "axios";
export const Storecontext = createContext(null);

  
const Storecontextprovider=({children})=>{
   
    const [cartitems,setcartitems]=useState({})
    const [contextvalue, setContextValue] = useState([]); // Assuming it holds product info
    const [total, setTotal] = useState(0);
    const url="http://localhost:3000";
    const [token,settoken]=useState("")

    const [food_list,setfood_list]=useState([])
   
    
    const addtocart=async (itemId)=>{
      if(!cartitems[itemId]){
        setcartitems((prev)=>({...prev,[itemId]:1}))
      } 
      else{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }
      
      if(token){
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        console.log(itemId);
        
       
        
      }
    }
    const removefromcart=async(itemId)=>{
      setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      if(token){
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})

      }
    }

    const fetchfoodlist=async ()=>{
      const response = await axios.get(url+"/api/food/list");
      setfood_list(response.data.data)
    }

    const loadCartData= async (token)=>{
      const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
      setcartitems(response.data.cartData)

    }

    useEffect(()=>{
      async function loadData(){
        await fetchfoodlist();
      if(localStorage.getItem("token")){
        settoken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData()
    })


    return(
        <Storecontext.Provider value={{contextvalue : food_list, cartitems,addtocart,removefromcart,total,setTotal,url,token,settoken}}>
            {children}
        </Storecontext.Provider>
    )
}
export default Storecontextprovider;