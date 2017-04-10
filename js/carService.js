define(['./template.js','./carStorage.js'], function(template, carStorage) {
    'use strict';

    var apiUrlPath = 'https://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/';
    var apiUrlLatest = apiUrlPath + 'latest-deals.php';
    var apiUrlCar = apiUrlPath + 'car.php?carId=';

    function loadMoreRequest() {
        fetchPromise()
        .then(function(status){
            document.getElementById("connection-status").innerHTML = status;
            loadMore();
        });
    }

    function fetchPromise() {
        return new Promise(function (resolve, reject) {
            fetch(apiUrlLatest + "?carId=" + carStorage.getLastCarId())
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data.cars)
                carStorage.addCars(data.cars)
                    .then(function () {
                        resolve("Todo chido, hay conexión")
                    })
            }).catch(function (e) {
                resolve("no hay conexión a la red")
            })
            setTimeout(function () {
                resolve("mostrando los resultados guardados")
            }, 3000);
        })
    }

    function loadMore(){
        carStorage.getCars().then(function(cars){
            template.appendCars(cars);
        });
    }

    function loadCarPage(carId){
        fetch(apiUrlCar + carId)
        .then(function(response){
            return response.text();
        }).then(function(data){
            document.body.insertAdjacentHTML('beforeend', data);
        }).catch(function(){
            alert("Oops, can't retrieve page");
        });
    }

    return {
        loadMoreRequest: loadMoreRequest,
        loadCarPage :loadCarPage
    }
    
});