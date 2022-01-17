import { rest } from 'msw'
import wizeLineData from './wizeline.mockDat.json'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),

  // Handles a GET
  rest.get(
    'https://www.googleapis.com/youtube/v3/search?q="wizeline"',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(wizeLineData))
    }
  ),
]
