import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/postList";
import { IApplicationState } from "../state/ducks/index";
import { fetchPosts } from "../state/ducks/post/actions";
import { IPostState } from "../state/ducks/post/types";

const PostListContainer = () => {
	const dispatch = useDispatch();

	const stateToProps: IPostState = useSelector(
		({ post }: IApplicationState) => ({
			loading: post.loading,
			errors: post.errors,
			data: post.data
		})
	);

	const dispatchToProps = {
		fetchPosts: useCallback(() => dispatch(fetchPosts()), [dispatch])
	};

	return <PostList {...stateToProps} {...dispatchToProps} />;
};

export default PostListContainer;
