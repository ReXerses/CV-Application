import { useState } from 'react'
import { persona } from './dati'
import './App.css'
import DettagliPersona from './DettagliPersona'
import Education from './Education'

function App() {
  const [mostraDettagli, setMostraDettagli] = useState(false)
  const [cvPersona, setCvPersona] = useState(persona);

  function gestisciAggiornamentiCvPersona (aggiornamentoCV) {
    setCvPersona(aggiornamentoCV);
  }
  const onClick= () => setMostraDettagli(!mostraDettagli);

  return (
    <>
      <div className='parteSinistra'>
        <DettagliPersona cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCvPersona}/>
        <Education cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCvPersona}  show={mostraDettagli} onClick={onClick}/>
      </div>

      <div className='parteDestra'>
        
      </div>
    </>
  )
}

export default App
