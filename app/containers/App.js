import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { shell } from 'electron'
import Logo from '../../static/images/bolt.svg'
// import Feedback from '../components/Feedback'
import checkForUpdates from '../utils/checkForUpdates'
import SettingsIcon from '../../static/images/settings.svg'
import styles from './App.css'
import AddService from '../components/AddService'
import addService from '../actions/addService'

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  constructor(props, context) {
    super(props, context)
    this.state = {
      update: false,
      filterText: '',
    }
  }
  componentDidMount() {
    checkForUpdates().then((data) => {
      console.log('check', data)
      if (data.version) {
        this.setState({
          update: data
        })
        // eslint-disable-next-line no-console
        console.log('version out of date!')
        // eslint-disable-next-line no-console
        console.log('new version data', data)
        // do update alert
      }
    })
  }
  handleDownload = (e) => {
    e.preventDefault()
    shell.openExternal('http://bit.ly/serverless-dashboard')
  }
  handleFilterInput = (e) => {
    this.setState({
      filterText: e.target.value
    })
  }

  render() {
    const { update } = this.state
    let updateText
    if (update) {
      updateText = (
        <div className={styles.update} onClick={this.handleDownload}>
          🎉 Good news. An update is available! <b>Click to Download v{update.version} 🚀</b>
        </div>
      )
    }
    return (
      <div className={styles.app}>
        {/*<div className={styles.chrome}>
          <div className={styles.title}>
            {'Title'}
          </div>
        </div>*/}
        <div className={styles.head}>
          <div className={styles.search}>
            <label className={styles.label}>
              {'Search services'}
            </label>
            <input className={styles.input} type="text" tabIndex={1} onChange={this.handleFilterInput} />
          </div>
          <AddService
            addService={this.props.addService}
            credentials={this.props.credentials}
            services={this.props.services}
            history={this.props.history}
          />
          {/*<div className={styles.border} />*/}
        </div>
        <div className={styles.body}>
          {this.props.children}
        </div>
        {/* <Feedback /> */}
        <Link className={styles.killme} to='/' />
      </div>
    )
  }
}
