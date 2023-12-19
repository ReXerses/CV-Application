import { useState } from 'react'
import { persona } from './dati'
import './App.css'
import DettagliPersona from './DettagliPersona'
import Education from './Education'
import Esperienze from './Esperienze'
import Customize from './Customize'
import PreviewCv from '../PreviewCv'

function App() {
  const [mostraDettagliEd, setMostraDettagliEd] = useState(false);
  const [mostraDettagliLav, setMostraDettagliLav] = useState(false);
  const [mostraDettagliCust, setMostraDettagliCust] = useState(false);
  const [mostraPreview, setMostraPreview] = useState(true);
  const [cvPersona, setCvPersona] = useState(persona);

  const CV_VUOTO = {
    fullName: '',
    email: '',
    numero : '',
    indirizzo: '',
    foto: ``,
    education: [],
    esperienze: []
}

  const [stileCv, setStileCv] = useState(1); //1 left e 2 top

  function gestisciStileCv (id) {
    setStileCv(id);
  }

  function gestisciAggiornamentiCvPersona (aggiornamentoCV) {
    setCvPersona(aggiornamentoCV);
  }
  const onClickEd= () => setMostraDettagliEd(!mostraDettagliEd);
  const onClickLav= () => setMostraDettagliLav(!mostraDettagliLav);
  const onClickCust= () => setMostraDettagliCust(!mostraDettagliCust);
  const onClickPrev= () => setMostraPreview(!mostraPreview);
  const onClickCaricaEsempio= () => setCvPersona(persona);
  const onClickCancellaCv= () => setCvPersona(CV_VUOTO);

  return (
    <>
      <div className='parteSinistra'>
        <div className='buttonTop'>
          <button id='resetCv' onClick={onClickCancellaCv}>CV Reset</button>
          <button id='esempioCv' onClick={onClickCaricaEsempio}>Carica Esempio</button>
          <button id='preview' onClick={onClickPrev}>Preview</button>
          <button id='pdf'>Save pdf</button>
        </div>
        <Customize show={mostraDettagliCust} onClick={onClickCust} gestisciStileCv={gestisciStileCv} />
        <DettagliPersona cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCvPersona}/>
        <Education cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCvPersona}  show={mostraDettagliEd} onClick={onClickEd}/>
        <Esperienze cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCvPersona}  show={mostraDettagliLav} onClick={onClickLav}/>
      </div>

      {mostraPreview ? (
        <div className='parteDestra'>
          <div className='cv-container'>
            <PreviewCv cvPersona={cvPersona} stileCv={stileCv}  />
            
          </div>
        </div>
      ) : (
        null
      )}
    </>
  )
}

export default App
