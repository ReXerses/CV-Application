export default function FormEducation ({cvPersona, gestisciAggiornamentiCv, indiceCorso, onClickEducation, idCorso}) {
    let corso = cvPersona.education;

    function gestisciScuola (e) {
        corso[indiceCorso].scuola = e.target.value;
        const aggiornamentoCV = {...cvPersona, education: corso};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciFacoltà (e) {
        corso[indiceCorso].laurea = e.target.value;
        const aggiornamentoCV = {...cvPersona, education: corso};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDataInizio (e) {
        corso[indiceCorso].dataInizio = e.target.value;
        const aggiornamentoCV = {...cvPersona, education: corso};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDataFine (e) {
        corso[indiceCorso].dataFine = e.target.value;
        const aggiornamentoCV = {...cvPersona, education: corso};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciCittà (e) {
        corso[indiceCorso].città = e.target.value;
        const aggiornamentoCV = {...cvPersona, education: corso};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }


     function rimuoviEducation (id) {
        onClickEducation(null);
        const nuoveEducation = corso.filter((education) => education.id !== id);
        gestisciAggiornamentiCv({...cvPersona, education: nuoveEducation});
    };

        return (
                <div className="form">
                    <div className="input">
                        <label htmlFor="scuola">Scuola: </label>
                        <input id='scuola' value={cvPersona.education[indiceCorso].scuola} placeholder="Università degli studi Federico II" onChange={gestisciScuola}/>
                    </div>
                    <div className="input">
                        <label htmlFor="corsoDiStudi">Corso di studi: </label>
                        <input id='corsoDiStudi' value={cvPersona.education[indiceCorso].laurea} placeholder="Scienze Informatiche" onChange={gestisciFacoltà}/>
                    </div>
                    <div className="date">
                        <div className="input">
                            <label htmlFor="dataInizioEd">Data inizio: </label>
                            <input id='dataInizioEd' value={cvPersona.education[indiceCorso].dataInizio} placeholder="07/2019" onChange={gestisciDataInizio}/>
                        </div>
                        <div className="input">
                            <label htmlFor="dataFineEd">Data fine: </label>
                            <input id='dataFineEd'  value={cvPersona.education[indiceCorso].dataFine} placeholder="09/2024" onChange={gestisciDataFine}/>
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="cittàUni">Località: </label>
                        <input id='cittàUni' value={cvPersona.education[indiceCorso].città} placeholder="Napoli,IT" onChange={gestisciCittà}/>
                    </div>
                    <div className="scelteForm">
                        <button onClick={() =>rimuoviEducation(idCorso)}>Delete</button>
                        <div>
                            <button onClick={()=> onClickEducation(null)}>Back</button>
                        </div>
                    </div>
                </div>
            )

}