import { RaspService } from '.'

let raspService

beforeEach(async () => {
  raspService = await RaspService.create({ estado: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = raspService.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(raspService.id)
    expect(view.estado).toBe(raspService.estado)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = raspService.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(raspService.id)
    expect(view.estado).toBe(raspService.estado)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
