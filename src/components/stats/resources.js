import '../../styles/ComponentStyles/resourcesStyles.css'

export default function ResourceStats({render}){
    let type = render.type;

    return(
        <>
            <div class={`resource-stats-container ${render.class}`}>
                <h4 class="resource-helper-stat-type">{type.helper.name}</h4>
                <h6 class="resource-helper-stat-amount">{type.helper.amount}</h6>
                <hr/>
                <h4 class="resource-stat-type">{type.currency.name}</h4>
                <h6 class="resource-stat-currency-amount">{type.currency.amount}</h6>
            </div>
        </>
    )
}