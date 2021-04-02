import create from 'zustand'
import { persist } from 'zustand/middleware'
import Router from 'next/router'

type UserStoreState = {
    logged_in: boolean
    username: string
    login: (username: string) => void
    logout: () => void
}

export const useUserStore = create<UserStoreState>(
    persist(
        (set) => ({
            logged_in: true,

            username: 'Billy Bob',

            login: (username) => {
                Router.push('/')
                set((state) => ({ logged_in: true, username }))
            },

            logout: () => {
                Router.push('/login')
                set((state) => ({ logged_in: false }))
            },
        }),
        {
            name: 'boilerplate-user',
        }
    )
)
