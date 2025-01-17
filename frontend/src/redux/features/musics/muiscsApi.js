import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL'

const  baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/muiscs`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token =  localStorage.getItem('token');
        if(token) {
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }
})

const booksApi = createApi({
    reducerPath: 'musicsApi',
    baseQuery,
    tagTypes: ['Musics'],
    endpoints: (builder) =>({
        fetchAllBooks: builder.query({
            query: () => "/",
            providesTags: ["Musics"]
        }),
        fetchBookById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: "Musics", id }],
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: `/create-music`,
                method: "POST",
                body: newBook
            }),
            invalidatesTags: ["Musics"]
        }),
        updateBook: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ["Musics"]
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Musics"]
        })
    })
})

export const {useFetchAllMusicsQuery, useFetchMusicByIdQuery, useAddMusicMutation, useUpdateMusicMutation, useDeleteMusicMutation} = musicsApi;
export default musicsApi;