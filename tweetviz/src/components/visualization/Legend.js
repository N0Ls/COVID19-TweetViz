export const Legend = () => (
    <div className="legend">
        <h2 className="lengend_main_title">Legend</h2>
        <div className="legend_item">
            <div className="bubble" style={{backgroundColor : 'rgb(118,203,236)'}}>
            </div>
            <h3 className="legend_title">Tweet considered real</h3>
        </div>
        <div className="legend_item">
            <div className="bubble" style={{backgroundColor : 'rgb(236,99,137)'}}>
            </div>
            <h3 className="legend_title">Tweet considered fake</h3>
        </div>
        <div className="legend_item">
            <div className="bubble" style={{backgroundColor : 'rgb(255,255,255)', width : '50px', height : '50px'}}>
            </div>
            <h3 className="legend_title">Size of the bubble depends on the influence factor</h3>
        </div>

    </div>
);