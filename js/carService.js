define(['./template.js'], function(template) {
    'use strict';

    var ApiUrlPath = 'https://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/'
    var ApiUrlLatest = ApiUrlPath + 'latest-deals.php';
    var ApiUrlCar = ApiUrlPath + 'car.php?carid='

    function loadMoreRequest() {
        fetch(ApiUrlLatest)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                template.appendCar(data.cars);
            })
    }

    function loadCarPage(carId){
        fetch(ApiUrlCar + carId)
        .then(function(response){
            return response.text();
        }).then(function(data){
            console.log(data)
            document.body.insertAdjacentHTML('beforeend', data);
        }).catch(function(){
            alert("Oops, algo salio mal papud");
        });
    }

    return {
        loadMoreRequest: loadMoreRequest,
        loadCarPage :loadCarPage
    }
    
});