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
                }
            ];
        }

        $scope.funcrionarios = [1,2,3,4,5,6,7,8,9,10];

        
    }
]);

