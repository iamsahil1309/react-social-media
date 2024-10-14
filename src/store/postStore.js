import {create} from 'zustand'

const usePostStore = create((set) => ({
    posts: [],
    createPost : (post) => set(state => ({posts: [post, ...state.posts ]})),
    //update the number of posts in profile page
    addPost : (post) => set(state => ({
        userProfile : {...state.userProfile, posts: [post.id, ...state.userProfile.posts]}
    }))
}))

export default usePostStore