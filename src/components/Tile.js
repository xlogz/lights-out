const Tile = ({on, x, y}) => {
    const handleClick = () =>{
        console.log(`${x} ${y}`);
        
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
        width: 100,
        height: 100,
    },
    on: {
        backgroundColor: 'white',
    },
    off:{
        backgroundColor: 'black',
    }
}

export default Tile;