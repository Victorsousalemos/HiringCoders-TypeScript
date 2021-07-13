interface Usuario {
  nome: string;
  email: string;
  address?: string;
}

function getUser(): Usuario {
  return {
    nome: 'Victor',
    email: 'victor@victor.com'
  }
}

function setUser(Usuario: Usuario) {
  //...
}