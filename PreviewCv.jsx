export default function PreviewCv ({cvPersona, stileCv}) {
    const corsiDiStudio = cvPersona.education;
    const lavori = cvPersona.esperienze;

    const sezione2ClassName = stileCv === 1 ? "sezione2" : "sezione2Top";

    return (
      <div className={`curriculum ${stileCv === 2 ? 'top' : ''}`} id={stileCv === 2 ? 'top' : 'left'}>
        <div className={stileCv === 2 ? "dettagliPersonaliTop" : "dettagliPersonali"}>
          <h1 className="nomePersona">{cvPersona.fullName}</h1>
          <img className="fotoProfilo" src={cvPersona.foto} alt="foto curriculum" />
          <div className="listaInformazioni">
            <div className="informazioni">
              <img className="icone" src="/emaili.png" alt="icona posta elettronica" />
              <h3>{cvPersona.email}</h3>
            </div>
            <div className="informazioni">
              <img className="icone" src="/phonei.png" alt="icona numero cellulare" />
              <h3>{cvPersona.numero}</h3>
            </div>
            <div className="informazioni">
              <img className="icone" src="/residenza.png" alt="icona indirizzo residenza" />
              <h3>{cvPersona.indirizzo}</h3>
            </div>
          </div>
        </div>
        <div className={sezione2ClassName}>
          <div className="elencoCorsi elencoTop">
            <h2 className="headerCV">Education</h2>
            {corsiDiStudio.map((corso) => (
              <div key={corso.id}>
                <h3>{corso.scuola}</h3>
                <h4>{corso.laurea}</h4>
                <h5>
                  {corso.dataInizio} {corso.dataFine}
                </h5>
              </div>
            ))}
          </div>
          <div className="elencoEsperienze elencoTop">
            <h2 className="headerCV">Esperienze</h2>
            {lavori.map((lavoro) => (
              <div key={lavoro.id}>
                <h3>{lavoro.azienda}</h3>
                <h4>{lavoro.posizione}</h4>
                <h5>
                  {lavoro.dataInizio} {lavoro.dataFine}
                </h5>
                <p>{lavoro.descrizione}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }