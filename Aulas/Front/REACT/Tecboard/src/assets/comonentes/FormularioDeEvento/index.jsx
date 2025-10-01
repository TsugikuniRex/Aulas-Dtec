import '../FormularioDeEvento/FormularioDeEvento.css'
import { CampoDeFormularios } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeEntrada } from "../CampoDeEntrada";

export function FormularioDeEventos() {
    return (
        <form className='form-evento'>
            <TituloFormulario >Preencha para criar um evento:
            </TituloFormulario>
            <CampoDeFormularios>
                <Label htmlFor="nome">Qual é o nome do
                    evento</Label>
                <CampoDeEntrada type='texto' id='nome'
                    placeholder='Sumer dev hits' />
            </CampoDeFormularios>
        </form>
    )
}
