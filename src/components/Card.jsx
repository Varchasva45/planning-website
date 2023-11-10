import { useState } from "react";

function Card(props) {
    const initalDesc = props.tourData.info.substr(0, 200) + ".... ";
    const [description, changeDesc] = useState(initalDesc);
    const [descButton, changeButton] = useState("read more");

    return <>
        <div className="card">
            <img src={props.tourData.image} className="image" alt="" />
            <div className="tour-info">
                <div className="tour-details">
                    <h1>{props.tourData.price}</h1>
                    <h4>{props.tourData.name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={() => {
                        if(descButton === "read more") {
                            changeDesc(props.tourData.info + "....  ")
                            changeButton("show less")
                        }else if(descButton === "show less") {
                            changeDesc(initalDesc)
                            changeButton("read more")
                        }
                        
                    }}>{descButton}</span>
                </div>
            </div>
            <button onClick={() => {
                props.removeData(props.tourData.id);
            }} > Not Intrested </button>
        </div>
    </>
}

export default Card;