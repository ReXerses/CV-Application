import { useState } from 'react'
import { persona } from './dati'
import './App.css'
import DettagliPersona from './DettagliPersona'
import Education from './Education'
import Esperienze from './Esperienze'
import Customize from './Customize'
import PreviewCv from '../PreviewCv'
import generatePDF, { Resolution, Margin} from "react-to-pdf";

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


  const options = {
    // default is `save`
    method: 'open',
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.MEDIUM,
    page: {
       // margin is in MM, default is Margin.NONE = 0
       margin: Margin.NONE,
       // default is 'A4'
       format: 'letter',
       // default is 'portrait'
       orientation: 'portrait',
    },
    canvas: {
       // default is 'image/jpeg' for better size performance
       mimeType: 'image/png',
       qualityRatio: 1
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break, 
    // so use with caution.
    overrides: {
       // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
       pdf: {
          compress: true
       },
       // see https://html2canvas.hertzen.com/configuration for more options
       canvas: {
          useCORS: false
       }
    },
 };

  const openPDF = () => {
    (stileCv === 1) ? generatePDF(() => document.getElementById("left"), options) : generatePDF(() => document.getElementById("top"), options);
  };

  return (
    <>
      <div className='parteSinistra'>
        <div className='buttonTop'>
          <button id='resetCv' className='bottoneTop' onClick={onClickCancellaCv}>
            <img className='iconeTop' src="/reset.svg" alt="reset CV"/>
            CV Reset
          </button>
          <button id='esempioCv' className='bottoneTop' onClick={onClickCaricaEsempio}>
            <img className='iconeTop' src="/load.svg" alt="load CV example"/>
            Carica Esempio
          </button>
          <button id='preview'  className='bottoneTop' onClick={onClickPrev}>
            <img className='iconeTop' src="/eye.svg" alt="preview on/off"/>
            Preview
          </button>
            <button  disabled={!mostraPreview} id='pdf' className='bottoneTop' onClick={openPDF}>
              <img className='iconeTop' src="/save.svg" alt="save pdf"/>
              PDF
            </button>
        </div>
        <Customize show={mostraDettagliCust} onClick={onClickCust} gestisciStileCv={gestisciStileCv} />
        <DettagliPersona cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCvPersona}/>
        <Education cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCvPersona}  show={mostraDettagliEd} onClick={onClickEd}/>
        <Esperienze cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCvPersona}  show={mostraDettagliLav} onClick={onClickLav}/>
      </div>

      {mostraPreview && (
        <div className='parteDestra'>
          <div className='cv-container'>
            <PreviewCv  cvPersona={cvPersona} stileCv={stileCv} />
          </div>
        </div>
      )}
    </>
  )
}

export default App
