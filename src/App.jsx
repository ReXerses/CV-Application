import { useState } from 'react'
import { persona } from './dati'
import './App.css'
import DettagliPersona from './DettagliPersona'
import Education from './Education'
import Esperienze from './Esperienze'

function App() {
  const [mostraDettagliEd, setMostraDettagliEd] = useState(false);
  const [mostraDettagliLav, setMostraDettagliLav] = useState(false);
  const [cvPersona, setCvPersona] = useState(persona);

  function gestisciAggiornamentiCvPersona (aggiornamentoCV) {
    setCvPersona(aggiornamentoCV);
  }
  const onClickEd= () => setMostraDettagliEd(!mostraDettagliEd);
  const onClickLav= () => setMostraDettagliLav(!mostraDettagliLav);

  return (
    <>
      <div className='parteSinistra'>
        <div className='buttonTop'>
          <button id='darkMode'>DarkMode</button>
          <button id='preview'>Preview</button>
          <button id='pdf'>Save pdf</button>
        </div>
        <DettagliPersona cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCvPersona}/>
        <Education cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCvPersona}  show={mostraDettagliEd} onClick={onClickEd}/>
        <Esperienze cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCvPersona}  show={mostraDettagliLav} onClick={onClickLav}/>
      </div>

      <div className='parteDestra'>
        <div className='cv-container'>
          
        </div>
      </div>
    </>
  )
}

export default App
