import { useEffect, useState} from "react";
import "./Mobiles.css";
import axios from "axios";
const Mobiles =()=> {
    const[mobiles,setmobiles] = useState([]);
    const get_mobiles = async ()=>{
        const res = await axios.get("http://localhost:3000/mobiles");
        const {data} = res;
        setmobiles(data);
    }
    useEffect(()=>{
        get_mobiles();

    },[]);

return(
<>
    <div className="parent">
        {
        mobiles.map((element,index)=>{
            return(
                <div className="child"> 
                 <img src={element.pimage}></img>
                <h3><i className="fa fa-rupee"></i> {element.pcost}</h3>
                <p>{element.pqty}</p>
                </div>
            )
        })
    }
    </div>
                </>
)
}
export default Mobiles;