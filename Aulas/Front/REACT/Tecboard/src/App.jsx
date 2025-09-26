
import './App.css'

function CampoDeEntrada(props){
  return <input {...props}/>
}

function Label({children, htmlFor}){
  return(
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

function CampoDeFormularios({children}){
  return(
    <fieldset>
      {children}
    </fieldset>
  )
}

function TituloFormulario(props) {
  return(
    <h2> {props.children}</h2>
  )
}

function FormularioDeEventos() {
  return (
    <form className='form-evento'>
      <TituloFormulario>Preencha para criar um evento:
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
