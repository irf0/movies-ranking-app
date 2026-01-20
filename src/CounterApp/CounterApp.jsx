import { useState } from 'react'
import { useCounterStore } from '../Store/counterStore'

function CounterApp() {
    // const [count, setCount] = useState(0)
    const { count, increment, decrement, reset } = useCounterStore()

    return (
        <>

            {/* MANUAL METHOD 👇*/}
            {/* <div>
            <button onClick={() => setCount(count + 1)}>INCREMENT</button>
             <p>COUNT : {count}</p>
            <button onClick={() => setCount(count + 1)}>DECREMENT</button>
            <button onClick={() => setCount(0)}>RESET</button>
            </div> */}

            {/* USING ZUSTAND 👇*/}
            <div style={styles.container}>
                <div style={styles.card}>
                    <h2 style={styles.title}>Counter App</h2>

                    <p style={styles.count}>COUNT: {count}</p>

                    <div style={styles.buttonRow}>
                        <button style={styles.button} onClick={decrement}>
                            Decrement (-)
                        </button>

                        <button style={styles.button} onClick={increment}>
                            Increment (+)
                        </button>
                    </div>

                    <button style={{ ...styles.button, ...styles.resetButton }} onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default CounterApp

const styles = {
    container: {
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f6f8',
    },

    card: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '16px',
        minWidth: '300px',
        textAlign: 'center',
        boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.15)',
    },

    title: {
        marginBottom: '20px',
    },

    count: {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },

    buttonRow: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        marginBottom: '15px',
    },

    button: {
        flex: 1,
        padding: '10px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#2563eb',
        color: '#fff',
        fontWeight: 'bold',
    },

    resetButton: {
        backgroundColor: '#ef4444',
    },
}

