
var algoliasearch = require('algoliasearch');
var ebay = require('ebay-api');

var client = algoliasearch('8GG9D3L1WY', 'c5765cc3073f984f256556dabcb037bf');
var index = client.initIndex('sneakers'); // sneakers catalog
var index2 = client.initIndex('orders'); // all orders and sales
var index3 = client.initIndex('owns'); // all sneakers that the sellers own, connected to 'sneakers' index

var ebayClient = algoliasearch('8GG9D3L1WY', '0b2a789f304e28f2678b593a34b27fdc');
var ebayIndex = ebayClient.initIndex('ebay');

var devId = 'cada3e87-9a8a-4760-9457-3aa574221bd3';
var certId = 'SBX-5f72088f5e8e-060f-4354-9183-96f1';
var appId = 'Kicktron-Kicktron-SBX-55f72088f-f26bb551';
var startTime = '2018-10-01';
var endTime = '2018-10-27';
var authToken = 'AgAAAA**AQAAAA**aAAAAA**AADVWw**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4ajD5GFoASdj6x9nY+seQ**fr8EAA**AAMAAA**W/Ryr/rI/mVZdy3wFeNM5xvS0w68smGsLjLSoc7RXc2fMTW4hmAOL7h5sEEA8vgrt1qPya8SqeyWcCq+ajZzkWcOi29CjfMB1eaK+c/Agx2DcO5XgnwWjiwUMOwwbRWq/5BQBcckAN9zITYXPQw6porjla7CVVIzKNXb6efFePFh6cKkR+krktv0eDSmyLKGmc3YRq3xauE9Jsg/SPPF7KyMGLezMj/baWrmZJIkWB3rSVmqCsp/9WYA2CFJUQOABtjU45j5WwA1AYgP7XXy70rbd/rf6SSDpMitkf0RRpGKgPBIZh8itL7yAz8hY1jLmKEqB72B3L9cu9V1hLDQpTHZrZYCMJe0e8tEeLtQjS7p9jOTLEqgcD4HXlO8dv6E9FUGeTwUk/iV+9jP+IJ72Gf515JBoPrut5kEKo8vPyU0F2azkhCUsHQ693rxPwBW1fQdu5g76ocwSwwPMP0z49gxa75umXd5EBiz4WSzdn4KY0ZvZaqWziuROGfsOQ1hNVSc4Im8fV0towW+AUT+Zb0pq5dDBXWs8662GDeWL0P49kRbfi7rL4At7w9Yi0r4JY11ItS91qZjFEXTZVaIj0+Ta0zanP7FqQhmsUw31gUnleTV7Ax9weyITi9Behzc4DJpOOUQ3/OGj5zP3TjXGlXURkCUYxCpjn0DqpiGcq3UjM0iW68fAVsPqnhn4HkNvGHh7o4lKy1kvmibR7vTU+RnVgx1dES4daUPgG2WjyLAbooSu/j53pytlPGCpPv3';

var authTokenTwo = "AgAAAA**AQAAAA**aAAAAA**SWXbWw**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6AMlYekAJGCoQydj6x9nY+seQ**wBUFAA**AAMAAA**1c2AmAodl5YvJNwu1Y6GhBjkNpBxzceZ7A0uVZA5YCnnf2bMkFT90SFbNuCW95oncSRHehKEd06E2T2/yEyIur80k1VzHT+g/aUDZUDrgqk8XgtAHolz8k8omZwzLNkhP+T+iieEoWXjS33H5iC1M9vUL6FlbpvgZ6BkCQ7yxCBkyZboDgORORhqtsGKJO3ccCt2df0DPb5ZxrLWiwNv9E+YDt8dny77hDClHHvdY4fbrPdjpKZ6hL0AWzQt2zmwfv2Wd/QQ0v3BuZqujILcWF43KBocTIRO13C2eGo8UipRttep9m9nUC0eMUMwkX0E77ybuBCvAFHZQw2AkNDtndxPWXVZX9i//mmaXR4DLO7tVjgxdN1CydFtcIVRizbV0dV1UAHJkwJ1ZfCXzpsjZ7DjQVhYFBrl5buG0IsQ+Yjy1o3mMLR0cN4MQH5mMA8AdUodex0bFE6Gn5QgsZeLeAuSquXEd90LRUwcp1Zze2QS+w2XcfA+8ZHW4iv5GFjI78dCkXVwWcNh07AIXb/P2XHsgzIHxSX1F3pw6VhJ34uiI9+IjZpN2TPKHZiPyRbdl7P93pjluDptO6iy5eqG34uqOadMC0nNS0rr1VEctWwRog+8d3S7iGHyKiqYtfAWHojPcKbrqC/EZaUm6zOtZL0+AnYeLWFMzF/DT98Lhn2ybJUyiQHdlqlqn/rRQz+b0JDQCB7tj0GHhb3yzT6GLZ99sVaBQCVlmB+ymfCQW6wrgLL73ediTtT3ph/Nwacc";


