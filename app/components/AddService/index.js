import React, { Component, PropTypes } from 'react'
import Button from '../Button'
// import walkDirSync from '../../utils/walkDirSync'
// import selectDirectory from '../../utils/selectDirectory'
// import slugify from '../../utils/slugify'
// import getServerlessYamlFilePath from '../../utils/getServerlessYamlFilePath'
// import parseServiceYaml from '../../utils/parseServiceYaml'
// import mergeYamlObjects from '../../utils/yaml/mergeYamlObjects'
// import parseYaml from '../../utils/parseYaml'
import styles from './AddService.css'

class AddScreen extends Component {

  static propTypes = {
    services: PropTypes.object,
    addService: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  createService = () => {
    this.props.history.push('service/create')
  }

  render() {
    return (
      <div className={styles.actions}>
        <div className={styles.action} onClick={this.createService}>
          <div className={styles.icon}>
            <svg viewBox="0 0 100 100" style={{ width: '1em', height: '1em' }}>
              <path d="M5,50h90" style={{ stroke: '#555', fill: 'none', strokeWidth: 1.5 }} vectorEffect="non-scaling-stroke" />
              <path d="M50,95V5" style={{ stroke: '#555', fill: 'none', strokeWidth: 1.5 }} vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default AddScreen
