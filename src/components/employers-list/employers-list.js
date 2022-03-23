import { Component } from 'react'
import './employers-list.css'
import EmployersListItem from '../employers-list-item/employers-list-item'

class EmployersList extends Component {

    render() {
        const {data, onDelete, onIncrease, onRise, editSalary} = this.props
        const elements = data.map( item => {
            const {id, ...itemProps} = item
    
                return (
                    <EmployersListItem key={id} {...itemProps} 
                                       onDelete={ ()=> onDelete(id) }
                                       onIncrease={ ()=> onIncrease(id) }
                                       onRise={()=> onRise(id)}
                                       editSalary={ editSalary  }
                                       id={id}
        
                    />
                )
        } )
     
        return (
            <ul className="app-list list-group">
               {elements}
                
            </ul>
        )
    }
    
}

export default EmployersList