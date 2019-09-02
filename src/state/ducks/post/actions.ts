import { action } from "typesafe-actions";
import { IPostRaw, PostActionTypes } from "./types";
export const fetchPosts = () =>
	action(PostActionTypes.FETCH_POSTS, [], {
		method: "get",
		route: "/posts"
	});
export const fetchPostsSuccess = (data: IPostRaw[]) =>
	action(PostActionTypes.FETCH_POSTS_SUCCESS, data);
export const fetchPostsError = (message: string) =>
	action(PostActionTypes.FETCH_POSTS_ERROR, message);
