import { fetchPosts, fetchPostsSuccess } from "../actions";
import { initialState, postReducer } from "../reducers";
import * as postData from "./mockData/postsData.json";

describe("post reducer", () => {
	it("should return initial state", () => {
		expect(postReducer(initialState, { type: "no type", payload: [] })).toEqual(
			initialState
		);
	});

	it("should handle fetching all posts", () => {
		expect(postReducer(initialState, fetchPosts())).toEqual({
			...initialState,
			loading: true
		});
	});

	it("should handle all data successfully fetch post", () => {
		expect(postReducer(initialState, fetchPostsSuccess(postData))).toEqual({
			...initialState,
			data: postData
		});
	});
});
