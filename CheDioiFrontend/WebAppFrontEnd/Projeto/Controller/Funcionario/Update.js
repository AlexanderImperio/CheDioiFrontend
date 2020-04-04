var myControllers = angular.module("ControllerUpdate", []);

myControllers.controller('ControllerUpdate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $scope.AreaConhecimento = $rootScope.AreaDeConhecimentoAtual.Descricao;

        $scope.Atualizar = function () {
            $rootScope.Funcionario.map(element => {

                if (element.IdFuncionario == $rootScope.FuncionarioAtual.IdFuncionario) {
                    if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Endereco.CEP.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Endereco.CEP}?`)) {
                            element.Endereco.CEP = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    }
                    if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Endereco.Bairro.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Endereco.Bairro}?`)) {
                            element.Endereco.Bairro = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    }
                    if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Endereco.Logradouro.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Endereco.Logradouro}?`)) {
                            element.Endereco.Logradouro = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Endereco.Numero.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Endereco.Numero}?`)) {
                            element.Endereco.Numero = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Endereco.Complemento.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Endereco.Complemento}?`)) {
                            element.Endereco.Complemento = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Dependente.Nome.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Dependente.Nome}?`)) {
                            element.Dependente.Nome = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Dependente.CertidaoDeNascimento.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Dependente.CertidaoDeNascimento}?`)) {
                            element.Dependente.CertidaoDeNascimento = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Dependente.Rg.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Dependente.Rg}?`)) {
                            element.Dependente.Rg = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Dependente.OrgaoEmissor.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Dependente.OrgaoEmissor}?`)) {
                            element.Dependente.OrgaoEmissor = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Dependente.Cpf.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Dependente.Cpf}?`)) {
                            element.Dependente.Cpf = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Dependente.DataNascimento.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Dependente.DataNascimento}?`)) {
                            element.Dependente.DataNascimento = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Dependente.Sexo.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Dependente.Sexo}?`)) {
                            element.Dependente.Sexo = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Dependente.GrauParentesco.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Dependente.GrauParentesco}?`)) {
                            element.Dependente.GrauParentesco = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Recibo.DataPadrao.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Recibo.DataPadrao}?`)) {
                            element.Recibo.DataPadrao = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Recibo.ValorInicial.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Recibo.ValorInicial}?`)) {
                            element.Recibo.ValorInicial = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Recibo.ValorAtual.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Recibo.ValorAtual}?`)) {
                            element.Recibo.ValorAtual = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Recibo.Pagamento_Adiantamento.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Recibo.Pagamento_Adiantamento}?`)) {
                            element.Recibo.Pagamento_Adiantamento = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }

                    } if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Recibo.ValorFerias.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Recibo.ValorFerias}?`)) {
                            element.Recibo.ValorFerias = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }
                    } 
                }

            });
        }

    }
]);

