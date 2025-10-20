import './ListaSuspensa.css'

export function ListaSuspensa({itens, ...rest}) {
    return (
        <select {...rest}defaultValue="" 
        className="lista-suspensa-form" >
            <option disabled value="">Selecione uma Opção</option>
            
            {itens.map(function (item) {
                return (
                    <option key={item.id} value={item.id}>
                        {item.nome}
                    </option>
                )
            }
            )}
        </select>
    )
}