var myControllers = angular.module("ControllerCreate", []);

myControllers.controller('ControllerCreate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $scope.TemDependente;

         $scope.Cadastrar = function () {
             const NovoCadastro = {
                 Endereco: {
                     IdEndereco: null,
                     IdMunicipio: null,
                     CEP: $scope.Cep,
                     Bairro: $scope.Bairro,
                     Logradouro: $scope.Logradouro,
                     Numero: $scope.Numero,
                     Complemento: $scope.Complemento
                 },
                 Dependente: {
                     IdDependente: null,
                     IdEndereco: null,
                     Nome: $scope.NomeDependente,
                     CertidaoDeNascimento: $scope.CertidaoNascimento,
                     Rg: $scope.RgDependente,
                     OrgaoEmissor: $scope.OrgaoDependente,
                     Cpf: $scope.CpfDependente,
                     DataNascimento: $scope.DataNascimentoDependente,
                     Sexo: $scope.SexoDependente,
                     GrauParentesco: $scope.GrauParentesco
                 },
                 Recibo: {
                     IdRecibo: null,
                     IdFuncionario: null,
                     DataPadrao: $scope.DataPadrao,
                     ValorInicial: $scope.ValorInicial,
                     ValorAtual: $scope.ValorAtual,
                     Pagamento_Adiantamento: null,
                     ValorFerias: $scope.ValorFerias
                 },
                 Reajuste: {
                     IdReajuste: null,
                     Reajuste_SalarialData: $scope.Reajuste_SalarialData,
                     Reajuste_SalarialValor: $scope.Reajuste_SalarialValor,
                     Reajuste_SindicalData: $scope.Reajuste_SindicalData,
                     Reajuste_SindicalValor: $scope.Reajuste_SindicalValor
                 },
                 Contrato: {
                     IdContrato: null,
                     IdFuncionario: null,
                     IdReajuste: null,
                     StatusAtual: $scope.StatusAtual,
                     DataDeAdimissao: $scope.DataDeAdimissao,
                     DataRecisao: $scope.DataRecisao
                 },
                 IdFuncionario: null,
                 IdDependente: null,
                 IdEndereco: null,
                 IdProfissao: null,
                 IdAreaDeConhecimento: null,
                 Matricula: $scope.Matricula,
                 Nome: $scope.Nome,
                 Rg: $scope.Rg,
                 OrgaoEmissor: $scope.OrgaoEmissor,
                 Cpf: $scope.Cpf,
                 Cnh: $scope.Cnh,
                 DataNascimento: $scope.DataNascimento,
                 Telefone: $scope.Telefone,
                 Celular: $scope.Celular,
                 Email: $scope.Email,
                 EstadoCivil: $scope.EstadoCivil,
                 Sexo: $scope.Sexo,
                 Ctps: $scope.Ctps,
                 CtpsSerie: $scope.CtpsSerie,
                 CtpsUf: $scope.CtpsUf,
                 Pispasep: $scope.PisPasep,
                 Interesses: $scope.Interesses,
                 Banco: $scope.Banco,
                 ContaBancaria: $scope.Conta,
                 TipoDeConta: $scope.TipoDeConta,
                 AgenciaBancaria: $scope.Agencia,
                 Salario: $scope.Salario
             };
             console.log(NovoCadastro);
        };

        $scope.AbaDependetes = function () {
            if (!$scope.TemDependente) {
                $scope.NomeDependente = null;
                $scope.CertidaoNascimento = null;
                $scope.RgDependente = null;
                $scope.OrgaoDependente = null;
                $scope.CpfDependente = null;
                $scope.DataNascimentoDependente = null;
                $scope.SexoDependente = null;
                $scope.GrauParentesco = null;
            }
        }
       
    }
]);

