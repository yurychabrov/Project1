import './app-info.css'

const AppInfo = ({countEmploye, countPrem}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании "Forst M"</h1>
            <h2>Общее число сотрудников: {countEmploye}</h2>
            <h3>Премию получат: {countPrem}</h3>
        </div>
        
    )
}

export default AppInfo