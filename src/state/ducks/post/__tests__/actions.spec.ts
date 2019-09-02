import { action } from "typesafe-actions";
import { fetchPosts, fetchPostsSuccess } from "../actions";
import { PostActionTypes } from "../types";
import * as postData from "./mockData/postsData.json";

describe("post actions", () => {
	it("should create an action to fetch all posts", () => {
		const expectedAction = action(PostActionTypes.FETCH_POSTS, [], {
			method: "get",
			route: "/posts"
		});

		expect(fetchPosts()).toEqual(expectedAction);
	});

	it("should create an success action", () => {
		const expectedAction = action(
			PostActionTypes.FETCH_POSTS_SUCCESS,
			postData
		);

		expect(fetchPostsSuccess(postData)).toEqual(expectedAction);
	});
});
