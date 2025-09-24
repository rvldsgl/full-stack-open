const RenderPerson = ({names}) =>{
  return (<div>
      <ul>
        {names.map(name => <li>{name.name} {name.number}</li>)}
      </ul>
    </div>)
}

export default RenderPerson