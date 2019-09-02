import { Dispatch } from "react";
import { connect } from "react-redux";
import { Action, TypeConstant } from "typesafe-actions";
import PostList from "../components/postList";
import { IApplicationState } from "../state/ducks/index";
import { fetchPosts } from "../state/ducks/post/actions";
export const mapStateToProps = ({ post }: IApplicationState) => ({
	loading: post.loading,
	errors: post.errors,
	data: post.data
});
export const mapDispatchToProps = (
	dispatch: Dispatch<Action<TypeConstant>>
) => ({
	fetchPosts: () => dispatch(fetchPosts())
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostList);
