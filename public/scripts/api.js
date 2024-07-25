// Comments: I had to locally host the script because the api network
// request failed with the original script link

(function (global) {
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    global.fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    global.submitAPI = function(formData) {
        return true;
    };

    console.log('api.js loaded');
    console.log('fetchAPI:', global.fetchAPI);

}) (window);
