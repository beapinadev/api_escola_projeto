const Professor = require('../models/Professor')

class ProfessorController {

    async cadastrar (req, res) {
        try {

            const email = req.body.email
            const password = req.body.password
            const nome = req.body.nome
            const salario_hora = req.body.salario_hora
            const carga_horaria = req.body.carga_horaria
    
            if (!nome) {
                return res.status(400).json({ mensagem: "O nome é obrigatório." });
            }
    
            const novoProfessor = await Professor.create({ nome, salario_hora, carga_horaria, email, password });
            res.status(201).json(novoProfessor);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Não foi possível cadastrar o professor." });
        }
    }

    async listar (req, res) {
        const { nome } = req.query;

        let professores;

        if (nome) {
        
        professores = await Professor.findAll({ where: { nome } });

        } else {
        
        professores = await Professor.findAll();
    }
    
    res.json(professores);
    }

    async atualizar (req, res) {
        try {
            const { id } = req.params;
            const { nome, salario_hora, carga_horaria, email, password } = req.body;
    
            const professor = await Professor.findByPk(id);
            if (!professor) {
                return res.status(404).json({ mensagem: "Professor não encontrado." });
            }
    
            await professor.update({ nome, salario_hora, carga_horaria, email, password });
    
            res.status(200).json(professor);
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Não foi possível atualizar o professor." });
        }
    }

    async deletar (req, res) {
        try {
            const { id } = req.params;
            const professor = await Professor.findByPk(id);
    
            if (!professor) {
                return res.status(404).json({ mensagem: "Professor não encontrado." });
            }
    
            await professor.destroy({
                where: {
                    id:id
                }
            });
            res.status(204).end();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Não foi possível excluir o professor." });
        }
    }
}

module.exports = new ProfessorController