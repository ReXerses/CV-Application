export default function Customize ({show, onClick, gestisciStileCv }) {

    if (show) {

        return (
            <div>
                <div className="education">
                  <h2>
                    Layout <button  className={`openBtn ${show ? 'active' : ''}`} onClick={onClick}></button>
                  </h2>
                  <div className="customize">
                    <button className="previewLeft" onClick={() => gestisciStileCv(1)}></button>    
                    <button className="previewTop" onClick={() => gestisciStileCv(2)}></button>
                  </div>
                </div>
            </div>
          );

    } else {
        return <h2 className="headerInfo">Layout <button className="openBtn"  onClick={onClick}></button> </h2>
    }
}