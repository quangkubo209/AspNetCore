import React from "react";
import "./index.css";
import Image from "../../Base/Image.jsx";
import ViewMode  from "../ViewButton/viewMode";
export default class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listAnnounment: [
        {
          title: "New Learning System Is Live",
          content:
            "New Wellness Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
          image: Image.image_gallery,
          date: "05/Jan/2021",
          tag: "Human Resource",
        },
        {
          title: "IT Maintenance",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.image_gallery_1,
          date: "02/Jan/2021",
          tag: "Human Resource",
        },
        {
          title: "IT Maintenance",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.image_gallery_2,
          date: "02/Jan/2021",
          tag: "Human Resource",
        },
        {
          title: "IT Maintenance",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.image_gallery_3,
          date: "02/Jan/2021",
          tag: "Human Resource",
        },
        {
          title: "New Learning System Is Live",
          content:
            "New Wellness Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
          image: Image.image_gallery,
          date: "05/Jan/2021",
          tag: "Human Resource",
        },
        {
          title: "IT Maintenance",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.image_gallery_1,
          date: "02/Jan/2021",
          tag: "Human Resource",
        },
        {
          title: "IT Maintenance",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.image_gallery_2,
          date: "02/Jan/2021",
          tag: "Human Resource",
        },
        {
          title: "IT Maintenance",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.image_gallery_3,
          date: "02/Jan/2021",
          tag: "Human Resource",
        },
        {
          title: "IT Maintenance",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.image_gallery_3,
          date: "02/Jan/2021",
          tag: "Human Resource",
        },
        {
          title: "IT Maintenance",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.image_gallery_3,
          date: "02/Jan/2021",
          tag: "Human Resource",
        },
      ],
      //define the current state of view.
      CountItem: 4, 
      isViewMore: false,
    };
  }

  handleShow = () => {
      return ((this.state.CountItem === 4)  ? 
        this.setState({CountItem:  this.state.listAnnounment.length, isViewMore: true})
        : this.setState({CountItem: 4 , isViewMore: false})
      )
  };

  //props in react js: It allow these components communicate with each others through by paramerters.
  // PropsTypes help us to check whether data types of props be passed to component, and is it compulsory.


//render layout 
  render() {
    return (
      <React.Fragment>
        <h1>Announcement</h1>
        <div className="announ-items">
          {
            //traversal all item in listItem.
          this.state.listAnnounment.slice(0, this.state.CountItem).map((Item, Index) => {
            return (
              // two flex, image and (title, date, tag,para)
              <div key={Index} className="announcement-all">
                {/* flex1: image */}
                <div className="announcement-img">
                  <img src={Item.image} alt="Img" />
                </div>
                {/* flex 2 */}
                <div className="announcement-news">
                  <div  className="announcement-item">
                    <h3>{Item.title}</h3>
                  </div>
                  <div  className="announcement-content">
                    {Item.content}
                  </div>
                  <div className="announcement-text">
                    <img src={Image.date} alt="date" />
                    <div className="announcement-date">
                      {Item.date}
                    </div>
                    <div className="announcement-tag" >
                      {Item.tag}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
          }
        </div>
        <ViewMode handleView = {this.handleShow} isViewMore = {this.state.isViewMore} />
        {/* create buttom to showMore and showLess */}
        {/* <button onClick={this.handleShow}>
          {
            (this.state.CountItem === 4) ? 
            <p>View more<img src = {Image.arrowicon} alt = "img" /></p> 
            :<p>View less<img id = "rotation" src ={Image.arrowicon} alt = "img" /></p>
          }
        </button> */}

        
      </React.Fragment>
    );
  }
}
