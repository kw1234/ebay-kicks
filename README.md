# ebay-kicks

## Intro:

This module uses a node.js ebay-api (https://github.com/benbuckman/nodejs-ebay-api) to make calls to the Ebay Developer API. Some changes pending are integration with Algolia Search.


## Methods Supported:

### ebayRequest:

This method makes a request to the ebay-api. It is used internally by other methods. It can be called directly by the user as well.

### getEbayListings:

This method makes a "GetSellerList" call to the Ebay Developer API. The parameters "EndTimeFrom" and "EndTimeTo" are the current way to give a time period in the listings returned. Improvements pending.

### getAlgoliaListings:

This method takes in an Algolia index as well as the name of a keyword within the index. It then performs a given function on the content returned.

### getUserAuthToken:

This returns a userAuthToken necessary for performing all the Ebay Developer API calls.

### addEbayListing:

This adds a listing to the user's Ebay profile. The proper paramters are required, and they are quite extensive. See (https://developer.ebay.com/devzone/xml/docs/Reference/eBay/AddItem.html) for full list of possible parameters. However, the user has a choice (to an extent) on which parameters they choose to provide for the listing.

### deleteEbayListing:

This method deletes a listing.