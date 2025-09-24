const Filter = (props) =>{
  
  return(  
    <div>
        filterShown: <input value={props.filteredName} onChange={props.onChange} />
    </div>)
}

export default Filter