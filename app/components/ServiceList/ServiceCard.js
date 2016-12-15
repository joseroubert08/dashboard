import React, { PropTypes } from 'react'
import { shell } from 'electron'
import { Link } from 'react-router'
import { PATH_NOT_FOUND, PARSING_YAML_FAILED } from '../../constants/errors'
import Button from '../Button'
import styles from './ServiceCard.css'

const propTypes = {
  service: PropTypes.object,
  showDeleteModal: PropTypes.func,
}

const ServiceCard = ({ service, showDeleteModal }) => {
  return (
    <div className={styles.service} key={service.id}>
      <div className={styles.info}>
        { service.error && service.error.type === PATH_NOT_FOUND &&
          <div>
            Couldn't find the service path anymore. In case you moved it please remove
            and re-add this service again.
          </div>
        }
        { service.error && service.error.type === PARSING_YAML_FAILED &&
          <div>
            Couldn't parse the serverless.yaml file.
          </div>
        }
        <div className={styles.head}>
          <Link
            className={styles.name}
            to={`/service/${service.id}`}
          >
            {service.config.service}
          </Link>
          <code className={styles.path}>
            {service.projectPath}
          </code>
        </div>
        <div className={styles.body}>
          <div className={styles.snippet}>
            {/*'description text here'*/}
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque tellus nulla, eget.'}
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.vendors}>
            {/*service.config.provider.name*/}
            {/*service.config.provider.runtime*/}
            {'x x'}
          </div>
        </div>
      </div>
      {/*<div className={styles.actions}>
        { service.error
          ? <Button disabled>View Service</Button>
          : <Link to={`/service/${service.id}`}><Button>View Service</Button></Link>
        }
        <Button
          disabled={!!service.error}
          onClick={() => shell.openItem(service.projectPath)}
        >
          Open directory
        </Button>
        <Button
          type='button'
          onClick={() => showDeleteModal(service.id)}
        >
          Remove from list
        </Button>
      </div> */}
    </div>
  )
}

ServiceCard.propTypes = propTypes

export default ServiceCard
