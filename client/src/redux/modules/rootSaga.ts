import { all } from "redux-saga/effects";
import { imageSaga } from "./image";

export default function* rootSaga() {
  yield all([imageSaga()]);
}
