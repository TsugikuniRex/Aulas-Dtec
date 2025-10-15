
import './App.css'
import { Banner } from "./assets/componentes/Banner";
import { CardEvento } from "./assets/componentes/CardEvento";
import { FormularioDeEventos } from './assets/componentes/FormularioDeEvento'
import { Tema } from "./assets/componentes/Tema";

function App() {

  const temas = [
    {
      id: 1,
      nome: 'font-end' 
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligencia artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }
  ]
  const eventos = [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ]
  return (
    <main>

      <Banner />
      <FormularioDeEventos />

      {temas.map(function (item){
        return(
          <section key={item.id} >
            <Tema tema={item} />
            <CardEvento evento = {eventos[0]}/>
          </section>
          )
      }
      )}


      {/* <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section >
      <section>
        <Tema tema={temas[3]} />
      </section >
      <section>
        <Tema tema={temas[4]} />
      </section >
      <section>
        <Tema tema={temas[5]} />
      </section > */}
    </main >
  )
}

export default App