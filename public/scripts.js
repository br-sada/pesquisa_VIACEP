const button = document.querySelector("#button")
const cep = document.querySelector(".cep")
const cepValue = document.querySelector("#cep")
const logradouro_value = document.querySelector("#logradouro")
const bairro_value = document.querySelector("#bairro")
const localidade_value = document.querySelector("#localidade")
const uf_value = document.querySelector("#uf")

const showData = function (results) {

    if(JSON.stringify(results) == '{"erro":true}') {
        alert("Cep não encontrado!")
    } else {
        for (const campos in results) {
            if (document.querySelector("#" + campos)) {
                document.querySelector("#" + campos).innerHTML = results[campos]
            }
        }
    }
}

button.addEventListener("click", function () {

    if (!cep.value) {
        alert("Informe o CEP")

        cepValue.innerHTML = ""
        logradouro_value.innerHTML = ""
        bairro_value.innerHTML = ""
        localidade_value.innerHTML = ""
        uf_value.innerHTML = ""
   
    } else {
        let url = (`https://viacep.com.br/ws/${cep.value}/json/`)

        fetch(url)
            .then(response => {
                response.json()
                    .then(data => showData(data))
            })
            .catch(error => console.log(`ERRO! ${error}`))
    }
})