const Matricula = require('../models/Matricula.js')
const Aluno = require('../models/Aluno.js')


class MatriculaController {

    async cadastrar(req, res) {
        const curso_id = req.body.curso_id
        const aluno_id = req.body.aluno_id

        if (!curso_id || !aluno_id) {
            return res.status(400).json({mensagem: 'O ID do aluno e do curso são obrigatórios'})
        }

        const aluno = await Aluno.findByPk (aluno_id)

        if (!aluno) return res.status(404).json({mensagem: 'O aluno não existe'})

        const matricula = await Matricula.create({
            curso_id: curso_id,
            aluno_id: aluno_id
        })

        res.status(201).json(matricula)
    }

}

module.exports = new MatriculaController