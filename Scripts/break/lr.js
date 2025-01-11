/******************************
[rewrite_local]

^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body https://raw.githubusercontent.com/LIONN6/Quantumult-X/main/Scripts/break/lr.js

[mitm] 

hostname = photos.adobe.io

*******************************/
// Assuming this is part of a larger script for Quantumult-X or similar software
let body = $response.body;

// Remove a piece of code or pattern from the body
body = body.replace(/while.{7}\n/, '');

// Parse the JSON body
let response = JSON.parse(body);

// Modify the response object
response['subscription'] = {
    'status': 'active'
};
response['current_subs'] = {
    'product_id': 'com.adobe.lr',
    'store': 'adobe',
    'purchase_date': '2019-10-10T16:32:10.254954Z',
    'sao': {
        'inpkg_CCES': '0',
        'inpkg_CCCLE': '1',
        'inpkg_CCSN': '0',
        'inpkg_CCSV': '0',
        'inpkg_LCCC': '0',
        'inpkg_LPES': '0',
        'inpkg_LRBRL': '0',
        'inpkg_LRMAC': '0',
        'inpkg_LRMC': '0',
        'inpkg_LRMP': '0',
        'inpkg_LRTB': '0',
        'inpkg_PHLT': '0',
        'inpkg_PHLT2': '0',
        'inpkg_PLES': '0',
        'storage_quota': '100'
    }
};
response['storage']['quota'] = {
    'used': 0,
    'limit': 0x10ccccccccd,
    'display_limit': 0x10000000000,
    'warn': 0xe700000000
};
response['storage']['is_unlimited'] = true;

// Convert back to JSON string
body = JSON.stringify(response);

// Complete the response modification
$done({ body: body });