
import './App.css'
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

  return (
    <main>
      <header className=''>
        <img src="/logo.png" alt="Tecboard" />
      </header>
      <section>
        <img src="/banner.png" alt="Banner principal" />
      </section>
      <FormularioDeEventos />

      <section>
        <Tema tema={temas[0]} />
      </section>
      <section>
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
      </section >
    </main >
  )
}

export default App