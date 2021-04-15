import Tile from './Tile';

const Board = ({board, toggleTiles}) =>{
    return (<div style={styles.container}>
        {board.map((row,y)=>{
            const newRow = row.map((isOn,x)=>{
                return (<Tile 
                    on={isOn}
                    x={x}
                    y={y}
                    key={`${x} ${y}`}
                    toggleTiles={toggleTiles}
                    board={board}
                    />)
            });
            return (<div key={`${y}`} style={styles.row}>{newRow}</div>)
        })}
    </div>)
}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    row : {
        display: 'flex',
        flex: '0 1 100px',
        flexDirection: 'row'
    }
}

export default Board;