import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { MetaAction, TypeConstant } from "typesafe-actions";
import { postReducer } from "./post/reducers";
import postSaga from "./post/sagas";
import { IPostState } from "./post/types";
// The top-level state object
export interface IApplicationState {
	post: IPostState;
}

export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}

export const rootReducer = combineReducers<IApplicationState>({
	post: postReducer
});

export function* rootSaga() {
	yield all([fork(postSaga)]);
}

interface IMeta {
	method: string;
	route: string;
}
