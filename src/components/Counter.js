const Counter = ({count}) => {
    return (<div style={styles.counter}>Number of moves made: {count}</div>)
}

const styles = {
    counter: {
        display: 'inline-block',
        width: '50%'
    }
}

export default Counter;