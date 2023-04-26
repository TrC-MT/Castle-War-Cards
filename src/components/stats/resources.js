import '../../styles/ComponentStyles/resourcesStyles.css'

export default function ResourceStats({render}){
    let type = render.type;

    return(
        <>
            <div className={`resource-stats-container ${render.class}`}>
                <h4 className="resource-helper-stat-type">{type.helper.name}</h4>
                <h6 className="resource-helper-stat-amount">{type.helper.amount}</h6>
                <hr/>
                <h4 className="resource-stat-type">{type.currency.name}</h4>
                <h6 className="resource-stat-currency-amount">{type.currency.amount}</h6>
            </div>
        </>
    )
}