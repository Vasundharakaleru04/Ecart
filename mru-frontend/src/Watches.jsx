import { useEffect, useState } from "react";
import "./Laptops.css";
import axios from "axios";
const Watches = ()=>{
    const [watches,setWatches] = useState([]);
    const get_watches = async ()=>{
        const res = await axios.get("http://localhost:3000/watches");
        const {data} = res;
        setWatches(data);
    }
    useEffect(()=>{
        get_watches();
    },[]);
    
    return(
        <>
            <div className="parent">
                {watches.map((element,index)=>{
                    return(
                        <div className="child">
                            <img src={element.pimage}></img>
                            <h2><i className="fa fa-rupee"></i> {element.pcost}</h2>
                            <p>Qty: {element.pqty}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Watches;