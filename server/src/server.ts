import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "77fa7e348876fe",
      pass: "9eed9d192817a8"
    }
  });

app.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body
    const feedback = await prisma.feedback.create({
        data:{
            type,
            comment,
            screenshot,
        }
    })

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'João Zanin <jwzanin@gmail.com>',
        subject: 'Novo Feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #00000;">`,
            `<p>Tipo de feedback: ${type}<p>`,
            `<p>Comentário: ${comment}<p>`,
            `<div>`
        ].join('\n')
    })
    return res.status(201).json({data: feedback})
})

app.listen(3333, () => {
    console.log('HTTP server running!')
})

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar uma informação
// POST = Cadastrar informações
// PUT = Atualizar informações
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação