define([], function() {
    'use strict';
    
    if('serviceWorker' in navigator){
        navigator.serviceWorker
            .register("sw.js").then(function (swRegistration) {

                var swRegistration;

                if (swRegistration.installing) {

                    console.log("Resolverd at installing: ", swRegistration)
                    serviceWorker = swRegistration.installing;

                } else if (swRegistration.waiting) {

                    console.log("Resolving as installed/waiting: ", swRegistration);
                    serviceWorker = swRegistration.waiting;

                }else if(swRegistration.active){

                    console.log("Resolved as activated: ", swRegistration);
                    serviceWorker = swRegistration.active

                }

                if (serviceWorker) {
                    self.addEventListener("stateChange", function (e) {
                        console.log(e.target.state);
                    })
                }

            }).catch(function (error) {
                console.log("Error", error);
            })
    }
    
});