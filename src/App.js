import React,{Component} from "react";
import "./assests/style.css";
import Questions from './containers/Questions';

class App extends Component{
    render(){
        return(
            <div className="bg">
            <div className="container">
                <div className="title">Quiz</div>
                <Questions/>
            </div>
            </div>
        );
    }
}
export default App; 