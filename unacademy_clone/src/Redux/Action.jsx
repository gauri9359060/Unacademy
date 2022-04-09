import { COURSEPLAN, PLAN } from "./ActionTypes"

export const course_plan = (data) => {
    return {
        type:COURSEPLAN,
        payload: data
    }
}
export const plan = (data) => {
    return {
        type: PLAN,
        payload: data
    }
}
