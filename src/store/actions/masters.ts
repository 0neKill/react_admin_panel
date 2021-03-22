import {InterfaceMaster} from "../../types/response/Master";
import {TypeActionMasters} from "../../types/store/masters/masters_actions";
import {MASTERS} from "../keys/masters";

export const actionSetMasters = (masters: Array<InterfaceMaster>): TypeActionMasters => ({
    type: MASTERS.SET_MASTERS,
    payload: masters,
})