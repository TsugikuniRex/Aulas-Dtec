import './cardevento.css';

export function CardEvento({evento}){
    return(
        <div className='card-evento'>
            <img src={evento.capa} alt={evento.titulo} />
            
            <div className='corpo'>
                <p className='tag'>
                    {evento.tema.nome}
                </p>
                <p>
                    {evento.data.toLocaleDateString("pt-BR")}
                </p>
                <h4 className='titulo'>
                    {evento.titulo}
                </h4>
            </div>
        </div>
    )
}