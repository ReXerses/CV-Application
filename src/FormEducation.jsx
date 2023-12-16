export default function FormEducation ({cvPersona, gestisciAggiornamentiCv, idCorso}) {
    let corso = cvPersona.education;

    function gestisciScuola (e) {
        corso[idCorso].scuola = e.target.value;
        const aggiornamentoCV = {...cvPersona, education: corso};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciFacoltà (e) {
        corso[idCorso].laurea = e.target.value;
        const aggiornamentoCV = {...cvPersona, education: corso};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDataInizio (e) {
        corso[idCorso].dataInizio = e.target.value;
        const aggiornamentoCV = {...cvPersona, education: corso};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDataFine (e) {
        corso[idCorso].dataFine = e.target.value;
        const aggiornamentoCV = {...cvPersona, education: corso};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciCittà (e) {
        corso[idCorso].città = e.target.value;
        const aggiornamentoCV = {...cvPersona, education: corso};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }
    

    return (
            <div className="form">
                <div className="input">
                    <label htmlFor="scuola">Scuola: </label>
                    <input id='scuola' value={cvPersona.education[idCorso].scuola} placeholder="Università degli studi Federico II" onChange={gestisciScuola}/>
                </div>
                <div className="input">
                    <label htmlFor="corsoDiStudi">Corso di studi: </label>
                    <input id='corsoDiStudi' value={cvPersona.education[idCorso].laurea} placeholder="Scienze Informatiche" onChange={gestisciFacoltà}/>
                </div>
                <div className="date">
                    <div className="input">
                        <label htmlFor="dataInizioEd">Data inizio: </label>
                        <input id='dataInizioEd' value={cvPersona.education[idCorso].dataInizio} placeholder="07/2019" onChange={gestisciDataInizio}/>
                    </div>
                    <div className="input">
                        <label htmlFor="dataFineEd">Data fine: </label>
                        <input id='dataFineEd'  value={cvPersona.education[idCorso].dataFine} placeholder="09/2024" onChange={gestisciDataFine}/>
                    </div>
                </div>
                <div className="input">
                    <label htmlFor="cittàUni">Località: </label>
                    <input id='cittàUni' value={cvPersona.education[idCorso].città} placeholder="Napoli,IT" onChange={gestisciCittà}/>
                </div>
                <div className="scelteForm">
                    <button>Delete</button>
                    <div>
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        )
}