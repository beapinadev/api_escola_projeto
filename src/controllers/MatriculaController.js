const Matricula = require('../models/Matricula.js')
const Aluno = require('../models/Aluno.js')


class MatriculaController {

    async cadastrar(req, res) {
        
        try {

        const curso_id = req.body.curso_id
        const aluno_id = req.body.aluno_id

        if (!curso_id || !aluno_id) {
            return res.status(400).json({mensagem: 'O ID do aluno e do curso são obrigatórios'})
        }

        const aluno = await Aluno.findByPk (aluno_id)
        if (!aluno) return res.status(404).json({mensagem: 'O aluno não existe'})

        const curso = await Curso.findByPk(curso_id)
        if(!curso) return res.status(404).json({mensagem: 'O curso não existe'})

        const matriculaExistente = await Matricula.findOne({
            where: {
                curso_id: curso_id, 
                aluno_id: aluno_id
            }
        })
        
        if(matriculaExistente) {
            return res.status(409).json({mensagem: 'O aluno já é cadastrado nesse curso'})
        }

        const matricula = await Matricula.create({
            curso_id: curso_id,
            aluno_id: aluno_id
        })

        res.status(201).json(matricula)
            
        } catch (error) {

            res.status(500).json({ mensagem: 'Não foi possível realizar a matricula' })
        
        }

        
    }

}

module.exports = new MatriculaController