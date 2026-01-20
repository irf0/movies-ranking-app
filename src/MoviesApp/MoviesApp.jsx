import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useMovieStore } from '../Store/moviesStore'

const fetchMovies = async () => {
    const res = await fetch(
        'https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json'
    )
    return res.json()
}

function MoviesApp() {
    const { favorites, toggleFavorite } = useMovieStore()

    const { data, isLoading, isError } = useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies,
    })

    if (isLoading) return <p style={styles.status}>🎬 Loading movies...</p>
    if (isError) return <p style={styles.status}>Something went wrong 😢</p>

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Top Movies</h2>

                <div style={styles.list}>
                    {data.map(movie => {
                        const isFav = favorites.includes(movie.title)

                        return (
                            <div key={movie.rank} style={styles.movieRow}>
                                <div>
                                    <h3 style={styles.rank}>Rank #{movie.rank}</h3>
                                    <h4 style={styles.title}>{movie.title}</h4>
                                </div>

                                <button
                                    onClick={() => toggleFavorite(movie.title)}
                                    style={{
                                        ...styles.button,
                                        backgroundColor: isFav ? '#ef4444' : '#22c55e',
                                    }}
                                >
                                    {isFav ? '❤️' : '🤍'}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MoviesApp

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        width: '420px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '16px',
        boxShadow: '0px 10px 25px rgba(0,0,0,0.15)',
    },

    heading: {
        textAlign: 'center',
        marginBottom: '16px',
    },

    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },

    movieRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        borderRadius: '10px',
        backgroundColor: '#f9fafb',
    },

    title: {
        margin: 0,
        fontSize: '15px',
    },

    rank: {
        margin: 0,
        fontSize: '12px',
        color: '#6b7280',
    },

    button: {
        border: 'none',
        borderRadius: '999px',
        width: '36px',
        height: '36px',
        fontSize: '16px',
        cursor: 'pointer',
        color: '#fff',
    },

    status: {
        textAlign: 'center',
        fontSize: '18px',
    },
}
