
import { FetchCourseFailure, FetchCourseLoading, FetchCourseSuccess, AddCourseSuccess, getCourseFailure, getCourseLoading, getCourseSuccess } from "./actionTypes";

const initialValue = {
    isLoading: false,
    isError: false,
    
    courses: []
}
 export const courseReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case FetchCourseLoading:
            console.log('loading course');
            return { ...state, isLoading: true }
        case FetchCourseSuccess:
            console.log(payload);
            return { ...state, isLoading: false, courses: payload }
        case FetchCourseFailure:
            return { ...state, isLoading: false, isError: true }
         case AddCourseSuccess:
                console.log(state);
                return {
                    ...state,
                    isLoading:false,
                    isError: false,
                    courses: [...state.courses,payload]
            } 
        default:
            return state;
    }
} 

const initValue = {
    isLoading: false,
    isError: false,
    course: null
}
export const OneCourseReducer = (state = initValue, { type, payload }) => {
    switch (type) {
        case getCourseLoading:
            return { ...state, isLoading: true }
        case getCourseSuccess:
            return { ...state, isLoading: false, course: payload }
        case getCourseFailure:
            return { ...state, isLoading: false, isError: true, course: null }
            
        default:
            return state;
    }
}