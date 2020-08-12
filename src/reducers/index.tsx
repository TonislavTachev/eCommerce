import {combineReducers} from 'redux';
import {userReducer} from './userReducer';


//combining the reducers
const rootReducer = combineReducers({
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer