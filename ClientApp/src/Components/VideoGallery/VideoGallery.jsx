import React from "react";
import "./index.css";
import Image from "../../Base/Image.jsx";
import ViewMode  from "../ViewButton/viewMode";
export default class VideoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: [
        {
          image: Image.video,
        },
        {
          image: Image.video_1,
        },
        {
          image: Image.video_2,
        },
        {
          image: Image.video_3,
        },
        {
          image: Image.video_2,
        },
        {
          image: Image.video_3,
        },
      ],
      index: 4,
      isViewMore: false
    };
  }
  handleShow = () => {
    this.state.index === 4
      ? this.setState({ index: this.state.video.length, isViewMore: true })
      : this.setState({ index: 4, isViewMore: false });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Video Gallery</h1>
        <div className="VideoGallery-items">
          {this.state.video.slice(0, this.state.index).map((item,index) => {
            return (
              <div key={index} className="VideoGallery">
                <img className="Video" src={item.image} alt="video" />
                <img className="PlayBtn" src={Image.collapse} alt="play" />
              </div>
            );
          })}
        </div>
        <ViewMode handleView = {this.handleShow} isViewMore = {this.state.isViewMore} />
      </React.Fragment>
    );
  }
}
