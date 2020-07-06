import {combineReducers} from 'redux'
import competitors from '../features/competitors/reducer'
import roundView from '../features/round-view/reducer'
import mainView from '../features/main-view/reducer'
import votingView from '../features/voting-view/reducer'

export default combineReducers({competitors, mainView, roundView, votingView})