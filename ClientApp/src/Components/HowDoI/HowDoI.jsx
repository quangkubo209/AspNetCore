import React from "react";
import Image from "../../Base/Image";
import "./index.css";
import ViewMode  from "../ViewButton/viewMode";
export default class HowDoI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listIdea: [
        {
          id: 1,
          question: "Which is faster between JavaScript and an ASP script?",
          answer:
            "JavaScript is faster. JavaScript is a client-side language, and thus it does not need the assistance of the webserver to execute. On the other hand, ASP is a server-side language and hence is always slower than JavaScript. Javascript now is also a server-side language node js",
            isExpanded : false,
        },
        {
          id: 2,
          question: "What are undeclared and undefined variables?",
          answer:
            "Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.",
            isExpanded : false,
        },        {
          id: 3,
          question: "What are global variables? How are these variable declared?",
          answer:
           "Global variables are available throughout the length of the code so that it has no scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared.",
            isExpanded : false,
        },        {
          id: 4,
          question: "What is \'this\' keyword in JavaScript?",
          answer:
           "\'This\' keyword refers to the object from where it was called.",
            isExpanded : false,
        },        {
          id: 5,
          question: "Does JavaScript support automatic type conversion?",
          answer:
            "Yes, JavaScript does support automatic type conversion. It is the common way of type conversion used by JavaScript developers",         
            isExpanded : false,
        },        {
          id: 6,
          question: "What do you mean by NULL in Javascript?",
          answer:
            "The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object",
            isExpanded : false,
        },        {
          id: 7,
          question: "What is the data type of variables in JavaScript?",
          answer:
            "All variables in JavaScript are object data types.",
            isExpanded : false,
        },

      ],
      CountShow : 4,
      searchInfo : '',
      //refresh: 1,
      isExpandOnly: true,
      isViewMore: false
    }
    // = this.handleShow.bind(this);
    //this.inputSearch = this.inputSearch.bind(this);
  }
  
handleShow = () => {
  return ((this.state.CountShow === 4) ? 
  this.setState({CountShow: this.state.listIdea.length, isViewMore: true}) : this.setState({CountShow: 4, isViewMore: false}));
}

  //function to type search : get value from input.
  inputSearch = (e) => {
    var searchString = e.target.value;
    this.setState({searchInfo : searchString.trim().toLowerCase()})
  }

  itemExpanded = (id) => {
    this.state.listIdea.forEach((item, indx, array) => {
      if(array[indx].id === id)
      {
        array[indx].isExpanded = !(array[indx].isExpanded);
        this.setState({isExpandOnly : true})
      }
      else
       array[indx].isExpanded = false;
      
    })
  }
  


  render() {
    return (
      <React.Fragment>
      <h1>How Do I</h1>
      <div className="searchbar">
            <input type="text" placeholder="Type a question ..." onChange={this.inputSearch} />
            <img src={Image.search} alt="img" />
          </div>
      <div className="howdoi-items">
        {
            this.state.listIdea.filter(listIdea => listIdea.question.toLowerCase().includes(this.state.searchInfo)).slice(0, this.state.CountShow).map((Item,Index) =>{
            return (
              <div key={Index} className="howdoi-content">
                <div className={
                  (Item.isExpanded === true) ? "howdoi-quiz background-expanded" : "howdoi-quiz"
              }
                 onClick={() => this.itemExpanded(Item.id)}>
                  <img className={
                  (Item.isExpanded === true) ? "img-expanded" : ""
                  } src={Image.collapse} alt="img" />
                  <p>{Item.question}</p>
                </div>
                <div className={"howdoi-answer"}>
                  {Item.isExpanded === true ?
                  <p><span>[Answer]</span>{Item.answer}</p>
                   : console.log(Item.id)}
                </div>
              </div>
            )
          })
        }
      </div>
        {this.state.searchInfo === "" ?
        <ViewMode handleView = {this.handleShow} isViewMore = {this.state.isViewMore} />
          : console.log(1)
  }
    


    </React.Fragment>
    )
  }
}