var devIdTwo =  'cada3e87-9a8a-4760-9457-3aa574221bd3';
var certIdTwo = 'PRD-7f449ff74812-758c-49a4-b7bd-6e17';
var appIdTwo = 'Kicktron-Kicktron-PRD-f7f449ff7-e1b43aa1';
var sandbox =  false;


var btalin2012UID = 'OO3SJxjPadcCfzrT9J73TCqspjt2';

/*index.getObject('', function(err, content) {
        console.log("SNEAKERS");
        console.log(content.hits.length);
	console.log(content.hits[0]);
        console.log("\n\n\n");
    });

index2.getObject('', function(err, content) {
        console.log("ORDERS");
	console.log(content.hits.length);
        console.log(content.hits[0]);
	console.log("\n\n\n");
    });


index3.getObject('', function(err, content) {
        console.log("OWNS");
	console.log(content.hits.length);
        console.log(content.hits[0]);
	var arr = [];
	var set = [];
        for (var i = 0; i < content.hits.length; i++) {
            if (!set.includes(content.hits[i]['objectID'])) {
                var uid = content.hits[i]['uid'];
                var objobj = content.hits[i]['objectID'];
		arr.push([objobj, uid]);
                set.push(objobj);
            }
	}
        console.log(arr);
	console.log("\n\n\n");
	});*/

/*
ebay.xmlRequest({
	serviceName : 'Trading',
	    opType : 'GetOrders',

	    // app/environment
	    devId: 'cada3e87-9a8a-4760-9457-3aa574221bd3',
	    certId: 'SBX-5f72088f5e8e-060f-4354-9183-96f1',
	    appId: 'Kicktron-Kicktron-SBX-55f72088f-f26bb551',
	    sandbox: true,

	    // per user
	    authToken: authToken,

	    params: {
	    'OrderStatus': 'Active',
		'NumberOfDays': 1
		}
    }, function(error, results) {
	// ...
        console.log("EBAY ORDERS");
        console.log(results);
        console.log("\n\n\n");
    });

ebay.xmlRequest({
        serviceName : 'Trading',
            opType : 'GetSellerList',
            devId: 'cada3e87-9a8a-4760-9457-3aa574221bd3',
            certId: 'SBX-5f72088f5e8e-060f-4354-9183-96f1',
            appId: 'Kicktron-Kicktron-SBX-55f72088f-f26bb551',
            sandbox: true,
            authToken: authToken,

            params: {
	        'EndTimeFrom':'2018-10-01',
		'EndTimeTo': '2018-10-27'
            }
    }, function(error, results) {
        console.log("EBAY SELLER LIST");
        console.log(results);
        console.log("\n\n\n");
    });
*/


function ebayRequest(methodName, devId, certId, appId, authToken, params, fn) {

    ebay.xmlRequest({
	    serviceName : 'Trading',
		opType : methodName,
		devId: devId,
		certId: certId,
		appId: appId,
		sandbox: false,
		authToken: authToken,
		params: params
	}, function(error, results) {
	    console.log(methodName);
	    console.log(results);

	    if (fn) fn(results);

	    console.log("\n\n\n");
	});

}


