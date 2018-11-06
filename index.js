var algoliasearch = require('algoliasearch');
var ebay = require('ebay-api');

var client = algoliasearch('', '');
var index = client.initIndex('sneakers');
var index2 = client.initIndex('orders');
var index3 = client.initIndex('owns');

var ebayClient = algoliasearch('', '');
var ebayIndex = ebayClient.initIndex('ebay');

var devId = '';
var certId = '';
var appId = '';
var startTime = '';
var endTime = '';

var productionToken = "";

var sandbox =  false;


/**
   This method performs an XML Request to the Ebay Developer API.

   Params:
       
       methodName - The name of the method in the Ebay API. Example: "GetSellerList".

       devId, certID, appId - These are all found in the ebay developer account dashboard.

       authToken - This is a userAuthToken that must be retrieved to use the EbayAPI.

       params - This is a dictionary of the parameters that the Ebay API method requires.

       fn - A callback function to perform any logic on the result of the api call.
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

/*
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
*/

function updateEbayListings() {
    // modify the listings on ebay based on the data in algolia
}

function updateEbayOrders() {
    // if something is sold on kicktronics, make sure that inventory and sale is reflected in ebay
}

function updateKicktronicsOrders() {
    // if something is sold on ebay, make sure that inventory and sale is reflected in kicktronics
}

function getUserAuthToken(devId, certId, appId, fn) {
    ebayRequest("FetchToken", devId, certId, appId, params, fn);
}

/* 
   Format for the params is in the link listed below.

   https://developer.ebay.com/devzone/xml/docs/Reference/eBay/AddItem.html
*/
function addEbayListing(devId, certId, appId, authToken, params) {
    ebayRequest("AddItem", devId, certId, appId, authToken, params);
}

/*
  Method to delete an Ebay listing.
 */
function deleteEbayListing(devId, certId, appId, authToken, params) {
    ebayRequest("EndItem", devId, certId, appId, authToken, params);
}



// Example method calls listed below

/*ebayRequest("GetSellerList", devIdTwo, certIdTwo, appIdTwo, authTokenTwo,
     {"EndTimeFrom": startTime, "EndTimeTo": endTime, "UserID": "btalin2012"});*/

//ebayRequest("GetItem", devIdTwo, certIdTwo, appIdTwo, authTokenTwo, {"ItemID": '372471566880'});

//getEbayListings(devId, certId, appId, authToken, endTimeFrom, endTimeTo, fn, userId)
