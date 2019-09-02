import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import apiCaller from "../../../utils/apiCaller";
import { fetchPosts, fetchPostsSuccess } from "../actions";
import postSaga from "../sagas";
import * as postData from "./mockData/postsData.json";

describe("post saga", () => {
	it("should handle successfully fetching posts", () => {
		return (
			expectSaga(postSaga)
				.provide([[matchers.call.fn(apiCaller), postData]])
				// Assert that the 'put' will eventually happen
				.put(fetchPostsSuccess(postData))
				// Dispatch any actions that the saga will 'take'
				.dispatch(fetchPosts())
				// Start the test, return a Promise
				.run()
		);
	});
});
