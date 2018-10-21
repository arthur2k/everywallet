import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { turnGPIO, index, show } from './controller'
import { schema } from './model'

const router = new Router()
const { estado,color } = schema.tree

/**
 * @api {post} /raspservice Create rasp service
 * @apiName CreateRaspService
 * @apiGroup RaspService
 * @apiParam estado Rasp service's estado.
 * @apiSuccess {Object} raspService Rasp service's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rasp service not found.
 */
router.post('/',
  body({ estado,color }),
  turnGPIO)

/**
 * @api {get} /raspservice Retrieve rasp services
 * @apiName RetrieveRaspServices
 * @apiGroup RaspService
 * @apiUse listParams
 * @apiSuccess {Object[]} raspServices List of rasp services.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /raspservice/:id Retrieve rasp service
 * @apiName RetrieveRaspService
 * @apiGroup RaspService
 * @apiSuccess {Object} raspService Rasp service's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rasp service not found.
 */
router.get('/:id',
  show)

export default router
