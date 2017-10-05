import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import WelcomeBox from '../../components/welcome-box.js';

const Home = props => (
  <div className="home">
    <h1>Home</h1>
    <WelcomeBox />
  </div>
)

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
