const Modal = (props) => {
    return props.won ? 
    (
        <div style={styles.background}>
            <div style={styles.modalWindow}>
                <div style={styles.modal}>Congrats! You have won!</div>
                <button>Restart</button>
            </div>
        </div>
    ) : null;
}

const styles = {
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        opacity: .5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalWindow:{
        backgroundColor: 'white',
        position: 'relative',
        top: -100,
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column'
    },
    modal: {
        paddingBottom: '20px'
    }
}

export default Modal;