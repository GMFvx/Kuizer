window.onload = async function() {
    // Fazer uma requisição para verificar se o token está ativo e válido
    const token = sessionStorage.getItem('token'); // Use sessionStorage temporariamente para manter o token entre as páginas

    if (!token) {
        alert('Você não está autenticado');
        window.location.href = 'login.html'; // Redireciona para o login se não estiver autenticado
        return;
    }

    // Fazendo a requisição para o servidor para obter os dados do dashboard
    const response = await fetch('http://localhost:3001/dashboard', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, // Envia o token JWT no cabeçalho de autorização
        }
    });

    const data = await response.json();

    if (response.ok) {
        document.getElementById('dashboardContent').innerText = data.message;
    } else {
        alert('Erro ao carregar o dashboard');
        window.location.href = 'login.html'; // Redireciona se houver erro
    }
};
