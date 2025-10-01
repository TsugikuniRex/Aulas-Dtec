git init// URL do Servivdor

const { response } = require("express");

// Endereço do Servidor node que está rodando na sua máquina
const API_URL = "http://localhost:3002/usuarios";

// Elementos do container
const userCardsContainer = document.getElementById('user-cards-container');
const addUserForm = document.getElementById('addUserForm');
const btnListUsers = document.getElementById("btnListUsers");

// Elementos do modal
const editmodal = document.getElementById('editModal');
const editUserForm = document.getElementById('editUserForm');
const cancelEdit = document.getElementById('cancelEdit');
const editInput = document.getElementById('editId');
const editNameInput = document.getElementById('editName');
const editAgeInput = document.getElementById('editAge');

function fetchAndRanderUsers(){
    fetch(API_URL)
        .then(response => response.json())
        .then(users => RanderUsers(users)
        .catch(error => {
            console.error("Erro ao buscar Usuários",error);
            userCardsContainer.innerHTML = `<p>Erro apo carregar usuário<p>`
        })
    )
}

function addUser(userData){
    fetch(API_URL, {
        math:"POST",
        headers:{
            'content-Type' : 'aplication/json' 
        },
        body:JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(()=>{
        addUserForm.reset();
        fetchAndRanderUsers();
    })
}

// function mostrarModal(){
//     const modal = document.querySelector('.modal')
//     modal.style.display = 'flex'
// }

// document.addEventListener('click', (e) => {
//     if(e.target.classList.contains('btn-edit')) {
//         mostrarModal()
//     }
// })

