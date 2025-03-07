import { useEffect, useState} from "react";
import "./Watches.css";
import axios from "axios";
const Watches =()=> {
    const[watches,setwatches] = useState([]);
    const get_watches= async ()=>{
        const res = await axios.get("http://localhost:3000/watches");
        const {data} = res;
        setwatches(data);
    }
    useEffect(()=>{
        get_watches();

    },[]);

return(
<>
    <div className="parent">
        {
        watches.map((element,index)=>{
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
export default Watches;