// return the listings from specific seller on ebay
function getEbayListings(devId, certId, appId, authToken, endTimeFrom, endTimeTo, fn, userId) {
    // need to add the ids as params, prbly also the start and end times as well
    // should experiment with if need both a start and end time, or just need one, or don't need at all

    params = {};

    if (userId) {
	params = {
	    'EndTimeFrom': endTimeFrom,
	    'EndTimeTo': endTimeTo,
	    'UserID': userId
	};
    } else {
	params = {
	    'EndTimeFrom': endTimeFrom,
	    'EndTimeTo': endTimeTo
	};
    }

    ebayRequest("GetSellerList", devId, certId, appId, authToken, params);
}


function getAlgoliaListings(index, indexName, fn) {
    index.getObject('', function(err, content) {
	    console.log(indexName);
	    console.log(content.hits.length);
	    console.log(content.hits[0]);

            fn(content);

	    console.log("\n\n\n");
        });
}


function syncEbayListings(index, callback, devId, certId, appId, authToken, startTime, endTime) {
    getEbayListings(devId, certId, appId, authToken, startTime, endTime, function(results) {
	    // algolia data is set to the result of getEbayListings
            for (var i = 0; i < results.length; i++) {
		result = results[i];
                getAlgoliaListings(index, function(content) {
                        // ** TODO **
                        // need to do proper check of includes the result
			if (!content.includes(result)) {
			    index.addObject(result, callback);
			}
		    });
	    }
            getAlgoliaListings(index, function(content) {
		    // ** TODO **
                    // need to do proper check of includes the result
                    for (var i = 0; i < content.length; i++) {
			cont = content[i];
			if (!results.includes(cont)) {
			    index.deleteObject(cont, callback);
			}
		    }
		});
	    //index.addObjects(objects, callback);
	    // EndItem on ebay deletes an item
	    //index.deleteObjects(objects, callback);

	    console.log(results);
	});
    // algolia data is set to the result of getEbayListings

    // play around with algolia and see if can add stuff to the index and then delete it.
    // EndItem on ebay deletes an item

    // also need to have some fake ebay listings or orders so i can see the data format of ebay and see how directly it maps to algolia
}

function updateEbayListings() {
    // modify the listings on ebay based on the data in algolia
}
/*
getEbayListings(devId, certId, appId, authToken, startTime, endTime, function(results) {
	console.log(results);
    });
*/

/*
ebay.xmlRequest({
        serviceName : 'Trading',
            opType : 'GetItem',
            devId: 'cada3e87-9a8a-4760-9457-3aa574221bd3',
            certId: 'PRD-7f449ff74812-758c-49a4-b7bd-6e17',
            appId: 'Kicktron-Kicktron-PRD-f7f449ff7-e1b43aa1',
            sandbox: false,
            authToken: authTokenTwo,

            params: {
	    "ItemID": '372471566880'
		}
    }, function(error, results) {
        console.log("GET USER");
        console.log(results);
        console.log("\n\n\n");
    });
*/


/*getEbayListings(devIdTwo, certIdTwo, appIdTwo, authTokenTwo, startTime, endTime, function(results) {
        console.log("mambo");
        //console.log(results);
    }, "btalin2012");
*/


//getAlgoliaListings(index, "index", function(results){}); 

ebayRequest("GetSellerList", devIdTwo, certIdTwo, appIdTwo, authTokenTwo,
	    {"EndTimeFrom": startTime, "EndTimeTo": endTime, "UserID": "btalin2012"});
//ebayRequest("GetUser", devId, certId, appId, authToken, params);
ebayRequest("GetItem", devIdTwo, certIdTwo, appIdTwo, authTokenTwo, {"ItemID": '372471566880'});

// some angular component has to be made? why? I don't recall 


function updateEbayOrders() {
    // if something is sold on kicktronics, make sure that inventory and sale is reflected in ebay
}

function updateKicktronicsOrders() {
    // if something is sold on ebay, make sure that inventory and sale is reflected in kicktronics
}






/** 

    Use Cases:

    1) populate kicktronics profile with listings from ebay
    2) If listing gets added or deleted from kicktronics, have to also delete it from ebay. Just create add and delete listing method and have
       them call it in their code. This should work for the sync use case, as well as syncing based on orders/sales
    3) what else?
    4)


 */