
document.getElementById('formRegister')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value

    
        const response = await fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password}),
        });

        const data = await response.json();
        alert(data.message);
    
})

document.getElementById('loginForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Coleta dos valores de email e senha do formulário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Realiza a requisição de login para o servidor
    const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    window.location.href = "../login-user/home2.html"//A DESGRAÇA DO REDIRECIONAMENTO
});


