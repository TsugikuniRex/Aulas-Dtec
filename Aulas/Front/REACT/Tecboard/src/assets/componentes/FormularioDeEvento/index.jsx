import './FormularioDeEvento.css'
import { Botao } from '../Botão';
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormularios } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from '../ListaSuspensa';
import { TituloFormulario } from "../TituloFormulario";


export function FormularioDeEventos({ temas, aoSubmeter }) {
    return (
        <form className='form-evento'>
            <TituloFormulario >Preencha para criar um evento:
            </TituloFormulario>


            <div className='campos'>
                <CampoDeFormularios>
                    <Label htmlFor="nome">Qual é o nome do evento</Label>
                    <CampoDeEntrada type='texto' id='nome' placeholder='Sumer dev hits' />
                </CampoDeFormularios>

                <CampoDeFormularios>
                    <Label htmlFor="capa">Qual é o endereço da imagem de capa</Label>
                    <CampoDeEntrada type='texto' id='capa' placeholder='http://...' name="capa" />
                </CampoDeFormularios>

                <CampoDeFormularios>
                    <Label htmlFor="dataEvento">Qual é a data do evento</Label>
                    <CampoDeEntrada type='date' id='nome'
                        placeholder='dateEvento' />
                </CampoDeFormularios>

                <CampoDeFormularios>
                    <Label htmlFor="tipoEvento">Em que região é o evento</Label>
                    <ListaSuspensa id='tema' name='tema' itens={temas} />
                </CampoDeFormularios>

            </div>
            <div className='acoes'>
                <Botao>
                    Criar evento
                </Botao>
            </div>

        </form>
    )
}
