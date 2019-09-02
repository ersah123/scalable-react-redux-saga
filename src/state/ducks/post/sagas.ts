import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { IMetaAction } from "..";
import apiCaller from "../../utils/apiCaller";
import { fetchPostsError, fetchPostsSuccess } from "./actions";
import { IPostRaw, PostActionTypes } from "./types";

/**
 * @desc Business logic of effect.
 */
function* handleFetch(action: IMetaAction): Generator {
	try {
		const res: IPostRaw[] | any = yield call(
			apiCaller,
			action.meta.method,
			action.meta.route
		);

		yield put(fetchPostsSuccess(res));
	} catch (err) {
		if (err instanceof Error) {
			yield put(fetchPostsError(err.stack!));
		} else {
			yield put(fetchPostsError("An unknown error occured."));
		}
	}
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
	yield takeEvery(PostActionTypes.FETCH_POSTS, handleFetch);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* postSaga() {
	yield all([fork(watchFetchRequest)]);
}
