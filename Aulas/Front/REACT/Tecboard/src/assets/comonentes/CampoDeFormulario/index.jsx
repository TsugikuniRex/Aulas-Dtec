import './campo-formulario.css'

export function CampoDeFormularios({ children }) {
    return (
        <fieldset className="campo-form">
            {children}
        </fieldset>
    )
}
