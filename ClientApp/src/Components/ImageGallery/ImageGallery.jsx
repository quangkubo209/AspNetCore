import React from "react";
import "./index.css";
import "../Announcement/index.css";
import ViewMode  from "../ViewButton/viewMode";
import Image from "../../Base/Image.jsx";
export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [
        {
          image: Image.image_gallery,
        },
        {
          image: Image.image_gallery_1,
        },
        {
          image: Image.image_gallery_2,
        },
        {
          image: Image.image_gallery_3,
        },
        {
          image: Image.markgroup_2,
        },
        {
          image: Image.markgroup_4,
        },
        {
          image: Image.image_gallery_1,
        },
        {
          image: Image.image_gallery_2,
        },
        {
          image: Image.image_gallery_3,
        },
      ],
      index: 4,
      isViewMore: false
    };
  }
  handleShow = () => {
    this.state.index === 4
      ? this.setState({ index: this.state.img.length, isViewMore: true })
      : this.setState({ index: 4, isViewMore: false });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Image Gallery</h1>
        <div className="Image-items">
          {this.state.img.slice(0, this.state.index).map((item,index) => {
            return (
              <div  key={index} className="Image">
                <img src={item.image} alt="Img" />
              </div>
            );
          })}
        </div>
        <ViewMode handleView = {this.handleShow} isViewMore = {this.state.isViewMore} />
      </React.Fragment>
    );
  }
}
