import React, { useEffect } from "react";
import { mapDispatchToProps, mapStateToProps } from "../containers/postList";
import { IPostRaw } from "../state/ducks/post/types";
import Post from "./post";

type AllProps = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

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
