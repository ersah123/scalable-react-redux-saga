import React from "react";

type props = {
	title: string;
};

const Post: React.FC<props> = ({ title }: props) => {
	return <li>{title}</li>;
};

export default Post;
