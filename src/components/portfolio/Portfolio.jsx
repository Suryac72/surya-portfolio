import "./portfolio.scss";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import {
  designPortfolio,
  webPortfolio,
  featuredPortfolio,
} from "../../data";
import { useEffect,useState } from "react";
export default function Portfolio() {
 const [selected,setSelected] = useState("featured");
 const [data,setData] = useState([]);
 const list=[
     {
            id:"featured",
            title:"Featured",
     },
     {
            id:"web",
            title:"Web App",
     },
    {
            id:"design",
            title:"Designing",
    },
    ];

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                break;
        } 
    },[selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1 >Portfolio</h1>
      <br>
      </br>
      <ul>
        {list.map((item)=>(<Portfoliolist title={item.title} active={selected === item.id} setSelected={setSelected}
        id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
        <div className="item img">
          <img
            src={d.img}
            alt=""
          />
          <h3>{d.title}</h3>
        </div>   
        ))};
    </div>
    </div>
  );
}