import FormEsperienze from "./FormEsperienze";
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function Esperienze ({show, onClick, cvPersona, gestisciAggiornamentiCv}) {
    const [isAperto, setAperto] = useState(false);
    const [lavoroCliccato, setLavoroCliccato] = useState(null);

    const onClickEsperienze = (index) => {
        setLavoroCliccato(index);
        setAperto(!isAperto);
    };

    let esperienzeLavorative = cvPersona.esperienze;

    function aggiungiEsperienza () {
      esperienzeLavorative.push({
        id:uuidv4(),
        azienda: '',
        posizione: '',
        dataInizio : '',
        dataFine: '',
        città: '',
        descrizione: ''
    });
      const aggiornamentoCV = {...cvPersona, esperienze: esperienzeLavorative};
      gestisciAggiornamentiCv(aggiornamentoCV);
    }

    if (show) {

        return (
            <div>
              {isAperto ? (
                <div className="infoForm">
                  <h2>
                    Esperienze <button  className={`openBtn ${show ? 'active' : ''}`} onClick={onClick}></button>
                  </h2>
                  <FormEsperienze cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCv} indiceLavoro={lavoroCliccato} onClickEsperienze={onClickEsperienze} idLavoro={esperienzeLavorative[lavoroCliccato].id} />
                </div>
              ) : (
                <div className="education">
                  <h2>
                    Esperienze <button  className={`openBtn ${show ? 'active' : ''}`} onClick={onClick}></button>
                  </h2>
                  <div className="elencoTitoli">
                    {esperienzeLavorative.map((lavoro,index) => (
                      <div className="corso" key={lavoro.id} onClick={() => onClickEsperienze(index)}>
                        <h2>{lavoro.azienda}</h2>
                        <h3>{lavoro.posizione}</h3>
                      </div>
                    ))}
                    <button className="addBtn" onClick={aggiungiEsperienza}>+ Esperienze</button>
                  </div>
                </div>
              )}
            </div>
          );

    } else {
        return <h2 className="headerInfo">Esperienze <button  className="openBtn" onClick={onClick}></button> </h2>
    }

}