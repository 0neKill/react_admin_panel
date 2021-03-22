import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionDispatch from '../../store/actions';

export default function useAction() {
    const dispatch = useDispatch();
    return bindActionCreators(ActionDispatch, dispatch)
}