$(document).ready(() => {
    const sideBar = $('.side-bar');
    const sideBarIcone = $('.side-bar-icone');
    const sideBarItens = $('.side-bar-itens ul');
    const sideBarItem = $('.side-bar-itens ul li');


    sideBar.hover(() => {
        sideBarItens.css('display', 'block');
        sideBarIcone.css('background', '#2a333a');
    }, () => {
        sideBarIcone.css('background', 'none')
        sideBarItens.css('display', 'none');
    });

    sideBarItem.hover(function () {
        $(this).find('ul').removeClass('d-none');        
    }, function () {
        $(this).find('ul').addClass('d-none');
    });
});