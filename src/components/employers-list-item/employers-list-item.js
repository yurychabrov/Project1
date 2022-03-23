import './employers-list-item.css'

const EmployersListItem = props => {
    
            const {name, salary, onDelete, onIncrease, onRise, increase, rise, editSalary, id} = props
   
            let incr = (increase === true) ? 'increase' : ''
            let lik = (rise === true) ? ' like' : ''
            return (
                <li className={"list-group-item d-flex justify-content-between " + incr + lik}>
                    <span className="list-group-item-label"
                          onClick={onRise}
                    >{name}</span>
                    <input type="text" 
                           className="list-group-item-input" 
                           defaultValue={"$" + salary}
                           onChange={ (e) => editSalary(id, e.target.value) }
                    />
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="button"
                                className="btn-cookie btn-sm "
                                onClick={onIncrease}
                        >
                            <i className="fas fa-cookie"></i>
                        </button>
        
                        <button type="button"
                                className="btn-trash btn-sm "
                                onClick={onDelete}
                        >
                            <i className="fas fa-trash"></i>
                                
                        </button>
                        <i className="fas fa-star"></i>
                    </div>
                </li>
            )
     

    
}

export default EmployersListItem