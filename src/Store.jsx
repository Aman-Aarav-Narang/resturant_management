import { createStore } from 'redux'
import { rootred } from './Reducer/Rootreducer';


const store = createStore(
    rootred
)

export default store;
