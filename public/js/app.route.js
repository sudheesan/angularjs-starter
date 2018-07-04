app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('home');

    $stateProvider
    .state('home',{
        url:'/home',
        templateUrl:'view/home.html',
        controller:'StarterController'
    })
    .state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'MainController'
    })

})