
import './App.css'
import { FormularioDeEvento } from "./assets/componentes/FormularioDeEvento";


function App() {

  return (
    <main>
      <header className=''>
        <img src="/logo.png" alt="Tecboard" />
      </header>
      <section>
        <img src="/banner.png" alt="Banner principal" />
      </section>
      <FormularioDeEventos></FormularioDeEventos>
    </main>
  )
}

export default App
