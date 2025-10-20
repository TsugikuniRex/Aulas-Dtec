import './FormularioDeEvento.css'
import { Botao } from '../Botão';
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormularios } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from '../ListaSuspensa';
import { TituloFormulario } from "../TituloFormulario";


export function FormularioDeEventos({ temas, aoSubmeter }) {

    function aoFormSubmetido (FormData){
        console.log('Está na hora de criar evento', FormData)
        const evento = {
            capa: FormData.get('capa'),
            tema: temas.find(function(item){
                return item.id == FormData.get('tema')
            }),
            data: new Date(FormData.get('dataEvento')),
            titulo: FormData.get('nomeEvento')
        }
        aoSubmeter(evento)
    }
    return (
        <form className='form-evento' action={aoFormSubmetido}>
            <TituloFormulario >Preencha para criar um evento:
            </TituloFormulario>


            <div className='campos'>
                <CampoDeFormularios>
                    <Label htmlFor="nomeEvento">Qual é o nome do evento</Label>
                    <CampoDeEntrada type='texto' id='nomeEvento' name="nomeEvento" placeholder='Sumer dev hits' />
                </CampoDeFormularios>

                <CampoDeFormularios>
                    <Label htmlFor="capa">Qual é o endereço da imagem de capa</Label>
                    <CampoDeEntrada type='texto' id='capa' name="capa"
                    placeholder='http://...'  />
                </CampoDeFormularios>

                <CampoDeFormularios>
                    <Label htmlFor="dataEvento">Qual é a data do evento</Label>
                    <CampoDeEntrada type='date' id='dataEvento' name="dataEvento"
                        placeholder='dateEvento' />
                </CampoDeFormularios>

                <CampoDeFormularios>
                    <Label htmlFor="tema">Em que região é o evento</Label>
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
