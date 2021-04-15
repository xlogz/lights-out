import Tile from './Tile';

const Board = (props) =>{
    return (
        props.board.map((row,y)=>{
            const newRow = row.map((isOn,x)=>{
                return (<Tile 
                    on={isOn}
                    x={x}
                    y={y}
                    key={`${x} ${y}`}
                    updateIndividualTile={props.updateIndividualTile}
                    board={props.board}
                    />)
            });
            return (<div key={`${y}`} style={styles.row}>{newRow}</div>)
        })
    )
}

const styles = {
    row : {
        display: 'block'
    }
}

export default Board;