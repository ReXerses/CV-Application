export default function FormEducation ({cvPersona, gestisciAggiornamentiCv, idCorso}) {

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
    

    return (
            <div className="infoForm">

                <label htmlFor="scuola">Scuola: </label>
                <input id='scuola' value={cvPersona.education[idCorso].scuola} placeholder="nome e cognome" onChange={gestisciScuola}/>
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
        )
}