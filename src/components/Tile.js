const Tile = (props) => {
    return (
        <div style={ props.on ? styles.on : styles.off }></div>
    )
}

const styles = {
    on: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        border: "1px solid black",
        display: "inline-block"
    },
    off:{
        width: 100,
        height: 100,
        backgroundColor: 'black',
        border: "1px solid black",
        display: "inline-block"
    }
}

export default Tile;