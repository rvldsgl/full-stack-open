import Header from "./Header";

import Content from "./Content";

const Course = ({course}) =>{
  console.log(course)
  return <div>
    <Header head={course[0].name}/>
    <Content parts={course[0].parts}/>
    <Header head={course[1].name}/>
    <Content parts={course[1].parts}/>
    
  </div>
  
}

export default Course