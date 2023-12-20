import { useState } from "react";
import FormEducation from "./FormEducation";
import { v4 as uuidv4 } from 'uuid';

export default function Education ({show, onClick, cvPersona, gestisciAggiornamentiCv}) {
    const [isAperto, setAperto] = useState(false);
    const [corsoCliccato, setCorsoCliccato] = useState(null);

    const onClickEducation = (indiceCorso) => {
        setCorsoCliccato(indiceCorso);
        setAperto(!isAperto);
    };

    let corsiDiStudio = cvPersona.education;

    function aggiungiCorsoDiStudi () {
      corsiDiStudio.push({
        id: uuidv4(),
        scuola: '',
        laurea: '',
        dataInizio : '',
        dataFine: '',
        città: ''
      });
      const aggiornamentoCV = {...cvPersona, education: corsiDiStudio};
      gestisciAggiornamentiCv(aggiornamentoCV);
    }

    if (show) {

        return (
            <div>
              {isAperto  ? (
                <div className="infoForm">
                  <h2>
                    Education <button className= {`openBtn ${show ? 'active' : ''}`}  onClick={onClick}></button>
                  </h2>
                  <FormEducation cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCv} indiceCorso={corsoCliccato} onClickEducation={onClickEducation} idCorso={corsiDiStudio[corsoCliccato].id} />
                </div>
              ) : (
                <div className="education">
                  <h2>
                    Education <button  className={`openBtn ${show ? 'active' : ''}`} onClick={onClick}></button>
                  </h2>
                  <div className="elencoTitoli">
                    {corsiDiStudio.map((corso,index) => (
                      <div className="corso" key={corso.id} onClick={() => onClickEducation(index)}>
                        <h2>{corso.scuola}</h2>
                        <h3>{corso.laurea}</h3>
                      </div>
                    ))}
                    <button className="addBtn" onClick={aggiungiCorsoDiStudi}>+ Education</button>
                  </div>
                </div>
              )}
            </div>
          );

    } else {
        return <h2 className="headerInfo">Education <button className="openBtn" onClick={onClick}></button> </h2>
    }

}