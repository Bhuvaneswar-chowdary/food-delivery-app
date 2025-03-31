import React ,{useState} from 'react'
import './Home.css'
import Header from '../components/Header'
import Exploremenu from '../components/Exploremenu'
import Fooddisplay from '../components/Fooddisplay'
import Appdownload from '../components/Appdownload'


const Home = () => {
  const [category,setcategory]=useState("All")
  return (
    <div>
        < Header/>
        < Exploremenu category={category} setcategory={setcategory} />
        < Fooddisplay category={category} />
        < Appdownload/>
      
    </div>
  )
}

export default Home
