export default function FormEsperienze ({cvPersona, gestisciAggiornamentiCv, idLavoro}) {
    let lavori = cvPersona.esperienze;

    function gestisciAzienda (e) {
        lavori[idLavoro].scuola = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciPosizione (e) {
        lavori[idLavoro].laurea = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDataInizio (e) {
        lavori[idLavoro].dataInizio = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDataFine (e) {
        lavori[idLavoro].dataFine = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciCittà (e) {
        lavori[idLavoro].città = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDescrizione (e) {
        lavori[idLavoro].descrizione = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }
    
    return (
            <div className="form">
                <div className="input">
                    <label htmlFor="azienda">Azienda: </label>
                    <input id='azienda' value={cvPersona.esperienze[idLavoro].azienda} placeholder="Google" onChange={gestisciAzienda}/>
                </div>

                <div className="input">
                    <label htmlFor="posizioneLavorativa">Posizione lavorativa: </label>
                    <input id='posizioneLavorativa' value={cvPersona.esperienze[idLavoro].posizione} placeholder="Web Dev." onChange={gestisciPosizione}/>
                </div>

                <div className="date">
                    <div className="input">
                        <label htmlFor="dataInizioLav">Data inizio: </label>
                        <input id='dataInizioLav' value={cvPersona.esperienze[idLavoro].dataInizio} placeholder="07/2021" onChange={gestisciDataInizio}/>
                    </div>
                    <div className="input">
                        <label htmlFor="dataFineLav">Data fine: </label>
                        <input id='dataFineLav'  value={cvPersona.esperienze[idLavoro].dataFine} placeholder="09/2025" onChange={gestisciDataFine}/>
                    </div>
                </div>
                
                <div className="input">
                    <label htmlFor="cittàLav">Località: </label>
                    <input id='cittàLav' value={cvPersona.esperienze[idLavoro].città} placeholder="Milano,IT" onChange={gestisciCittà}/>
                </div>

                <div className="input">
                    <label htmlFor="descrizioneLav">Descrizione: </label>
                    <textarea id="descrizioneLav"  rows="5" cols="50" value={cvPersona.esperienze[idLavoro].descrizione} onChange={gestisciDescrizione} placeholder="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ></textarea>
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