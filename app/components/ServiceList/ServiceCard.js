import React, { PropTypes } from 'react'
import { shell } from 'electron'
import { Link } from 'react-router'
import cx from 'classnames'
import { PATH_NOT_FOUND, PARSING_YAML_FAILED } from '../../constants/errors'
import Card from '../Card'
import Button from '../Button'
import styles from './ServiceCard.css'

const propTypes = {
  service: PropTypes.object,
  showDeleteModal: PropTypes.func,
}

const ServiceCard = ({ service, showDeleteModal }) => {
  return (
    <div className={styles.service} key={service.id}>
      <Link to={`/service/${service.id}`} className={styles.link} />
      <div className={styles.infos}>
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
        {/*<Link
          className={styles.serviceLink}
          to={`/service/${service.id}`}
        >
          <span>{service.config.service}</span>
        </Link>*/}
        <div className={styles.title}>
          {service.config.service}
        </div>
        <div className={styles.path} role="button" onClick={ () => shell.openExternal(`file://${service.projectPath}`) } disabled={!!service.error}>
          <code>
            {service.projectPath}
          </code>
        </div>
        <div className={styles.snippet}>
          {'Lorem ipsum dolor sit amet, adipiscing elit. Donec imperdiet orci quis velit sodales, vel ultrices lorem lacinia. Quisque faucibus, urna scelerisque suscipit feugiat, felis purus pulvinar nisi, vitae ullamcorper turpis tortor quis ligula. Curabitur sit amet laoreet nunc.'}
          {/*'Dolor sit amet, consectetur adipiscing elit. Donec eget bibendum mauris, quis accumsan quam.'*/}
        </div>
        <div className={styles.meta}>
          {`${service.config.provider.name} - ${service.config.provider.runtime}`}
        </div>
      </div>
      <div className={styles.actions}>
        {/* service.error
          ? <Button disabled>View Service</Button>
          : <Link to={`/service/${service.id}`}><Button>View Service</Button></Link>
        */}
        {/*<div
          style={{pointerEvents: 'auto'}}
          className={styles.action}
          disabled={!!service.error}
          onClick={() => shell.openExternal(`file://${service.projectPath}`)}
        >
          O
        </div>*/}
        <div className={styles.action} role='button' onClick={ () => showDeleteModal(service.id) }>
          <div className={styles.icon}>
            <svg viewBox="0 0 100 100" style={{ width: '1em', height: '1em' }}>
              <path className={styles.fill} vector-effect="non-scaling-stroke" d="M59,50c0,5-4,9-9,9s-9-4-9-9s4-9,9-9S59,45,59,50z M14,41c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S19,41,14,41z M86,41 c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S91,41,86,41z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

ServiceCard.propTypes = propTypes

export default ServiceCard
