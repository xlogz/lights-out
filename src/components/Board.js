import Tile from './Tile';

const Board = (props) =>{
    return (
        props.board.map((row)=>{
            const newRow = row.map((isOn)=>{
                return <Tile on={isOn}/>
            });
            return (<div style={styles.row}>{newRow}</div>)
        })
    )
}

const styles = {
    row : {
        display: 'block'
    }
}

export default Board;