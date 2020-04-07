var myControllers = angular.module("ControllerUpdate", []);

myControllers.controller('ControllerUpdate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $scope.FuncionarioNome = $rootScope.FuncionarioAtual.Nome;
        $scope.FuncionarioCpf = $rootScope.FuncionarioAtual.Cpf;
        $scope.FuncionarioRg = $rootScope.FuncionarioAtual.Rg;
        $scope.FuncionarioOrgaoEmissor = $rootScope.FuncionarioAtual.OrgaoEmissor;
        $scope.FuncionarioDn = $rootScope.FuncionarioAtual.DataNascimento;
        $scope.FuncionarioCnh = $rootScope.FuncionarioAtual.Cnh;
        $scope.FuncionarioMatricula = $rootScope.FuncionarioAtual.Matricula;
        $scope.FuncionarioDa = $rootScope.FuncionarioAtual.Contrato.DataDeAdimissao;
        $scope.FuncionarioSalario = $rootScope.FuncionarioAtual.Salario;
        $scope.FuncionarioTelefone = $rootScope.FuncionarioAtual.Telefone;
        $scope.FuncionarioCelular = $rootScope.FuncionarioAtual.Celular;
        $scope.FuncionarioEmail = $rootScope.FuncionarioAtual.Email;

        $scope.Atualizar = function () {
            $rootScope.Funcionarios.map(element => {
                
                if (element.IdFuncionario == $rootScope.FuncionarioAtual.IdFuncionario) {

                    if ($scope.FuncionarioNome.toLowerCase() == $rootScope.FuncionarioAtual.Nome.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração NOME');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Nome}?`)) {
                            element.Nome = $scope.FuncionarioNome;
                            alert('Registro alterado com sucesso!');
                        }

                    }
                    if ($scope.FuncionarioCpf.toLowerCase() == $rootScope.FuncionarioAtual.Cpf.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração CPF');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Cpf}?`)) {
                            element.Cpf = $scope.FuncionarioCpf;
                            alert('Registro alterado com sucesso!');
                        }

                    }
                    if ($scope.FuncionarioRg.toLowerCase() == $rootScope.FuncionarioAtual.Rg.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração RG');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Rg}?`)) {
                            element.Rg = $scope.FuncionarioRg;
                            alert('Registro alterado com sucesso!');
                        }

                    }
                    if ($scope.FuncionarioOrgaoEmissor.toLowerCase() == $rootScope.FuncionarioAtual.OrgaoEmissor.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração ORG EMI');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.OrgaoEmissor}?`)) {
                            element.OrgaoEmissor = $scope.FuncionarioOrgaoEmissor;
                            alert('Registro alterado com sucesso!');
                        }

                    }
                    if ($scope.FuncionarioDn.toLowerCase() == $rootScope.FuncionarioAtual.DataNascimento.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração DATA NASC');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.DataNascimento}?`)) {
                            element.DataNascimento = $scope.FuncionarioDn;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.FuncionarioCnh.toLowerCase() == $rootScope.FuncionarioAtual.Cnh.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração CNH');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Cnh}?`)) {
                            element.Cnh = $scope.FuncionarioCnh;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.FuncionarioMatricula == $rootScope.FuncionarioAtual.Matricula) {
                        alert('Não foi feita nenhuma alteração MATRI');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Matricula}?`)) {
                            element.Matricula = $scope.FuncionarioMatricula;
                            alert('Registro alterado com sucesso!');
                        }
                    }                
                    if ($scope.FuncionarioDa == $rootScope.FuncionarioAtual.Contrato.DataDeAdimissao) {
                        alert('Não foi feita nenhuma alteração DATA ADIM');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Contrato.DataDeAdimissao}?`)) {
                            element.Contrato.DataDeAdimissao = $scope.FuncionarioDa;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.FuncionarioSalario == $rootScope.FuncionarioAtual.Salario) {
                        alert('Não foi feita nenhuma alteração SAL');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Salario}?`)) {
                            element.Salario = $scope.FuncionarioSalario;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.FuncionarioTelefone == $rootScope.FuncionarioAtual.Telefone) {
                        alert('Não foi feita nenhuma alteração TEL');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Telefone}?`)) {
                            element.Telefone = $scope.FuncionarioTelefone;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.FuncionarioCelular == $rootScope.FuncionarioAtual.Celular) {
                        alert('Não foi feita nenhuma alteração CEL');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Celular}?`)) {
                            element.Celular = $scope.FuncionarioCelular;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.FuncionarioEmail.toLowerCase() == $rootScope.FuncionarioAtual.Email.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração EMAIL');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Email}?`)) {
                            element.Email = $scope.FuncionarioEmail;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Dependente.DataNascimento.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Dependente.DataNascimento}?`)) {
                            element.Dependente.DataNascimento = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Dependente.Sexo.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Dependente.Sexo}?`)) {
                            element.Dependente.Sexo = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Dependente.GrauParentesco.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Dependente.GrauParentesco}?`)) {
                            element.Dependente.GrauParentesco = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Recibo.DataPadrao.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Recibo.DataPadrao}?`)) {
                            element.Recibo.DataPadrao = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }
                    }        
                    if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Recibo.ValorInicial.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Recibo.ValorInicial}?`)) {
                            element.Recibo.ValorInicial = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Recibo.ValorAtual.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Recibo.ValorAtual}?`)) {
                            element.Recibo.ValorAtual = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Recibo.Pagamento_Adiantamento.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Recibo.Pagamento_Adiantamento}?`)) {
                            element.Recibo.Pagamento_Adiantamento = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }
                    }
                    if ($scope.Funcionario.toLowerCase() == $rootScope.FuncionarioAtual.Recibo.ValorFerias.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.FuncionarioAtual.Recibo.ValorFerias}?`)) {
                            element.Recibo.ValorFerias = $scope.Funcionario;
                            alert('Registro alterado com sucesso!');
                        }
                    };
                }
            });
        }  
    }
]);

