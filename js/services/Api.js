app.factory('Api', Api);

Api.$inject = ['$http'];

function Api(http) {
    return {
        get url() {
            return 'https://servicodados.ibge.gov.br/api/v1/'
        },
        estadoList: [],
        municipioList: [],
        areasConhecimentoList: [],
        profissoesList: [],
        listAllEstados: function () {
            return http.get(`${this.url}localidades/estados`)
                .then(response => response.data)
                .then(estadoList => {
                    this.estadoList = estadoList;
                    return estadoList;
                });
        },
        newEstado: function (newEstado) {
            this.estadoList.push(newEstado);
        },
        listAllMunicipios: function () {
            return http.get(`${this.url}localidades/municipios`)
                .then(response => {
                    return response.data.map(municipio => ({
                        id: municipio.id,
                        nome: municipio.nome,
                        uf: municipio.microrregiao.mesorregiao.UF.sigla,
                    }));
                })
                .then(municipioList => {
                    this.municipioList = municipioList
                    return municipioList;
                });
        },

        listAllAreasConhecimento: async function () {

            this.areasConhecimentoList = [
                { id: 1, descricao: "Ciências Exatas e da Terra" },
                { id: 2, descricao: "Matemática" },
                { id: 3, descricao: "Álgebra" },
                { id: 4, descricao: "Conjuntos" },
                { id: 5, descricao: "Lógica Matemática" },
                { id: 6, descricao: "Teoria dos Números" },
                { id: 7, descricao: "Grupos de Álgebra Não - Comutaviva" },
                { id: 8, descricao: "Álgebra Comutativa" },
                { id: 9, descricao: "Geometria Algébrica" },
                { id: 10, descricao: "Análise" },
                { id: 11, descricao: "Análise Complexa" },
                { id: 12, descricao: "Análise Funcional" },
                { id: 13, descricao: "Análise Funcional Não - Linear" },
                { id: 14, descricao: "Equações Diferenciais Ordinárias" },
                { id: 15, descricao: "Equações Diferenciais Parciais" },
                { id: 16, descricao: "Equações Diferenciais Funcionais" },
                { id: 17, descricao: "Geometria e Topologia" },
                { id: 18, descricao: "Geometria Diferencial" },
                { id: 19, descricao: "Topologia Algébrica" },
                { id: 20, descricao: "Topologia das Variedades" },
            ];

            return this.areasConhecimentoList;
        },

        listAllProfissoes: async function () {
            this.profissoesList = [
                { IdProfissao: 1, Descricao: "Investigador particular" },
                { IdProfissao: 2, Descricao: "Gestor público" },
                { IdProfissao: 3, Descricao: "Ginasta artística" },
                { IdProfissao: 4, Descricao: "Ginasta rítmica" },
                { IdProfissao: 5, Descricao: "Ginecologista" },
                { IdProfissao: 6, Descricao: "Gourmet" },
                { IdProfissao: 7, Descricao: "Governador" },
                { IdProfissao: 8, Descricao: "Governanta" },
                { IdProfissao: 9, Descricao: "Grafologista" },
                { IdProfissao: 10, Descricao: "Gravurista" },
                { IdProfissao: 11, Descricao: "Guarda ou policial rodoviário" },
                { IdProfissao: 12, Descricao: "Guarda roupeiro" },
                { IdProfissao: 13, Descricao: "Guardador de veículos" },
                { IdProfissao: 14, Descricao: "Guia turistico" },
                { IdProfissao: 15, Descricao: "Guincheiro" },
                { IdProfissao: 16, Descricao: "Guitarrista" },
                { IdProfissao: 17, Descricao: "Harpista" },
                { IdProfissao: 18, Descricao: "Headhunter" },
                { IdProfissao: 19, Descricao: "Hematologista" },
                { IdProfissao: 20, Descricao: "Historiador" },
                { IdProfissao: 21, Descricao: "Homeopata" },
                { IdProfissao: 22, Descricao: "Hostess" },
                { IdProfissao: 23, Descricao: "Ilustrador" },
                { IdProfissao: 24, Descricao: "Implantodontista" },
                { IdProfissao: 25, Descricao: "Impressor" },
                { IdProfissao: 26, Descricao: "Imunologista" },
                { IdProfissao: 27, Descricao: "Infectologista" },
                { IdProfissao: 28, Descricao: "Inspetor" },
                { IdProfissao: 29, Descricao: "Instalador de linha telefônica" },
                { IdProfissao: 30, Descricao: "Instalador de painéis" }];

            return this.profissoesList;
        },

    }
}