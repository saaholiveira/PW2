
$("#formExemplo").validate({
    debug: true,
    rules: {
        txtemail: {
            required: true,
            email: true
        },
        txtnome: {
            required: true,
            rangelength: [2, 50]
        },
        txtfilhos: {
            min: 0,
            max: 10,
            required: true
        },
        txtsalario: {
            min: 2000,
            max: 10000,
            required: true
        },
        txtadmissao: {
            required: true
        },
        txtredesocial: {
            required: true
        }
    },
    messages: {
        txtemail: {
            required: "Campo obrigatório",
            email: "Email inválido"
        },
        txtidade: {
            min: "mínimo de filhos 0",
            max: "Máximo de gilhos 10",
            required: "Campo obrigatório"
        },
        txtnome: {
            required: "Nome obrigatório",
            minlength: "Exigido 2 caracteres",
            maxlength: "Até 50 caracteres"
        },
        txtsalario: {
            min: "Salário mínimo de R$2000",
            max: "Salário Máximo de R$10000",
            required: "Salário obrigatório"
        },
        txtadmissao: {
            required: "Data de admissão obrigatório"
        },
        txtredesocial: {
            required: "Rede social obrigatória"
        }
    }
});
