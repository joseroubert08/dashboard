import React from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import addCredentials from '../actions/addCredentials'
import AddCredentials from '../components/AddCredentials'
import ServiceList from './ServicesList'
import Welcome from './Welcome'

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials,
    services: state.services,
  }
}

const Dashboard = (props) => {
  if (isEmpty(props.credentials)) {
    return <AddCredentials addCredentials={props.addCredentials} />
  }
  if (isEmpty(props.services)) {
    return <Welcome history={props.history} />
  }
  return <ServiceList history={props.history} />
}

export default connect(mapStateToProps, {
  addCredentials,
})(Dashboard)
