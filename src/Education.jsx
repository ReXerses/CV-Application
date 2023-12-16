import { useState } from "react";
import FormEducation from "./FormEducation";


export default function Education ({show, onClick, cvPersona, gestisciAggiornamentiCv}) {
    const [isAperto, setAperto] = useState(false);
    const [corsoCliccato, setCorsoCliccato] = useState(null);

    const onClickEducation = (idCorso) => {
        setCorsoCliccato(idCorso);
        setAperto(!isAperto);
    };

    let corsiDiStudio = cvPersona.education;


    if (show) {

        return (
            <div>
              {isAperto ? (
                <div className="infoForm">
                  <h2>
                    Education <button onClick={onClick}>Apri/Chiudi</button>
                  </h2>
                  <FormEducation cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCv} idCorso={corsoCliccato}/>
                </div>
              ) : (
                <div className="education">
                  <h2>
                    Education <button onClick={onClick}>Apri/Chiudi</button>
                  </h2>
                  <div className="elencoTitoli">
                    {corsiDiStudio.map((corso,index) => (
                      <div className="corso" key={corso.id} onClick={() => onClickEducation(index)}>
                        <h2>{corso.scuola}</h2>
                        <h3>{corso.laurea}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );

    } else {
        return <h2 className="headerInfo">Education <button onClick={onClick}>Apri/Chiudi</button> </h2>
    }

}