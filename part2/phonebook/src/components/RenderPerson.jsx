const RenderPerson = ({names, deleteImportance}) =>{
  return (<div>
      <ul>
        {names.map(name => <li>{
        name.name} {name.number}
        <button onClick ={() => deleteImportance(name.id)}>delete</button>
        
        </li>)}
        
      </ul>
    </div>)
}

export default RenderPerson