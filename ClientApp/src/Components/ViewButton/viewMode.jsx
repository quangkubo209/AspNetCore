import React from "react";
import Image from "../../Base/Image";
import "./index.css";


export default class ViewMode extends React.Component {
  render() {
    return (
      <>
        {(this.props.isViewMore === false) ? (
          <div className="view-more" onClick={(e) => this.props.handleView()}>
            View more  <img src = {Image.arrowicon} alt = "img" />
          </div>
        ) : 
        (
          <div className="view-more" onClick={(e) => this.props.handleView()}>
            View less {" "}<img className= "rotation" src = {Image.arrowicon} alt = "img" />
          </div>
        )}
      </>
    );
  }
}
            // <p>View more<img src = {Image.arrowicon} alt = "img" /></p> 
            // :<p>View less<img id = "rotation" src ={Image.arrowicon} alt = "img" /></p>