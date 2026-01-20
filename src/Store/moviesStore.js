import { create } from 'zustand'

export const useMovieStore = create((set) => ({
    favorites: [],
    toggleFavorite: (movieId) => set((state) => ({
        favorites: state.favorites.includes(movieId) ? state.favorites.filter(t => t !== movieId) : [...state.favorites, movieId]

    }))
}))