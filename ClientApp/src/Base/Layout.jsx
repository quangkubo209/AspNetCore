import React from "react";
import "./layout.css";
import Navigation from "../Components/Navigation/Navigation";
import Announcement from "../Components/Announcement/Announcement";
import News from "../Components/News/News";
import ImageGallery from "../Components/ImageGallery/ImageGallery";
import VideoGallery from "../Components/VideoGallery/VideoGallery";
import DocumentGallery from "../Components/DocumentGallery/DocumentGallery";
import QuickLinks from "../Components/QuickLinks/QuickLinks";
import Events from "../Components/Events/Events";
import HowDoI from "../Components/HowDoI/HowDoI";


export default class Layout extends React.Component {
  render() {
    return (
      <div className="portal-homepage">
        <div className="wrap">
          <div className="header">
            <Navigation></Navigation>
          </div>
          <div className="content">
            {/* define flex left */}
            <div className="flex-left">
              <div id="announcement">
                <Announcement></Announcement>
              </div>
              <div id="news">
                <News></News>
              </div>
              <div id="image-gallery">
                <ImageGallery></ImageGallery>
              </div>
              <div id="video-gallery">
                <VideoGallery></VideoGallery>
              </div>
              <div id="document-gallery">
                <DocumentGallery></DocumentGallery>
              </div>
            </div>
            {/* define flex right */}
            <div className="flex-right">
            <div id="quick-links">
              <QuickLinks></QuickLinks>
            </div>
            <div id="events">
              <Events></Events>
            </div>
            <div id="how-do-i">
              <HowDoI></HowDoI>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
