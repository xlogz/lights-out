const Tile = (props) => {
    return (
        <div style={ props.on ? on : off }></div>
    )
}

const styles = {
    on: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        border: "1px solid black"
    },
    off:{
        width: 100,
        height: 100,
        backgroundColor: 'black',
        border: "1px solid black"
    }
}

export default Tile;