import { combineReducers } from 'redux';
import kimlikdogrulamaReducers from './KimlikdogrulamaReducers';

export default combineReducers ({
  kimlikdogrulamaResponse: kimlikdogrulamaReducers
});
