import { COURSEPLAN, PACKAGE, PHONE, PLAN } from "./ActionTypes"

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
export const package_plan = (data) => {
    return {
        type: PACKAGE,
        payload: data
    }
}
export const get_phoneNo = (data) => {
    return {
        type: PHONE,
        payload: data
    }
}

