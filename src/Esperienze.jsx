import FormEsperienze from "./FormEsperienze";
import { useState } from 'react'

export default function Esperienze ({show, onClick, cvPersona, gestisciAggiornamentiCv}) {
    const [isAperto, setAperto] = useState(false);
    const [lavoroCliccato, setLavoroCliccato] = useState(null);

    const onClickEsperienze = (idLavoro) => {
        setLavoroCliccato(idLavoro);
        setAperto(!isAperto);
    };

    let esperienzeLavorative = cvPersona.esperienze;


    if (show) {

        return (
            <div>
              {isAperto ? (
                <div className="infoForm">
                  <h2>
                    Esperienze <button onClick={onClick}>Apri/Chiudi</button>
                  </h2>
                  <FormEsperienze cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCv} idLavoro={lavoroCliccato}/>
                </div>
              ) : (
                <div className="education">
                  <h2>
                    Esperienze <button onClick={onClick}>Apri/Chiudi</button>
                  </h2>
                  <div className="elencoTitoli">
                    {esperienzeLavorative.map((lavoro,index) => (
                      <div className="corso" key={lavoro.azienda} onClick={() => onClickEsperienze(index)}>
                        <h2>{lavoro.azienda}</h2>
                        <h3>{lavoro.posizione}</h3>
                      </div>
                    ))}
                    <button className="addBtn">+ Esperienze</button>
                  </div>
                </div>
              )}
            </div>
          );

    } else {
        return <h2 className="headerInfo">Esperienze <button onClick={onClick}>Apri/Chiudi</button> </h2>
    }

}