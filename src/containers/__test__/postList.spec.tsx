import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import PostList from "../../components/postList";
import { initialState } from "../../state/ducks/post/reducers";
import PostListContainer from "../postList";

configure({ adapter: new Adapter() });
const mockStore = configureStore();

describe("container <PostListContainer />", () => {
	let wrapper, store, container, component: any;
	beforeEach(() => {
		store = mockStore({ post: initialState });

		store.dispatch = jest.fn();

		wrapper = mount(
			<Provider store={store}>
				<PostListContainer />
			</Provider>
		);

		container = wrapper.find(PostListContainer);
		component = container.find(PostList);
	});

	it("should render both the container and the component", () => {
		expect(container.length).toBeTruthy();
		expect(component.length).toBeTruthy();
	});

	it("should map state to props", () => {
		const expectedPropKeys = ["loading", "errors", "data"];

		expect(Object.keys(component.props())).toEqual(
			expect.arrayContaining(expectedPropKeys)
		);
	});

	it("should map dispatch to props", () => {
		const expectedPropKeys = ["fetchPosts"];

		expect(Object.keys(component.props())).toEqual(
			expect.arrayContaining(expectedPropKeys)
		);
	});
});
