import { rest } from 'msw'

const automations = [
  { id: 'send_email', label: 'Send Email', params: ['to', 'subject', 'body'] },
  { id: 'generate_doc', label: 'Generate Document', params: ['template', 'recipient'] }
]

export const handlers = [
  rest.get('/automations', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(automations))
  }),

  rest.post('/simulate', async (req, res, ctx) => {
    const body = await req.json()
    const nodes = body.nodes || []

    // Basic mock execution
    const logs = nodes.map((n: any, i: number) => ({
      step: i + 1,
      message: `Executed node ${n.id}`
    }))

    return res(ctx.status(200), ctx.json({ ok: true, logs }))
  })
]
