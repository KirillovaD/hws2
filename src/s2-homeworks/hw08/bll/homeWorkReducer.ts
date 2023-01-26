import {UserType} from '../HW8'


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

const sortUserUtil = (type: 'up' | 'down', a: UserType, b: UserType): boolean => {
    return type === 'up' ? a.name >= b.name : a.name <= b.name
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort((a,b) => {
                return sortUserUtil(action.payload, a, b) ? 1 : -1
            })
           //  if (action.payload == 'up'){
           //      return [...state].sort((a, b) => a.name >= b.name ? 1 : -1)
           //  }
           //  if (action.payload == 'down'){
           //      return  [...state].sort((a, b) => b.name >= a.name ? 1 : -1)
           //  }
           // return state;
        }
        case 'check': {
           return state.filter(el=> el.age > action.payload)
        }
        default:
            return state
    }
}
