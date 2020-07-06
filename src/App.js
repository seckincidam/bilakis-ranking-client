import React, {Component} from 'react';
import {connect} from 'react-redux'
import {RoundView} from './features/round-view'
import {VotingView} from './features/voting-view'
import {Creation} from './features/creation'

class App extends Component {

  render() {
    return (
      <div className="App">
        {this.props.view === 'creation' ?
          <Creation />
          : this.props.view === 'voting' ?
          <VotingView />
          :
          <RoundView />
        }
      </div>
    );
  }

}

function _mapStateToProps(state) {
  return {
    view: state.mainView.view
  }
}

export default connect(_mapStateToProps)(App)
