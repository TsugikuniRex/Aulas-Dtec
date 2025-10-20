import './App.css'
import { Banner } from "./assets/componentes/Banner";
import { CardEvento } from "./assets/componentes/CardEvento";
import { FormularioDeEventos } from './assets/componentes/FormularioDeEvento';
import { Tema } from "./assets/componentes/Tema";
import { useState } from 'react';

function App() {

  const temas = [
    {
      id: 1,
      nome: 'front-end'
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
  const [eventos, setEventos] = useState( [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ])

  function adicionarEvento(evento) {
    setEventos([...eventos, evento])
    // eventos.push(evento)
    // console.log('eventos =>', eventos)
  }
  return (
    <main>
      <header>
        <img src="/logo.png" alt="Tecboard" />
      </header>
      <Banner />
      <FormularioDeEventos temas={temas} aoSubmeter={adicionarEvento} />

      {temas.map(function (item) {
        return (
          <section key={item.id} >
            <Tema tema={item} />
            
            {eventos.map(function (item, index) {
              return(
            <CardEvento evento={item} key={index} />
            )
          })}
          </section>
        )
      })}


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