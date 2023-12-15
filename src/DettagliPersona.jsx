export default function DettagliPersona ({cvPersona, gestisciAggiornamentiCv}) {

     function gestisciStatoFullName (e) {
        const aggiornamentoCV = {...cvPersona, fullName: e.target.value};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciStatoEmail (e) {
        const aggiornamentoCV = {...cvPersona, email: e.target.value};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciStatoNumCell (e) {
        const aggiornamentoCV = {...cvPersona, numero: e.target.value};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }

     function gestisciStatoIndirizzo (e) {
        const aggiornamentoCV = {...cvPersona, indirizzo: e.target.value};
        gestisciAggiornamentiCv(aggiornamentoCV);
     }


    return (
        <div className="infoForm">
            <h2>Dettagli Personali</h2>
            <label htmlFor="fullName">Full Name: </label>
            <input id='fullName' value={cvPersona.fullName} placeholder="nome e cognome" onChange={gestisciStatoFullName}/>
            <label htmlFor="email">Email: </label>
            <input id='email' type="email" value={cvPersona.email} placeholder="cucucu@live.it" onChange={gestisciStatoEmail}/>
            <label htmlFor="cellulare">Numero: </label>
            <input id='cellulare' type="tel" value={cvPersona.numero} placeholder="numero cellulare" onChange={gestisciStatoNumCell}/>
            <label htmlFor="indirizzo">Indirizzo: </label>
            <input id='indirizzo' type="text" value={cvPersona.indirizzo} placeholder="indirizzo" onChange={gestisciStatoIndirizzo}/>
        </div>
    );

}