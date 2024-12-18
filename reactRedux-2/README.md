### prop drilling

-- context api.

useState, useReducer, useRef
-->LOCAL STATE MANAGEMENT

### GLOBAL STATE MANAGEMENT

--- redux
---> library

### store

store={
counter:0,
todo:[],
cart:[]
}

<!-- store.counter=1 -->

dispatch({type:"counter", payload:1})

{...store, counter:payload}

### redux

--> npm install redux
--->flux design ( uni-direction data flow)
---> view-->action ---> dispatch---> store--->view

## react-redux

--->npm install react-redux
--> it is bridge b/w react and redux

1. provider---> HOC ( wrap it over entire application)
2. useSelector---> to access data in store.
3. useDispatch---> to make makes in the store.
