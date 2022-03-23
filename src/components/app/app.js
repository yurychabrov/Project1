import { Component } from 'react'

import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {id: "1", name: "Иванов С.А.", salary: 2000, increase: false, rise: true},
                {id: "2", name: "Петрова Ю.К.", salary: 800, increase: true, rise: false},
                {id: "3", name: "Кошкин Е.А.", salary: 2100, increase: false, rise: false}
            ],
            term: '',
            filter: 'all',
        }
    }

    deleteItem = id => {
        this.setState( ({data}) => {
            return {
                data: data.filter( elem => elem.id !== id )
            }
        } )
    }

    addedItem = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const salary = e.target.salary.value
        if (!name || !salary) return

        this.setState( ({data}) => {
            const id = +data[data.length-1].id + 1
            const newItem = {
                id: String(id), 
                name: name, 
                salary: String(salary), 
                increase: false
            }
            return {
                data: [...data, newItem]
            }

        } )

    }

    onIncrease = id => {
        this.setState( ({data}) => ({
            data: data.map( item => {
                if (item.id === id) 
                    return {...item, increase: !item.increase}
                return item
            } )
        }) )
    }

    onRise = id => {
        this.setState( ({data}) => ({
            data: data.map(item => {
                if (item.id === id)
                    return {...item, rise: !item.rise}
                return item
            })
        }) )
    }

    onUpdateTerm = term => {
        this.setState({
            term
        })
    }

    onSearch = (items, term) => {
       if (term.length === 0) 
            return items  

        return items.filter( item => {
            return item.name.indexOf(term) !== -1
        } )
    }

    
    filterData = (items, filter) => {
        switch (filter) {
            case 'increase':
                    return items.filter( item => item.increase )

            case 'zp':
                return items.filter( item => +item.salary > 1000 )
            
            default:
                return items
        }
    }

    setFilter = (filt) => {
        this.setState( ({filter}) => {
            return {
                filter: filt
            }
        } )
    }

    editSalary = (id, salary) => {
        const arr = [...this.state.data].map( item => {
            if (item.id === id)
                item.salary = salary.replace(/\D/, '')
            return item
        } )
        this.setState({ data: arr })
    }

    render() {
        const {data, term, filter} = this.state
        const cntAll = data.length
        const cntPrem = data.filter( item => item.increase ).length

        const dataSearch = this.filterData(this.onSearch(data, term), filter)   

        return (
            <div className='app'>
                <AppInfo countEmploye={cntAll} countPrem={cntPrem} />
    
                <div className="search-panel">
                <SearchPanel onUpdateTerm={this.onUpdateTerm} />
                <AppFilter filter={filter} setFilter={this.setFilter}/>
                </div>
                <EmployersList data={dataSearch} 
                               onDelete={ this.deleteItem  } 
                               onIncrease={this.onIncrease}
                               onRise={this.onRise}
                               editSalary={this.editSalary}
                />

                <EmployersAddForm onAdded={this.addedItem} />
            </div>
        )
    }
    
} 

