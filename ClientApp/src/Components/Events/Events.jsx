import React from "react";
import "./index.css";
import Image from "../../Base/Image";

import ViewMode  from "../ViewButton/viewMode";


export default class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listEvents:  [
        {
          id: 1,
          day: "01",
          month: "Jan",
          img: Image.clock,
          title: "IT Maintenance",
          time: "09:00 AM - 09:30 AM"
        },
      
        {
          id: 2,
          day: "02",
          month: "Jan",
          img: Image.clock,
          title: "IT Maintenance",
          time: "09:00 AM - 09:30 AM"
      
        },
        {
          id: 3,
          day: "03",
          month: "Jan",
          img: Image.clock,
          title: "IT Maintenance",
          time: "09:00 AM - 09:30 AM"
      
        },
        {
          id: 4,
          day: "04",
          month: "Jan",
          img: Image.clock,
          title: "IT Maintenance",
          time: "09:00 AM - 09:30 AM"
      
      
        },
        {
          id: 5,
          day: "04",
          month: "Jan",
          img: Image.clock,
          title: "IT Maintenance",
          time: "09:00 AM - 09:30 AM"
      
      
        },
        {
          id: 6,
          day: "04",
          month: "Jan",
          img: Image.clock,
          title: "IT Maintenance",
          time: "09:00 AM - 09:30 AM"
        },
      
      ],
      itemCount: 4,
      isViewMore: false
    };
    this.handleShow = this.handleShow.bind(this);

  }

  handleShow = () => {
    (this.state.itemCount === 4)
      ? this.setState({ itemCount: this.state.listEvents.length, isViewMore:true })
      : this.setState({ itemCount: 4 , isViewMore: false});
  };


  render() {
    return (
      <React.Fragment>
        <div className="event_title">
          <h2 className="event_name">Event</h2>
          <div className="event_list">
            {

              this.state.listEvents.slice(0, this.state.itemCount).map((item) => (


                <div className="event_items" key={item.id}>

                  <div className="event_content_left">
                    <h2 className="event_date">
                      {item.day}
                    </h2>
                    <p className="event_month">
                      {item.month}
                    </p>
                  </div>
                  <div className="event_content_right">
                    <div className="list_right">
                      <h4 className="title_right">{item.title}</h4>
                      <div className="time_clock">
                        <img src={item.img} alt={item.title} />
                        <p className="time"> {item.time}</p>
                      </div>
                    </div>

                  </div>


                </div>

              ))
            }

          </div>

        </div>
        <ViewMode handleView = {this.handleShow} isViewMore = {this.state.isViewMore} />
      </React.Fragment>

    )
  }
}
