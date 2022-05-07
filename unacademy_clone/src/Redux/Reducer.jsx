import { COURSEPLAN, PACKAGE, PHONE, PLAN } from "./ActionTypes"

export const initState = {
    coursePlan: [],
    planName: "",
    packagePlan: {},
    phone: ""
}
export const reducer = ((state = initState, { type, payload }) => {

    switch (type) {
        case COURSEPLAN:
            return {
                ...state,
                coursePlan: payload
            }
        case PLAN:
            return {
                ...state,
                planName: payload
            }
        case PACKAGE:
            return {
                ...state,
                packagePlan: payload
            }
        case PHONE:
            return {
                ...state,
                phone: payload
            }

        default: return state
    }

})
