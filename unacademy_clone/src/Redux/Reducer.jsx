import { COURSEPLAN, PLAN } from "./ActionTypes"

export const initState={
    coursePlan:[],
    planName:""

}
export const reducer = ((state=initState,{type,payload})=>{

    switch(type){
        case COURSEPLAN:
            return{
                ...state,
                coursePlan:payload
            }
        case PLAN:
            return {
                ...state,
                planName: payload
            }

        default : return state    
    }

})
