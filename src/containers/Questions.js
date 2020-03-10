import React,{Component} from 'react';
import '../assests/style.css';
import data from '../data'
import QuestionBox from '../components/QuestionBox';
import Result from '../components/result';

class Questions extends Component{
    state={
        questionBank:[],
        score:0,
        response:0
    };
    getQuestions=()=>{
        data().then(question=>{
            this.setState({
                questionBank:question
            });
        });
    };
    computeAnswer=(answer,correctAnswer)=>{
        if(answer===correctAnswer){
            this.setState({
                score:this.state.score+1
            });
        }
        this.setState({
            response:this.state.response+1
        })
    }
    playAgain=()=>{
        this.getQuestions();
        this.setState({
            score:0,
            response:0
        })
    }
    componentDidMount(){
        this.getQuestions();
    }
    render(){
        return (
            <div className="questionBox">
                {this.state.questionBank.length>0 &&
                this.state.response<5 &&
                 this.state.questionBank.map(
                     ({question,answers,correct,questionId})=>
                     <QuestionBox question={question}
                        options={answers}
                        key={questionId}
                        selectedOption={answer=>this.computeAnswer(answer,correct)}
                        />
                     )}
                    {this.state.response===5?(
                        <Result score={this.state.score}
                        playAgain={this.playAgain}
                        />
                    ):null}
            </div>
        );
    }
}
export default Questions;