import { Component } from 'react'
import './app-filter.css'

class AppFilter extends Component {
    
    render() {
        
        const buttons = [
            {nameFilter: 'all', txtButton: 'Все сотрудники'},
            {nameFilter: 'increase', txtButton: 'На повышение'},
            {nameFilter: 'zp', txtButton: 'з/п больше $1000'},
        ]

        const elements = buttons.map( item => {
               const active = item.nameFilter === this.props.filter  
               const clazz = (active) ? 'btn-light' : 'btn-outline-light'
               return <button   
                                className={`btn ${clazz}`}
                                onClick={ () => this.props.setFilter(item.nameFilter) }
                                type="button"
                                key={item.nameFilter}
                      >
                                {item.txtButton}
                      </button>
        } )

        return (
            <div className="btn-group">
                {elements}
            </div>
        )
    }
}

export default AppFilter