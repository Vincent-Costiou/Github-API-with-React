/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';

// Middleware
import ajaxMiddleware from './ajaxMiddleware';

/*
 * Code
 */
const appliedMiddlewares = applyMiddleware(ajaxMiddleware);

const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

const enhancers = compose(appliedMiddlewares, ...devTools);

// createStore
const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;
