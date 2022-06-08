import {useAppDispatch} from "./useTypedDispatch";
import {bindActionCreators} from "redux";
import {AllActionCreators} from "../store/reducers/action-creators";

export const UseActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(AllActionCreators, dispatch)
}