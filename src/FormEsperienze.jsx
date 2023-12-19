export default function FormEsperienze ({cvPersona, gestisciAggiornamentiCv, indiceLavoro, onClickEsperienze, idLavoro}) {
    let lavori = cvPersona.esperienze;

    function gestisciAzienda (e) {
        lavori[indiceLavoro].scuola = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciPosizione (e) {
        lavori[indiceLavoro].laurea = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDataInizio (e) {
        lavori[indiceLavoro].dataInizio = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDataFine (e) {
        lavori[indiceLavoro].dataFine = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciCittà (e) {
        lavori[indiceLavoro].città = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciDescrizione (e) {
        lavori[indiceLavoro].descrizione = e.target.value;
        const aggiornamentoCV = {...cvPersona, esperienze: lavori};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function rimuoviEsperienze (id) {
        onClickEsperienze(null);
        const nuoveEsperienze = lavori.filter((esperienza) => esperienza.id !== id);
        gestisciAggiornamentiCv({...cvPersona, esperienze: nuoveEsperienze});
    };

    return (
            <div className="form">
                <div className="input">
                    <label htmlFor="azienda">Azienda: </label>
                    <input id='azienda' value={cvPersona.esperienze[indiceLavoro].azienda} placeholder="Google" onChange={gestisciAzienda}/>
                </div>

                <div className="input">
                    <label htmlFor="posizioneLavorativa">Posizione lavorativa: </label>
                    <input id='posizioneLavorativa' value={cvPersona.esperienze[indiceLavoro].posizione} placeholder="Web Dev." onChange={gestisciPosizione}/>
                </div>

                <div className="date">
                    <div className="input">
                        <label htmlFor="dataInizioLav">Data inizio: </label>
                        <input id='dataInizioLav' value={cvPersona.esperienze[indiceLavoro].dataInizio} placeholder="07/2021" onChange={gestisciDataInizio}/>
                    </div>
                    <div className="input">
                        <label htmlFor="dataFineLav">Data fine: </label>
                        <input id='dataFineLav'  value={cvPersona.esperienze[indiceLavoro].dataFine} placeholder="09/2025" onChange={gestisciDataFine}/>
                    </div>
                </div>
                
                <div className="input">
                    <label htmlFor="cittàLav">Località: </label>
                    <input id='cittàLav' value={cvPersona.esperienze[indiceLavoro].città} placeholder="Milano,IT" onChange={gestisciCittà}/>
                </div>

                <div className="input">
                    <label htmlFor="descrizioneLav">Descrizione: </label>
                    <textarea id="descrizioneLav"  rows="5" cols="28" value={cvPersona.esperienze[indiceLavoro].descrizione} onChange={gestisciDescrizione} placeholder="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ></textarea>
                </div>
                
                
                <div className="scelteForm">
                    <button onClick={() =>rimuoviEsperienze(idLavoro)}>Delete</button>
                    <div>
                        <button onClick={()=> onClickEsperienze(null)}>Back</button>
                    </div>
                </div>
            </div>
        )
}