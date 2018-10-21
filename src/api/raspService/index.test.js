import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { RaspService } from '.'

const app = () => express(apiRoot, routes)

let raspService

beforeEach(async () => {
  raspService = await RaspService.create({})
})

test('POST /raspservice 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ estado: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.estado).toEqual('test')
})

test('GET /raspservice 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /raspservice/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${raspService.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(raspService.id)
})

test('GET /raspservice/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
