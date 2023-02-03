import React from "react";
import "./index.css";
import Image from "../../Base/Image.jsx";
import ViewMode from "../ViewButton/viewMode";


export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [
        {
          title: "Tomorrow Healthy Check",
          content:
            "New Wellness Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
          image: Image.markgroup2,
          date: "05/Jan/2021",
        },
        {
          title: "Air-conditioning is broken",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.markgroup_1,
          date: "02/Jan/2021",
        },
        {
          title: "Keep Running",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.markgroup_2,
          date: "02/Jan/2021",
        },
        {
          title: "Temperature above 37.3℃ need to report",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.markgroup_3,
          date: "02/Jan/2021",
        },
        {
          title: "Tomorrow Healthy Check",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.markgroup_4,
          date: "02/Jan/2021",
        },
        {
          title: "Air-conditioning is broken",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.markgroup_5,
          date: "02/Jan/2021",
        },
        {
          title: "Tomorrow Healthy Check",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.markgroup_4,
          date: "02/Jan/2021",
        },
        {
          title: "Air-conditioning is broken",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
          image: Image.markgroup_5,
          date: "02/Jan/2021",
        },
      ],
      countNews: 4,
      isViewMore: false
    };
  }

  handleShow = () => {
    return (
      (this.state.countNews === 4)
        ? this.setState({ countNews: this.state.listNews.length, isViewMore: true })
        : this.setState({ countNews: 4, isViewMore: false })
    )
  };

  render() {
    return (
      <React.Fragment>
        <div className="news">
          <h3 className="news_name">News</h3>
          <div className="news_list">
            {
              this.state.listNews.slice(0, this.state.countNews).map((item) => (
                <div className="news_items" key={item.id}>
                  <img className="news_img" src={item.image} alt={item.title} />
                  <div className="news_des">
                    <h2 className="news_des_title">{item.title}</h2>
                    <p className="news_description">{item.content}</p>

                      <div className="news_sub_time">
                        <img src={Image.date} alt="imageDate" />                   
                         <div className="news-date">
                          {item.date}
                        </div>
                        {/* <span>{item.date}</span> */}
                      </div>
                  </div>
                </div>
              ))
            }
          </div>


        </div>
        <ViewMode handleView={this.handleShow} isViewMore={this.state.isViewMore} />
      </React.Fragment>
    );
  }
}
