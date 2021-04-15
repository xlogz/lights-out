const Tile = ({on, x, y, toggleTiles, board}) => {
    const handleClick = () =>{
        toggleTiles(board, x, y);
    }

    return (
        <div 
            style={ on ? {...styles.on, ...styles.tile} : {...styles.off, ...styles.tile} }
            onClick={handleClick}
        ></div>
    )
}

const styles = {
    tile: {
        border: "5px solid black",
        display: "inline-block",
        margin: "3px",
        flex: '0 1 100px',
        boxSizing: 'border-box'
    },
    on: {
        backgroundColor: 'white',
    },
    off:{
        backgroundColor: 'black',
    }
}

export default Tile;