//Considere o array a seguir:
//------------------------------------------------------
const funcionarios = [
  {
    id: 11,
    nome: "joao da silva",
    cpf: "111.222.333-44",
    categoria: "tecnico",
  },
  {
    id: 22,
    nome: "joana da silva",
    cpf: "111.222.333-55",
    categoria: "tecnico",
  },
  {
    id: 23,
    nome: "joana da Mata",
    cpf: "111.222.333-66",
    categoria: "analista",
  },
  {
    id: 24,
    nome: "joana da Mata",
    cpf: "23456789-00",
    categoria: "gerente",
  },
  {
    id: 45,
    nome: "joana da Mata",
    cpf: "111222333-44",
    categoria: "gerente",
  },
  {
    id: 36,
    nome: "joana da Mata",
    cpf: "654321987-23",
    categoria: "gerente",
  },
  {
    id: 27,
    nome: "joana da Mata",
    cpf: "098876654-99",
    categoria: "gerente",
  },
];

function filterEmployeeWithCategoryManager(employee) {
  return employee.categoria == "gerente";
}

const filtedEmployee = funcionarios.filter(filterEmployeeWithCategoryManager);
console.log("filtedEmployee", filtedEmployee);
console.log("===============================================================");

function reduceEmployeeWithSmallerId(acc, employee) {
  if (acc.id > employee.id) {
    acc = employee;
  }
  return acc;
}

const reducedEmployee = funcionarios.reduce(reduceEmployeeWithSmallerId, {
  id: Number.POSITIVE_INFINITY,
});
console.log("reducedEmployee", reducedEmployee);
console.log("===============================================================");
