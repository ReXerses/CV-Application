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

    function gestisciScuola (e) {
        const aggiornamentoCV = {...cvPersona, fullName: e.target.value};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciFacoltà (e) {
        const aggiornamentoCV = {...cvPersona, email: e.target.value};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDataInizio (e) {
        const aggiornamentoCV = {...cvPersona, numero: e.target.value};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDataFine (e) {
        const aggiornamentoCV = {...cvPersona, indirizzo: e.target.value};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciCittà (e) {
        const aggiornamentoCV = {...cvPersona, indirizzo: e.target.value};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

    if (show) {

        return (
            <div>
              {isAperto ? (
                <div className="infoForm">
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

        /*return (
            <div>
                {isAperto ? (
                    <div className="infoForm">
                        <FormEducation cvPersona={cvPersona} gestisciAggiornamentiCv={gestisciAggiornamentiCv}/>
                    </div>
                ) : (
            <div className="education">
                <h2>Education <button onClick={onClick}>Apri/Chiudi</button> </h2>
                <div className="elencoTitoli">
                    {corsiDiStudio.map((corso) => ( 
                    <div className="corso" key={corso.id} onClick={onClickEducation}>
                        <h2>{corso.scuola}</h2>
                        <h3>{corso.laurea}</h3>
                    </div>
                    ))}
                </div>
            </div>
             
            </div>
        )*/

        
       /* return (
            <div className="infoForm">

                <h2>Education <button onClick={onClick}>Apri/Chiudi</button> </h2>
                <label htmlFor="scuola">Scuola: </label>
                <input id='scuola' value={cvPersona.education[0].scuola} placeholder="nome e cognome" onChange={gestisciScuola}/>
                <label htmlFor="email">Corso di studi: </label>
                <input id='email' type="email" value={cvPersona.email} placeholder="cucucu@live.it" onChange={gestisciFacoltà}/>
                <div>
                    <label htmlFor="cellulare">Data inizio: </label>
                    <input id='cellulare' type="tel" value={cvPersona.numero} placeholder="numero cellulare" onChange={gestisciDataInizio}/>
                    <label htmlFor="indirizzo">Data fine: </label>
                    <input id='indirizzo' type="text" value={cvPersona.indirizzo} placeholder="indirizzo" onChange={gestisciDataFine}/>
                </div>
                <label htmlFor="cittàUni">Località: </label>
                <input id='cittàUni'  value={cvPersona.email} placeholder="cucucu@live.it" onChange={gestisciCittà}/>
                <div>
                    <button>Delete</button>
                    <div>
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        )*/
    } else {
        return <h2>Education <button onClick={onClick}>Apri/Chiudi</button> </h2>
    }

}