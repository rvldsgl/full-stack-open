import Part from "./Part"

const Content = ({parts}) => {
  const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0)
  console.log(parts)
  return(
  <div>
   <ul>
        {parts.map(part => 
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        )}
    </ul>
    <p>total of <b>{totalExercises}</b> exercises</p>

    </div>
  )
}

export default Content