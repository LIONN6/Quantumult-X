/******************************
[rewrite_local]

^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body https://raw.githubusercontent.com/LIONN6/Quantumult-X/main/Scripts/break/lr.js

[mitm] 

hostname = photos.adobe.io

*******************************/
const encodedStrings = [
    "wo06w7IEwqjDisO1wrXDlQ==", "w547CjigwqIEAMOy", "wpTCtFOc4Ck=", 
    "LcOxw4A8", "w79PwroJVwrF+w==", "REgNw41+cgsw", 
    "KcOBxNEQ4R==", "wp937Cn2w4k8BP==", 
    "w5RLwrxUDpkk==", "w72jRxBY2L==", 
    "Pic3w7xwS==", "EDV/23w==", 
    "eMkIwosqw==", "wqBia8O1MQ==", 
    "WHBXow49AzVX=="
];

// 解密函数
function decodeString(encodedStr) {
    return atob(encodedStr).split('').map(char => {
        return String.fromCharCode(char.charCodeAt(0) ^ 23);
    }).join('');
}

// 解密所有字符串
const decodedStrings = encodedStrings.map(decodeString);

// 核心逻辑
(function(strings) {
    let state = true;
    return function(func, args) {
        const wrapper = state ? function() {
            const result = func.apply(this, args);
            state = false;
            return result;
        } : function() {};
        return wrapper;
    };
})();

const responseBody = $response.body.replace(/while.{7}\n/, '');
const responseData = JSON.parse(responseBody);

// 修改响应数据
responseData['current_state'] = 'active';
responseData['current_subs'] = {
    'product_id': 'pro',
    'store': 'adobe',
    'purchase_date': '2019-10-10T16:32:10.254954Z',
    'sao': {
        'inpkg_CCES': '0',
        'inpkg_CCLE': '1',
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

// 返回修改后的 JSON 数据
$done({ body: JSON.stringify(responseData) });