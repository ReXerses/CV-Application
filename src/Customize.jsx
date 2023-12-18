export default function Customize ({show, onClick, gestisciStileCv }) {

    if (show) {

        return (
            <div>
                <div className="education">
                  <h2>
                    Customize <button onClick={onClick}>Apri/Chiudi</button>
                  </h2>
                  <div className="customize">
                    <button className="previewLeft" onClick={() => gestisciStileCv(1)}></button>    
                    <button className="previewTop" onClick={() => gestisciStileCv(2)}></button>
                  </div>
                </div>
            </div>
          );

    } else {
        return <h2 className="headerInfo">Customize <button onClick={onClick}>Apri/Chiudi</button> </h2>
    }
}