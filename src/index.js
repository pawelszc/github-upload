import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) =>{
  return(
    <h1>{props.coursename}</h1>
  )
}

const Total = (props) =>{
return (
<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
    }
const Part = (props) => {
  
  return (
<p>Name of the part:  {props.part}. //////  Number of exercises:  {props.number} </p>
  )}

  const Content = () => {
   
    return(
        <div> <Part part = {part1} /> 
              <Part part = {part2} />
              <Part part = {part3} />
        
        </div>
    )
  }
  function App() {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
      
      <div>
        <Header coursename={course} />
        <Content part = {part1}/>
        <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      </div>
    );
  }
ReactDOM.render(<App />, document.getElementById('root'))

