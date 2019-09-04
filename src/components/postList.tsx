import React, { useEffect } from "react";
import {
	IDispatchToProps,
	IPostRaw,
	IPostState
} from "../state/ducks/post/types";
import Post from "./post";

type AllProps = IPostState & IDispatchToProps;

const PostList: React.FC<AllProps> = ({ data, fetchPosts }: AllProps) => {
	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);
	return (
		<div>
			<ul>
				{data.map((post: IPostRaw) => (
					<Post key={post.id} title={post.title} />
				))}
			</ul>
		</div>
	);
};

export default PostList;
