app.controller('HomeController', HomeController);

function HomeController() {
    vm = this;

    vm.cards = [
        {
            title: 'estados',
            icon: 'fas fa-globe-americas',
            link: '/estados',
        },
        {
            title: 'municipios',
            icon: 'fas fa-map-marked-alt',
            link: '/municipios',
        },
        {
            title: 'ÁREAS DE CONHECIMENTO',
            icon: 'fas fa-graduation-cap',
            link: '/areaDeConhecimento',
        },
        {
            title: 'PROFISSÕES',
            icon: 'fab fa-black-tie',
            link: '/profissao',
        },
        {
            title: 'FUNCIONÁRIOS',
            icon: 'far fa-address-card',
            link: '/funcionario',
        },
        {
            title: '....',
            icon: 'fas fa-align-justify',
            link: '/',
        },
    ]
}