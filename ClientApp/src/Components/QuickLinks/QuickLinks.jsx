import React from "react";
import "./index.css";
import Image from "../../Base/Image.jsx"
export default class QuickLinks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            qlink: [
                {
                    image: Image.icon,
                    content: "Training",
                },
                { 
                    image: Image.icon_1,
                    content: "Organization",

                },
                { 
                    image: Image.icon_2,
                    content: "Task",
                },
                { 
                    image: Image.icon_3,
                    content: "Global Sales",
                },
                { 
                    image: Image.icon_4,
                    content: "Birthday",
                },
                { 
                    image: Image.icon_5,
                    content: "Health",
                },                 
                { 
                    image: Image.icon_6,
                    content: "Service Desk",
                },
                { 
                    image: Image.icon_7,
                    content: "Truck",

                },
                { 
                    image: Image.icon_8,
                    content: "Idea",
                },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Quick Links</h1>
                <div className="quicklink-items">
                    {
                    this.state.qlink.map((item, index) =>(
                        <div key={index} className="quicklink-background">
                            <div  className="quicklink-content">
                            <img  src={item.image} alt="img" />
                            <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}