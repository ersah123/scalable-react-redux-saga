import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { IPostRaw, IPostState, PostActionTypes } from "./types";

export const initialState: IPostState = {
	data: [],
	errors: [],
	loading: false
};

export const postReducer = (
	state: IPostState = initialState,
	action: Action<TypeConstant> & PayloadAction<TypeConstant, IPostRaw[]>
): IPostState => {
	switch (action.type) {
		case PostActionTypes.FETCH_POSTS: {
			return { ...state, loading: true };
		}
		case PostActionTypes.FETCH_POSTS_SUCCESS: {
			return { ...initialState, data: action.payload };
		}
		case PostActionTypes.FETCH_POSTS_ERROR: {
			return {
				...state
			};
		}

		default:
			return state;
	}
};
