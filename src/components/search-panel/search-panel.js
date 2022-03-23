import { Component } from 'react'
import './search-panel.css'

// 
class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateTerm = (e) => { 
        const mess = e.target.value
        this.props.onUpdateTerm(mess)

    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
                   onChange={ this.onUpdateTerm  }
            />
        )
    }
    
}

export default SearchPanel