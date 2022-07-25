export const irParaHome = (navigate) => {
    navigate("/");
};

export const login = (navigate) => {
    navigate("/login");
};

export const cadastro = (navigate) => {
    navigate("/cadastro");
};

export const adicionarReceita = (navigate) => {
    navigate("/adicionar-receita");
};

export const detalhePagina = (navigate, id) => {
    navigate(`/detalhe/${id}`);
};

export const erro = (navigate) => {
    navigate("/erro");
};