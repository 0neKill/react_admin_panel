import {MASTERS} from "../../../store/keys/masters";
import {InterfaceMaster} from "../../response/Master";

interface InterfaceSetMasters {
    type: typeof MASTERS.SET_MASTERS,
    payload: Array<InterfaceMaster>
}

export type TypeActionMasters = InterfaceSetMasters;