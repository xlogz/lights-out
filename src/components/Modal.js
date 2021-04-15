const Modal = (props) => {

    function handleClick(){
        props.restartBoard();
    }

    return props.won ? 
    (   <div style={styles.container}>
            <div style={styles.background}>
            </div>
            <div style={styles.modalWindow}>
                <div style={styles.modal}>Congrats! You have won!</div>
                <button onClick={handleClick}>Restart</button>
            </div>
        </div>
        
    ) : null;
}

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        opacity: .5,
    },
    modalWindow:{
        backgroundColor: 'white',
        position: 'absolute',
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column',
        borderRadius: '10px',
    },
    modal: {
        paddingBottom: '20px'
    }
}

export default Modal;