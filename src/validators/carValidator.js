const { checkSchema } = require('express-validator');

module.exports = {
    carManipulate: checkSchema({
        brand: {
            notEmpty: true,
            isLength: {
                options: {
                    min: 2,
                }
            },
            errorMessage: 'Marca precisa de pelo menos 2 caracteres'
        },
        model: {
            notEmpty: true,
            isLength: {
                options: {
                    min: 2,
                }
            },
            errorMessage: 'O Modelo precisa de pelo menos 2 caracteres'
        },
        description: {
            isLength: {
                options: {
                    min: 5
                }
            },
            errorMessage: 'A Descrição precisa de pelo menos 5 caracteres'
        },
        year: {
            isInt: true,
            isLength: {
                options: {
                    min: 4
                }
            },
            errorMessage: 'A Ano precisa ser no formato 2023'
        }
    })
}