import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

    return (
        <>
            <div style={styles.container}>
                <div style={styles.card}>
                    <Link style={styles.button} to="/counter">🕐 COUNTER APP</Link>
                    <Link style={styles.button} to="/movies">🎬 MOVIES RANK APP</Link>
                </div>
            </div>
            <div>
                <p style={{ fontWeight: "bold" }}>Counter App is built to learn Zustand.</p>
                <p style={{ fontWeight: "bold" }}>Movies Rank App is built to learn Zustand + React Query.</p>
            </div>
        </>
    )
}

export default Home
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
        display: "flex",
        flexDirection: "row",
        gap: "25px",
        boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.15)',
    },

    button: {
        flex: 1,
        padding: '12px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#2563eb',
        color: '#fff',
        fontWeight: 'bold',
        textDecoration: 'none'

    },

}