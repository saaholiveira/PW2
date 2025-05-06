
$("#formExemplo").valiate({
    debug: true,
    ruls:{
        txtemail: {
            required: true,
            email: true,
        },
        txtnome: {
            required: true,
            rangelength: [2, 50],
        },
        txtidade: {
            min: 18,
            max: 100,
            required: true,
    },
    messages:{
        txtemail: {
            required: "Campo obrigatório",
            email: "Email inválido",
        },
        txtidade: {
            min: "Idade mínima 18 anos",
            max: "Idade máxima 100 anos",
            required: "Campo obrigatório",
        },
        txtnome: {
            required: "Nome obrigatório",
            minlength: "Exigido 2 caracteres",
            maxlength: "Até 50 caracteres",
        }
    }
});