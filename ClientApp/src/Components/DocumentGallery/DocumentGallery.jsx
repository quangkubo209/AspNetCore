import React from "react";
import Image from "../../Base/Image";
import "./index.css"
import ViewMode  from "../ViewButton/viewMode";


var listItems = {
    Policy: [
        {
            img: Image.word,
            title: 'Policy 1'
        },
        {
            img: Image.word,
            title: 'Policy 2'
        },
        {
            img: Image.word,
            title: 'Policy 4'
        },
        {
            img: Image.word,
            title: 'Policy 6'
        },
        {
            img: Image.word,
            title: 'Policy 8'
        },
        {
            img: Image.word,
            title: 'Policy 9'
        },
    ],
    Template: [
        {
            img: Image.word,
            title: 'Template 1'
        },
        {
            img: Image.word,
            title: 'Template 2'
        },
        {
            img: Image.word,
            title: 'Template 3'
        },
    ],
    Slider: [
        {
            img: Image.powerpoint,
            title: 'Template 1'
        },
        {
            img: Image.powerpoint,
            title: 'Template 2'
        },
        {
            img: Image.powerpoint,
            title: 'Template 3'
        },
    ],
    SOP: [
        {
            img: Image.word,
            title: 'Demo Script'
        },
        {
            img: Image.word,
            title: 'App Introduction'
        },
        {
            img: Image.word,
            title: 'Index'
        },
        {
            img: Image.word,
            title: 'Training'
        },
        {
            img: Image.word,
            title: 'Training'
        },
        {
            img: Image.word,
            title: 'Training'
        },
    ],
    Report: [
        {
            img: Image.vsdx,
            title: 'Report 1'
        },
        {
            img: Image.vsdx,
            title: 'Report 2'
        },
        {
            img: Image.vsdx,
            title: 'Report 3'
        },
        {
            img: Image.vsdx,
            title: 'Report 4'
        },
        {
            img: Image.vsdx,
            title: 'Report 5'
        },
        {
            img: Image.vsdx,
            title: 'Report 6'
        },
    ]
}

export default class DocumentGallery1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ListData: listItems,
            countPolicy: 3, countSOP: 3,
            countReport: 3, countTemplate : 3, countSlider: 3,
            isViewMore1: false, isViewMore2: false, isViewMore3: false
        }
    }

    handleShowPolicy = () => {
        this.state.countPolicy === 3 ?
            this.setState({ countPolicy: this.state.ListData.Policy.length, isViewMore1: true }) :
            this.setState({ countPolicy: 3 , isViewMore1: false});
    }

    handleShowReport = () => {
        this.state.countReport === 3 ?
            this.setState({ countReport: this.state.ListData.Report.length, isViewMore3: true }) :
            this.setState({ countReport: 3, isViewMore3: false });
    }

    handleShowSOP = () => {
        this.state.countSOP === 3 ?
            this.setState({ countSOP: this.state.ListData.SOP.length, isViewMore2: true }) :
            this.setState({ countSOP: 3, isViewMore2: false });
    }

    render() {
        return (
            <React.Fragment>
                <div className="documentGallery">
                    <div className="documentGallery-col">
                        <div className="documentGallery-block">
                            <h3 className="documentGallery-block-header">Policy</h3>
                            <div className="documentGallery-block-content">
                                {
                                    this.state.ListData.Policy.map((item, index) => {
                                        if (index > this.state.countPolicy) { return (true) }
                                        return (
                                            <div className="documentGallery-item" key={index}>
                                                <img src={item.img} alt="" className="documentGallery-item-img" />
                                                <div className="documentGallery-item-title">{item.title}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <ViewMode handleView = {this.handleShowPolicy} isViewMore = {this.state.isViewMore1} />
                        </div>


                        <div className="documentGallery-block">
                            <h3 className="documentGallery-block-header">CorporateTemplate</h3>
                            <div className="documentGallery-block-content">
                                {
                                    this.state.ListData.Template.map((item, index) => {
                                        if (index > this.state.countTemplate) { return (true) }
                                        return (
                                            <div className="documentGallery-item" key={index}>
                                                <img src={item.img} alt="" className="documentGallery-item-img" />
                                                <div className="documentGallery-item-title">{item.title}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="documentGallery-block">
                            <h3 className="documentGallery-block-header">Slider</h3>
                            <div className="documentGallery-block-content">
                                {
                                    this.state.ListData.Slider.map((item, index) => {
                                        if (index > this.state.countSlider) { return (true) }
                                        return (
                                            <div className="documentGallery-item" key={index}>
                                                <img src={item.img} alt="" className="documentGallery-item-img" />
                                                <div className="documentGallery-item-title">{item.title}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="documentGallery-col">
                        <div className="documentGallery-block">
                            <h3 className="documentGallery-block-header">SOP</h3>
                            <div className="documentGallery-block-content">
                                {
                                    this.state.ListData.SOP.map((item, index) => {
                                        if (index > this.state.countSOP) { return (true) }
                                        return (
                                            <div className="documentGallery-item" key={index}>
                                                <img src={item.img} alt="" className="documentGallery-item-img" />
                                                <div className="documentGallery-item-title">{item.title}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <ViewMode handleView = {this.handleShowSOP} isViewMore = {this.state.isViewMore2} />
                    </div>
                </div>
                <div className="documentGallery-block">
                    <h3 className="documentGallery-block-header">Report</h3>
                    <div className="documentGallery-block-content">
                        {
                            this.state.ListData.Report.map((item, index) => {
                                if (index > this.state.countReport) { return (true) }
                                return (
                                    <div className="documentGallery-item" key={index}>
                                        <img src={item.img} alt="" className="documentGallery-item-img" />
                                        <div className="documentGallery-item-title">{item.title}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <ViewMode handleView = {this.handleShowReport} isViewMore = {this.state.isViewMore3} />
            </React.Fragment >
        )
    }
}