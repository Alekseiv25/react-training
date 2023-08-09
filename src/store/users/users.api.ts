import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPerson, } from '../../models/models'

export const UsersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.org'
    }),
    endpoints: build => ({
        getUsers: build.query<IPerson[], string>({
            query: () => ({
                url: `users`
            })
        }),
        getUsersById: build.query<IPerson, number>({
            query: (id: number) => ({
                url: `users/${id}`
            })
        })
    })
})

export const { useGetUsersQuery, useLazyGetUsersByIdQuery } = UsersApi