import { createStore } from 'redux';

const reducer = (state = 0, action) => {
	if (action.type === 'INC') {
		return state + 1;
	} else if (action.type === "DEC") {
		return state - 1;
	}
	return state;
}

const store = createStore(reducer);

// store.subscribe(() => {
//   console.log('store изменился', store.getState())
// })

store.dispatch({ type: "INC" })
store.dispatch({ type: "INC" })
store.dispatch({ type: "INC" })
store.dispatch({ type: "DEC" })
store.dispatch({ type: "DEC" })
store.dispatch({ type: "DEC" })


/////////



import { applyMiddleware, createStore } from 'redux';

const reducer = (state = {}, action) => {
	return state;
}

const middleware = applyMiddleware();
const store = createStore(reducer, middleware);


store.dispatch({ type: "FOO" })








////////


import { combineReducers, createStore } from 'redux';

const userReducer = (state = {}, action) => {
	switch (action.type) {
		case "CHANGE_NAME":
			return { ...state, name: action.payload };
		case "CHANGE_AGE":
			return { ...state, age: action.payload };
	}
	return state;
}

const tweetsReducer = (state = [], action) => {
	return state;
}

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
});

const store = createStore(reducers); // store.state = { user: {name: "Alice"}, tweets: [] }

store.subscribe(() => {
	console.log('store изменился', store.getState())
})

store.dispatch({ type: "CHANGE_NAME", payload: "Alice" })
store.dispatch({ type: "CHANGE_AGE", payload: 35 })



// store.dispatch({ type: "", payload:  });



//////////
import { applyMiddleware, createStore } from 'redux';

const reducer = (state = 0, action) => {
	if (action.type === 'INC') {
		return state + 1;
	} else if (action.type === "DEC") {
		return state - 1;
	} else if (action.type === "E") {
		throw new Error("AAAA!!!!!!");
	}
	return state;
}

const logger = (store) => (next) => (action) => {
	console.log("сработал action", action);
	next(action);
}

const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch (e) {
		console.log(e);
	}
}

const middlewares = applyMiddleware(logger, error);

const store = createStore(reducer, middlewares);

store.subscribe(() => {
	console.log('store изменился', store.getState())
})

store.dispatch({ type: "E" })
