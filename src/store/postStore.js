import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),

  //update the number of posts in profile page
  addPost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: [post.id, ...state.userProfile.posts],
      },
    })),

  deletePosts: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),

  setPosts: (posts) => set({ posts }),
}));

export default usePostStore;
