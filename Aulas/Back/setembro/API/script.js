// A URL completa da sua API.
// Este é o endereço do seu servidor Node.js que está rodando localmente.
const API_URL = 'http://localhost:3007/pessoas';

// ----------------------
// 1. SELEÇÃO DE ELEMENTOS
// ----------------------
const userCardsContainer = document.getElementById('user-cards-container');
const addUserForm = document.getElementById('addUserForm');
const btnListUsers = document.getElementById('btnListUsers');

// Elementos do Pop-up de Edição
const editModal = document.getElementById('editModal');
const editUserForm = document.getElementById('editUserForm');
const btnCancelEdit = document.getElementById('btnCancelEdit');
const editIdInput = document.getElementById('editId');
const editNameInput = document.getElementById('editName');
const editAgeInput = document.getElementById('editAge');

//Elementos do Modal de Login
const loginModal = document.getElementById('loginModal')
const btnLoginModal = document.getElementById('btnLoginModal')
const btnCancelLogin = document.getElementById('btnCancelLogin')
const adminLoginForm = document.getElementById('adminLoginForm')
const adminAuthStatus = document.getElementById('adminAuthStatus')

//Elementos do Modal de Registro 
const registerModal = document.getElementById('registerModal')
const btnRegisterModal = document.getElementById('btnRegisterModal')
const btnCancelRegister = document.getElementById('btnCancelRegister')
const adminRegisterForm = document.getElementById('adminRegisterForm')
const adminRegisterStatus = document.getElementById('adminRegisterStatus')

// Váriável Global para o Token
let authToken = '';

// ----------------------------
// 2. FUNÇÕES DE INTERAÇÃO COM A API
// ----------------------------

// Função para buscar e renderizar os usuários
function fetchAndRenderUsers() {
    // Faz uma requisição GET para a URL da API
    fetch(API_URL)
        .then(response => response.json()) // Transforma a resposta em JSON
        .then(users => renderUsers(users)) // Chama a função para exibir os usuários
        .catch(error => { // Captura e trata qualquer erro na requisição
            console.error('Erro ao buscar usuários:', error);
            userCardsContainer.innerHTML = '<p>Erro ao carregar usuários. Verifique o servidor.</p>';
        });
}

// Função para adicionar um novo usuário
function addUser(userData) {
    fetch(API_URL, {
        method: 'POST', // Define o método da requisição como POST
        headers: {
            'Content-Type': 'application/json' // Informa que o corpo é um JSON
        },
        body: JSON.stringify(userData) // Converte o objeto JavaScript em JSON
    })
        .then(response => response.json())
        .then(() => {
            // Após a adição, recarrega a lista para mostrar o novo usuário
            addUserForm.reset(); // Limpa o formulário
            fetchAndRenderUsers();
        })
        .catch(error => console.error('Erro ao adicionar usuário:', error));
}

// Função para editar um usuário existente
function editUser(userId, userData) {
    fetch(`${API_URL}/${userId}`, {
        method: 'PUT', // Define o método da requisição como PUT
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(() => {
            // Após a edição, fecha o pop-up e recarrega a lista
            editModal.style.display = 'none';
            fetchAndRenderUsers();
        })
        .catch(error => console.error('Erro ao editar usuário:', error));
}

//Função para Criar Conta - Registrar Administrador
function handleAdminRegister(email, password) {
    adminRegisterStatus.textContent = "Registrando...";
    adminRegisterStatus.style.color = "blue";

    fetch('http://localhost:3007/api/register-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.mensagem && data.mensagem.includes("sucesso")) {
                adminRegisterStatus.style.color = "green";
                adminRegisterStatus.textContent = "Conta criada com sucesso";
                setTimeout(() => {
                    registerModal.style.display = 'none';
                    document.getElementById('regUsername').value = '';
                    document.getElementById('regPassword').value = '';
                }, 2000);
            } else {
                adminRegisterStatus.style.color = "red";
                adminRegisterStatus.textContent = data.mensagem;
            }
        })
        .catch(() => {
            adminRegisterStatus.style.color = "red";
            adminRegisterStatus.textContent = "Erro de rede ou servidor";
        });
}

