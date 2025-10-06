import './Botao.css'

export function Botao({ children }){
    return (
        <button className='Botao'>
            {children}
        </button>
    )
}