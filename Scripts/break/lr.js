/******************************
[rewrite_local]

^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body https://raw.githubusercontent.com/LIONN6/Quantumult-X/main/Scripts/break/lightroom.js

[mitm] 

hostname = photos.adobe.io

*******************************/
const body = $response.body.replace(/while.{7}\n/, ''); // 移除"while"开头的干扰内容
let jsonData = JSON.parse(body); // 将响应体解析为JSON

// 修改某些JSON字段的值
jsonData["current_subs"] = {
  "product_id": "example_product",
  "store": "adobe",
  "purchase_date": "2019-10-10T16:32:10.254954Z",
  "sao": {
    "inpkg_CCES": "0",
    "inpkg_CCLE": "1",
    "inpkg_CCSN": "0",
    "inpkg_CCSV": "0",
    "inpkg_LCCC": "0",
    "inpkg_LPES": "0",
    "inpkg_LRBRL": "0",
    "inpkg_LRMAC": "0",
    "inpkg_LRMC": "0",
    "inpkg_LRMP": "0",
    "inpkg_LRTB": "0",
    "inpkg_PHOT": "0",
    "inpkg_PHOT2": "0",
    "inpkg_PLES": "0",
    "storage_quota": "100"
  }
};

// 修改其他字段的值
jsonData["some_other_field"] = "new_value";

// 输出修改后的JSON
$done({ body: JSON.stringify(jsonData) });