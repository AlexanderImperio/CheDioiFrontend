var myControllers = angular.module("ControllerRead", []);

myControllers.controller('ControllerRead', ['$rootScope', '$scope', '$http', '$location',
    async function ($rootScope, $scope, $http, $location) {
        $rootScope.Funcionarios;

        if (!$rootScope.Funcionarios) {
            $rootScope.Funcionarios = [
                {
                    Endereco: {
                        IdEndereco: 1,
                        IdMunicipio: 10,
                        CEP: 79117270,
                        Bairro: 'Vila Nasser',
                        Logradouro: 'Vila Nasser',
                        Numero: 687,
                        Complemento: 'Casa'
                    },
                    Dependente: {
                        IdDependente: 1,
                        IdEndereco: 1,
                        Nome: 'Leticia Magalhães',
                        CertidaoDeNascimento: '123456789',
                        Rg: '12345678',
                        OrgaoEmissor: 'SEJUSP',
                        Cpf: '04789685264',
                        DataNascimento: '25/03/2000',
                        Sexo: 'Feminino',
                        GrauParentesco: 'Esposa'
                    },
                    Recibo: {
                        IdRecibo: 12,
                        IdFuncionario: 12,
                        DataPadrao: '10/05/2020',
                        ValorInicial: 15000.00,
                        ValorAtual: 20000.00,
                        Pagamento_Adiantamento: 'N',
                        ValorFerias: 500.00
                    },
                    Reajuste: {
                        IdReajuste: 1200,
                        Reajuste_SalarialData: '',
                        Reajuste_SalarialValor: '',
                        Reajuste_SindicalData: '',
                        Reajuste_SindicalValor: ''
                    },
                    Contrato: {
                        IdContrato: 1205,
                        IdFuncionario: 12,
                        IdReajuste: 1200,
                        StatusAtual: 'Ativo',
                        DataDeAdimissao: '22/08/2019',
                        DataRecisao: ''
                    },
                    IdFuncionario: 12,
                    IdDependente: 1,
                    IdEndereco: 1,
                    IdProfissao: 3,
                    IdAreaDeConhecimento: 3,
                    Matricula: 123456,
                    Nome: 'Bruno Garcia',
                    Rg: '20520745',
                    OrgaoEmissor: 'SEJUSP',
                    Cpf: '07895184365',
                    Cnh: '12345678910',
                    DataNascimento: '17/10/1999',
                    Telefone: 67998487021,
                    Celular: 67999466978,
                    Email: 'brunoglouveiro@gmail.com',
                    EstadoCivil: 'Solteiro',
                    Sexo: 'Masculino',
                    Ctps: 12345678,
                    CtpsSerie: 123456,
                    CtpsUf: 'MS',
                    Pispasep: '1234567891011',
                    Interesses: 'Viajar...',
                    Banco: 'Bradesco',
                    ContaBancaria: '123',
                    TipoDeConta: 'Corrente',
                    AgenciaBancaria: '5758',
                    Salario: 20000.00
                },
                {
                    Endereco: {
                        IdEndereco: 1,
                        IdMunicipio: 10,
                        CEP: 79117270,
                        Bairro: 'Vila Nasser',
                        Logradouro: 'Vila Nasser',
                        Numero: 687,
                        Complemento: 'Casa'
                    },
                    Dependente: {
                        IdDependente: 1,
                        IdEndereco: 1,
                        Nome: 'Leticia Magalhães',
                        CertidaoDeNascimento: '123456789',
                        Rg: '12345678',
                        OrgaoEmissor: 'SEJUSP',
                        Cpf: '04789685264',
                        DataNascimento: '25/03/2000',
                        Sexo: 'Feminino',
                        GrauParentesco: 'Esposa'
                    },
                    Recibo: {
                        IdRecibo: 12,
                        IdFuncionario: 12,
                        DataPadrao: '10/05/2020',
                        ValorInicial: 15000.00,
                        ValorAtual: 20000.00,
                        Pagamento_Adiantamento: 'N',
                        ValorFerias: 500.00
                    },
                    Reajuste: {
                        IdReajuste: 1200,
                        Reajuste_SalarialData: '',
                        Reajuste_SalarialValor: '',
                        Reajuste_SindicalData: '',
                        Reajuste_SindicalValor: ''
                    },
                    Contrato: {
                        IdContrato: 1205,
                        IdFuncionario: 12,
                        IdReajuste: 1200,
                        StatusAtual: 'Ativo',
                        DataDeAdimissao: '22/08/2019',
                        DataRecisao: ''
                    },
                    IdFuncionario: 12,
                    IdDependente: 1,
                    IdEndereco: 1,
                    IdProfissao: 3,
                    IdAreaDeConhecimento: 3,
                    Matricula: 123456,
                    Nome: 'Lascanor Garcia',
                    Rg: '20520745',
                    OrgaoEmissor: 'SEJUSP',
                    Cpf: '07895184365',
                    Cnh: '12345678910',
                    DataNascimento: '17/10/1999',
                    Telefone: 67998487021,
                    Celular: 67999466978,
                    Email: 'brunoglouveiro@gmail.com',
                    EstadoCivil: 'Solteiro',
                    Sexo: 'Masculino',
                    Ctps: 12345678,
                    CtpsSerie: 123456,
                    CtpsUf: 'MS',
                    Pispasep: '1234567891011',
                    Interesses: 'Viajar...',
                    Banco: 'Bradesco',
                    ContaBancaria: '123',
                    TipoDeConta: 'Corrente',
                    AgenciaBancaria: '5758',
                    Salario: 20000.00
                },
                {
                    Endereco: {
                        IdEndereco: 1,
                        IdMunicipio: 10,
                        CEP: 79117270,
                        Bairro: 'Vila Nasser',
                        Logradouro: 'Vila Nasser',
                        Numero: 687,
                        Complemento: 'Casa'
                    },
                    Dependente: {
                        IdDependente: 1,
                        IdEndereco: 1,
                        Nome: 'Leticia Magalhães',
                        CertidaoDeNascimento: '123456789',
                        Rg: '12345678',
                        OrgaoEmissor: 'SEJUSP',
                        Cpf: '04789685264',
                        DataNascimento: '25/03/2000',
                        Sexo: 'Feminino',
                        GrauParentesco: 'Esposa'
                    },
                    Recibo: {
                        IdRecibo: 12,
                        IdFuncionario: 12,
                        DataPadrao: '10/05/2020',
                        ValorInicial: 15000.00,
                        ValorAtual: 20000.00,
                        Pagamento_Adiantamento: 'N',
                        ValorFerias: 500.00
                    },
                    Reajuste: {
                        IdReajuste: 1200,
                        Reajuste_SalarialData: '',
                        Reajuste_SalarialValor: '',
                        Reajuste_SindicalData: '',
                        Reajuste_SindicalValor: ''
                    },
                    Contrato: {
                        IdContrato: 1205,
                        IdFuncionario: 12,
                        IdReajuste: 1200,
                        StatusAtual: 'Ativo',
                        DataDeAdimissao: '22/08/2019',
                        DataRecisao: ''
                    },
                    IdFuncionario: 12,
                    IdDependente: 1,
                    IdEndereco: 1,
                    IdProfissao: 3,
                    IdAreaDeConhecimento: 3,
                    Matricula: 123456,
                    Nome: 'Bruno Garcia',
                    Rg: '20520745',
                    OrgaoEmissor: 'SEJUSP',
                    Cpf: '07895184365',
                    Cnh: '12345678910',
                    DataNascimento: '17/10/1999',
                    Telefone: 67998487021,
                    Celular: 67999466978,
                    Email: 'brunoglouveiro@gmail.com',
                    EstadoCivil: 'Solteiro',
                    Sexo: 'Masculino',
                    Ctps: 12345678,
                    CtpsSerie: 123456,
                    CtpsUf: 'MS',
                    Pispasep: '1234567891011',
                    Interesses: 'Viajar...',
                    Banco: 'Bradesco',
                    ContaBancaria: '123',
                    TipoDeConta: 'Corrente',
                    AgenciaBancaria: '5758',
                    Salario: 20000.00
                },
                {
                    Endereco: {
                        IdEndereco: 1,
                        IdMunicipio: 10,
                        CEP: 79117270,
                        Bairro: 'Vila Nasser',
                        Logradouro: 'Vila Nasser',
                        Numero: 687,
                        Complemento: 'Casa'
                    },
                    Dependente: {
                        IdDependente: 1,
                        IdEndereco: 1,
                        Nome: 'Leticia Magalhães',
                        CertidaoDeNascimento: '123456789',
                        Rg: '12345678',
                        OrgaoEmissor: 'SEJUSP',
                        Cpf: '04789685264',
                        DataNascimento: '25/03/2000',
                        Sexo: 'Feminino',
                        GrauParentesco: 'Esposa'
                    },
                    Recibo: {
                        IdRecibo: 12,
                        IdFuncionario: 12,
                        DataPadrao: '10/05/2020',
                        ValorInicial: 15000.00,
                        ValorAtual: 20000.00,
                        Pagamento_Adiantamento: 'N',
                        ValorFerias: 500.00
                    },
                    Reajuste: {
                        IdReajuste: 1200,
                        Reajuste_SalarialData: '',
                        Reajuste_SalarialValor: '',
                        Reajuste_SindicalData: '',
                        Reajuste_SindicalValor: ''
                    },
                    Contrato: {
                        IdContrato: 1205,
                        IdFuncionario: 12,
                        IdReajuste: 1200,
                        StatusAtual: 'Ativo',
                        DataDeAdimissao: '22/08/2019',
                        DataRecisao: ''
                    },
                    IdFuncionario: 12,
                    IdDependente: 1,
                    IdEndereco: 1,
                    IdProfissao: 3,
                    IdAreaDeConhecimento: 3,
                    Matricula: 123456,
                    Nome: 'Bruno Garcia',
                    Rg: '20520745',
                    OrgaoEmissor: 'SEJUSP',
                    Cpf: '07895184365',
                    Cnh: '12345678910',
                    DataNascimento: '17/10/1999',
                    Telefone: 67998487021,
                    Celular: 67999466978,
                    Email: 'brunoglouveiro@gmail.com',
                    EstadoCivil: 'Solteiro',
                    Sexo: 'Masculino',
                    Ctps: 12345678,
                    CtpsSerie: 123456,
                    CtpsUf: 'MS',
                    Pispasep: '1234567891011',
                    Interesses: 'Viajar...',
                    Banco: 'Bradesco',
                    ContaBancaria: '123',
                    TipoDeConta: 'Corrente',
                    AgenciaBancaria: '5758',
                    Salario: 20000.00
                },
                {
                    Endereco: {
                        IdEndereco: 1,
                        IdMunicipio: 10,
                        CEP: 79117270,
                        Bairro: 'Vila Nasser',
                        Logradouro: 'Vila Nasser',
                        Numero: 687,
                        Complemento: 'Casa'
                    },
                    Dependente: {
                        IdDependente: 1,
                        IdEndereco: 1,
                        Nome: 'Leticia Magalhães',
                        CertidaoDeNascimento: '123456789',
                        Rg: '12345678',
                        OrgaoEmissor: 'SEJUSP',
                        Cpf: '04789685264',
                        DataNascimento: '25/03/2000',
                        Sexo: 'Feminino',
                        GrauParentesco: 'Esposa'
                    },
                    Recibo: {
                        IdRecibo: 12,
                        IdFuncionario: 12,
                        DataPadrao: '10/05/2020',
                        ValorInicial: 15000.00,
                        ValorAtual: 20000.00,
                        Pagamento_Adiantamento: 'N',
                        ValorFerias: 500.00
                    },
                    Reajuste: {
                        IdReajuste: 1200,
                        Reajuste_SalarialData: '',
                        Reajuste_SalarialValor: '',
                        Reajuste_SindicalData: '',
                        Reajuste_SindicalValor: ''
                    },
                    Contrato: {
                        IdContrato: 1205,
                        IdFuncionario: 12,
                        IdReajuste: 1200,
                        StatusAtual: 'Ativo',
                        DataDeAdimissao: '22/08/2019',
                        DataRecisao: ''
                    },
                    IdFuncionario: 12,
                    IdDependente: 1,
                    IdEndereco: 1,
                    IdProfissao: 3,
                    IdAreaDeConhecimento: 3,
                    Matricula: 123456,
                    Nome: 'Bruno Garcia',
                    Rg: '20520745',
                    OrgaoEmissor: 'SEJUSP',
                    Cpf: '07895184365',
                    Cnh: '12345678910',
                    DataNascimento: '17/10/1999',
                    Telefone: 67998487021,
                    Celular: 67999466978,
                    Email: 'brunoglouveiro@gmail.com',
                    EstadoCivil: 'Solteiro',
                    Sexo: 'Masculino',
                    Ctps: 12345678,
                    CtpsSerie: 123456,
                    CtpsUf: 'MS',
                    Pispasep: '1234567891011',
                    Interesses: 'Viajar...',
                    Banco: 'Bradesco',
                    ContaBancaria: '123',
                    TipoDeConta: 'Corrente',
                    AgenciaBancaria: '5758',
                    Salario: 20000.00
                },
                {
                    Endereco: {
                        IdEndereco: 1,
                        IdMunicipio: 10,
                        CEP: 79117270,
                        Bairro: 'Vila Nasser',
                        Logradouro: 'Vila Nasser',
                        Numero: 687,
                        Complemento: 'Casa'
                    },
                    Dependente: {
                        IdDependente: 1,
                        IdEndereco: 1,
                        Nome: 'Leticia Magalhães',
                        CertidaoDeNascimento: '123456789',
                        Rg: '12345678',
                        OrgaoEmissor: 'SEJUSP',
                        Cpf: '04789685264',
                        DataNascimento: '25/03/2000',
                        Sexo: 'Feminino',
                        GrauParentesco: 'Esposa'
                    },
                    Recibo: {
                        IdRecibo: 12,
                        IdFuncionario: 12,
                        DataPadrao: '10/05/2020',
                        ValorInicial: 15000.00,
                        ValorAtual: 20000.00,
                        Pagamento_Adiantamento: 'N',
                        ValorFerias: 500.00
                    },
                    Reajuste: {
                        IdReajuste: 1200,
                        Reajuste_SalarialData: '',
                        Reajuste_SalarialValor: '',
                        Reajuste_SindicalData: '',
                        Reajuste_SindicalValor: ''
                    },
                    Contrato: {
                        IdContrato: 1205,
                        IdFuncionario: 12,
                        IdReajuste: 1200,
                        StatusAtual: 'Ativo',
                        DataDeAdimissao: '22/08/2019',
                        DataRecisao: ''
                    },
                    IdFuncionario: 12,
                    IdDependente: 1,
                    IdEndereco: 1,
                    IdProfissao: 3,
                    IdAreaDeConhecimento: 3,
                    Matricula: 123456,
                    Nome: 'Bruno Garcia',
                    Rg: '20520745',
                    OrgaoEmissor: 'SEJUSP',
                    Cpf: '07895184365',
                    Cnh: '12345678910',
                    DataNascimento: '17/10/1999',
                    Telefone: 67998487021,
                    Celular: 67999466978,
                    Email: 'brunoglouveiro@gmail.com',
                    EstadoCivil: 'Solteiro',
                    Sexo: 'Masculino',
                    Ctps: 12345678,
                    CtpsSerie: 123456,
                    CtpsUf: 'MS',
                    Pispasep: '1234567891011',
                    Interesses: 'Viajar...',
                    Banco: 'Bradesco',
                    ContaBancaria: '123',
                    TipoDeConta: 'Corrente',
                    AgenciaBancaria: '5758',
                    Salario: 20000.00
                },
                {
                    Endereco: {
                        IdEndereco: 1,
                        IdMunicipio: 10,
                        CEP: 79117270,
                        Bairro: 'Vila Nasser',
                        Logradouro: 'Vila Nasser',
                        Numero: 687,
                        Complemento: 'Casa'
                    },
                    Dependente: {
                        IdDependente: 1,
                        IdEndereco: 1,
                        Nome: 'Leticia Magalhães',
                        CertidaoDeNascimento: '123456789',
                        Rg: '12345678',
                        OrgaoEmissor: 'SEJUSP',
                        Cpf: '04789685264',
                        DataNascimento: '25/03/2000',
                        Sexo: 'Feminino',
                        GrauParentesco: 'Esposa'
                    },
                    Recibo: {
                        IdRecibo: 12,
                        IdFuncionario: 12,
                        DataPadrao: '10/05/2020',
                        ValorInicial: 15000.00,
                        ValorAtual: 20000.00,
                        Pagamento_Adiantamento: 'N',
                        ValorFerias: 500.00
                    },
                    Reajuste: {
                        IdReajuste: 1200,
                        Reajuste_SalarialData: '',
                        Reajuste_SalarialValor: '',
                        Reajuste_SindicalData: '',
                        Reajuste_SindicalValor: ''
                    },
                    Contrato: {
                        IdContrato: 1205,
                        IdFuncionario: 12,
                        IdReajuste: 1200,
                        StatusAtual: 'Ativo',
                        DataDeAdimissao: '22/08/2019',
                        DataRecisao: ''
                    },
                    IdFuncionario: 12,
                    IdDependente: 1,
                    IdEndereco: 1,
                    IdProfissao: 3,
                    IdAreaDeConhecimento: 3,
                    Matricula: 123456,
                    Nome: 'Bruno Garcia',
                    Rg: '20520745',
                    OrgaoEmissor: 'SEJUSP',
                    Cpf: '07895184365',
                    Cnh: '12345678910',
                    DataNascimento: '17/10/1999',
                    Telefone: 67998487021,
                    Celular: 67999466978,
                    Email: 'brunoglouveiro@gmail.com',
                    EstadoCivil: 'Solteiro',
                    Sexo: 'Masculino',
                    Ctps: 12345678,
                    CtpsSerie: 123456,
                    CtpsUf: 'MS',
                    Pispasep: '1234567891011',
                    Interesses: 'Viajar...',
                    Banco: 'Bradesco',
                    ContaBancaria: '123',
                    TipoDeConta: 'Corrente',
                    AgenciaBancaria: '5758',
                    Salario: 20000.00
                },
                
            ];
        }

        $rootScope.DefineFuncionario = function (Funcionario) {
            $rootScope.FuncionarioAtual = Funcionario;
        }

        $rootScope.CarregarPagina = function (url) {
            $location.path(url);
        }

        $scope.Sort = function (KeyName) {
            $scope.SortKey = KeyName;
            $scope.Reverse = !$scope.Reverse;
        }

        $scope.funcrionarios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
]);

