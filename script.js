const nome = document.getElementById('name');
const senha = document.getElementById('password');
const email = document.getElementById('email');
const confirm = document.getElementById('passwordConfirm')
function valida(){
    if(nome.value==''){
        alert("campo nome em branco")
        nome.focus()
        return false

    }
    if(email.value =='' || email.value.length < 5 || email.value.search('@') == -1){
        alert('Campo email inválido')
    }
    if(senha.value == ''){
        alert('Campo senha em branco')
        senha.focus()
        return false
    }
    if(senha.value.length < 8){
        alert('Senha deve conter ao menos 8 caracteres')
        senha.focus()
        return false
    }
    if(confirm.value != senha.value){
        alert('Senhas não conferem')
        return false
    }
    return true
}
