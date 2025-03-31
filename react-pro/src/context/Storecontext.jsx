import { useEffect, useState } from "react";
import axios from "axios";
import { Storecontext } from "./context";

  
const Storecontextprovider=({children})=>{
    const [food_list,setfood_list]=useState([])
    const [cartitems,setcartitems]=useState({})
    // const [contextvalue, setContextValue] = useState([]); // Assuming it holds product info
    const [total, setTotal] = useState(0);
    const url="http://localhost:3000";
    const [token,settoken]=useState("")
   
    
    const addtocart=(itemid)=>{
      if(!cartitems[itemid]){
        setcartitems((prev)=>({...prev,[itemid]:1}))
      } 
      else{
        setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
      }
    }
    const removefromcart=(itemid)=>{
      setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
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