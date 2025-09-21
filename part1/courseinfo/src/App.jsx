const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

const Total = (props) => <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part1={part[0]} part2={part[1]} part3={part[2]}/>
      <Total exercises1={part[0].exercises} exercises2={part[1].exercises} exercises3={part[2].exercises} />
    </div>
  )
}

export default App