//Função para login
function handleAdminLogin(email, password) {
    fetch('http://localhost:3007/api/login-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                authToken = data.token;
                adminAuthStatus.style.color = 'green';
                adminAuthStatus.textContent = 'Login realizado com sucesso! Token obtido';
                loginModal.style.display = 'none'
            } else {
                authToken = '';
                adminAuthStatus.style.color = 'red';
                adminAuthStatus.textContent = data.mensagem;
            }
        })
        .catch(() => {
            adminAuthStatus.style.color = 'red';
            adminAuthStatus.textContent = "Erro de rede ou servidor";
        })
}

// Função para deletar um usuário
function deleteUser(userId) {
    if (!authToken) {
        adminAuthStatus.style.color = 'orange';
        adminAuthStatus.textContent = 'ERRO: Faça login para deletar';
        return
    }

    fetch(`${API_URL}/${userId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    })
        .then(response => {
            if (response.status === 401) {
                adminAuthStatus.style.color = 'red';
                adminAuthStatus.textContent = 'Não Autorizado! Token Inválido'
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
        .then(() => {
            fetchAndRenderUsers()
        })
        .catch(error => console.error('Erro ao excluir usuário:', error.mensagem))
}


// ------------------------------------
// 3. FUNÇÃO PARA CRIAR OS CARDS NA TELA
// ------------------------------------

function renderUsers(users) {
    userCardsContainer.innerHTML = ''; // Limpa os cards existentes

    if (users.length === 0) {
        userCardsContainer.innerHTML = '<p>Nenhum usuário cadastrado.</p>';
        return;
    }

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
            <div class="user-info">
                <p><strong>ID:</strong> ${user._id.slice(0, 5)}...</p>
                <p><strong>Nome:</strong> ${user.nome}</p>
                <p><strong>Idade:</strong> ${user.idade}</p>
            </div>
            <div class="card-buttons">
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Excluir</button>
            </div>
        `;

        // Adiciona os botões de ação com os listeners
        const editBtn = userCard.querySelector('.btn-edit');
        const deleteBtn = userCard.querySelector('.btn-delete');

        // Listener para o botão de Edição (abre o pop-up)
        editBtn.addEventListener('click', () => {
            editIdInput.value = user._id;
            editNameInput.value = user.nome;
            editAgeInput.value = user.idade;
            editModal.style.display = 'flex';
        });

        // Listener para o botão de Exclusão
        deleteBtn.addEventListener('click', () => {
            if (confirm(`Tem certeza que deseja excluir o usuário ${user._id.slice(0, 5)}?`)) {
                deleteUser(user._id);
            }
        });

        userCardsContainer.appendChild(userCard);
    });
}


// -------------------------
// 4. LISTENERS DE FORMULÁRIOS
// -------------------------

// Listener para o botão "Listar Usuários"
btnListUsers.addEventListener('click', fetchAndRenderUsers);

// Listener para o formulário de Adicionar Usuário
addUserForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    const newUserName = document.getElementById('addName').value;
    const newUserAge = parseInt(document.getElementById('addAge').value);

    // Chama a função para adicionar usuário
    addUser({ nome: newUserName, idade: newUserAge });
});

// Listener para o formulário de Edição
editUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userId = editIdInput.value;
    const newName = editNameInput.value;
    const newAge = editAgeInput.value;

    // Chama a função para editar usuário
    editUser(userId, { nome: newName, idade: newAge });
});

// Listener para o botão Cancelar do Pop-up
btnCancelEdit.addEventListener('click', () => {
    editModal.style.display = 'none';
});

//Listeners Modal de Login
btnLoginModal.addEventListener('click', () => {
    loginModal.style.display = "flex"
})

btnCancelLogin.addEventListener('click', () => {
    loginModal.style.display = "none"
})

adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('ad minUsername').value;
    const password = document.getElementById('adminPassword').value;
    handleAdminLogin(email, password);
})


//Listeners Modal de Registro
btnRegisterModal.addEventListener('click', () => {
    registerModal.style.display = "flex"
    adminRegisterStatus.textContent = ""
})

btnCancelRegister.addEventListener('click', () => {
    registerModal.style.display = "none"
    adminRegisterStatus.textContent = ""
})

adminRegisterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    handleAdminRegister(email, password);
})

// Opcional: Oculta o modal se clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === editModal) {
        editModal.style.display = 'none';
    } if (e.target === loginModal) {
        editModal.style.display = 'none';
    } if (e.target === registerModal) {
        editModal.style.display = 'none';
    }
});


// -------------------------
// 5. INÍCIO DA APLICAÇÃO
// -------------------------
// Carrega os usuários assim que a página é aberta
fetchAndRenderUsers();