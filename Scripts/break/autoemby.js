//https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Emby.js
//2024.8.24

/*
@Name：通杀所有Emby自动观看保号
@Author：怎么肥事
使用方法：手动观看一次，提示获取成功✅即可食用|可多账号获取
获取完参数请手动关闭重写
[rewrite_local]
^https:\/\/.+\/emby\/Sessions\/Playing\/Stopped url script-request-body https://raw.githubusercontent.com/LIONN6/Quantumult-X/main/Scripts/break/autoemby.js

[task_local]
35 22 15,30 * * https://raw.githubusercontent.com/LIONN6/Quantumult-X/main/Scripts/break/autoemby.js, tag=Emby自动观看, img-url=https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/lige47/emby.png, enabled=true

[MITM]
hostname = -*.fileball.app, *

*/
const isRequest = typeof $request !== 'undefined';
const isSurge = typeof $httpClient !== 'undefined'; 
const isLoon = typeof $loon !== 'undefined'; 
const isQX = typeof $task !== 'undefined'; 

const notify = (title, subtitle, message) => {
    if (isQX) $notify(title, subtitle, message);
    if (isSurge) $notification.post(title, subtitle, message);
    if (isLoon) $notification.post(title, subtitle, message);
};

const setValueForKey = (value, key) => {
    if (isQX) return $prefs.setValueForKey(value, key);
    if (isSurge || isLoon) return $persistentStore.write(value, key);
};

const valueForKey = (key) => {
    if (isQX) return $prefs.valueForKey(key);
    if (isSurge || isLoon) return $persistentStore.read(key);
};

const fetch = (options) => {
    if (isQX) return $task.fetch(options);
    if (isSurge) {
        return new Promise((resolve, reject) => {
            $httpClient.post(options, (error, response, data) => {
                if (error) reject(error);
                else resolve({ statusCode: response.status, headers: response.headers, body: data });
            });
        });
    }
    if (isLoon) {
        return new Promise((resolve, reject) => {
            $httpClient.post(options, (error, response, data) => {
                if (error) reject(error);
                else resolve({ statusCode: response.status, headers: response.headers, body: data });
            });
        });
    }
};
var _0xodK='y.js.cn.v7';const _0x5d7be3=_0x2850;function _0x2850(_0x26d29e,_0x1c1018){const _0x520c6a=_0x1559();return _0x2850=function(_0x15f02c,_0x31e18f){_0x15f02c=_0x15f02c-0x191;let _0x155980=_0x520c6a[_0x15f02c];if(_0x2850['hPFGlN']===undefined){var _0x2850e7=function(_0x1c766e){const _0x1edbea='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x460c5c='',_0x3f5153='',_0x39c493=_0x460c5c+_0x2850e7;for(let _0x508477=0x0,_0x2255a5,_0x3625fe,_0x2e1796=0x0;_0x3625fe=_0x1c766e['charAt'](_0x2e1796++);~_0x3625fe&&(_0x2255a5=_0x508477%0x4?_0x2255a5*0x40+_0x3625fe:_0x3625fe,_0x508477++%0x4)?_0x460c5c+=_0x39c493['charCodeAt'](_0x2e1796+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x2255a5>>(-0x2*_0x508477&0x6)):_0x508477:0x0){_0x3625fe=_0x1edbea['indexOf'](_0x3625fe);}for(let _0x4d7b56=0x0,_0x2bb54f=_0x460c5c['length'];_0x4d7b56<_0x2bb54f;_0x4d7b56++){_0x3f5153+='%'+('00'+_0x460c5c['charCodeAt'](_0x4d7b56)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3f5153);};const _0x32e974=function(_0xd46813,_0x41eaff){let _0x4e7959=[],_0x177657=0x0,_0x27ed5a,_0x8585c6='';_0xd46813=_0x2850e7(_0xd46813);let _0x3422a8;for(_0x3422a8=0x0;_0x3422a8<0x100;_0x3422a8++){_0x4e7959[_0x3422a8]=_0x3422a8;}for(_0x3422a8=0x0;_0x3422a8<0x100;_0x3422a8++){_0x177657=(_0x177657+_0x4e7959[_0x3422a8]+_0x41eaff['charCodeAt'](_0x3422a8%_0x41eaff['length']))%0x100,_0x27ed5a=_0x4e7959[_0x3422a8],_0x4e7959[_0x3422a8]=_0x4e7959[_0x177657],_0x4e7959[_0x177657]=_0x27ed5a;}_0x3422a8=0x0,_0x177657=0x0;for(let _0x14bec0=0x0;_0x14bec0<_0xd46813['length'];_0x14bec0++){_0x3422a8=(_0x3422a8+0x1)%0x100,_0x177657=(_0x177657+_0x4e7959[_0x3422a8])%0x100,_0x27ed5a=_0x4e7959[_0x3422a8],_0x4e7959[_0x3422a8]=_0x4e7959[_0x177657],_0x4e7959[_0x177657]=_0x27ed5a,_0x8585c6+=String['fromCharCode'](_0xd46813['charCodeAt'](_0x14bec0)^_0x4e7959[(_0x4e7959[_0x3422a8]+_0x4e7959[_0x177657])%0x100]);}return _0x8585c6;};_0x2850['MNvRKQ']=_0x32e974,_0x26d29e=arguments,_0x2850['hPFGlN']=!![];}const _0x1bb89d=_0x520c6a[0x0],_0x60178b=_0x15f02c+_0x1bb89d,_0xabfb89=_0x26d29e[_0x60178b];if(!_0xabfb89){if(_0x2850['lNqrfE']===undefined){const _0x43580d=function(_0x281ef8){this['xoRuOh']=_0x281ef8,this['ExONdZ']=[0x1,0x0,0x0],this['iGvisv']=function(){return'newState';},this['zClrfY']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['CZryib']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x43580d['prototype']['AJEBfb']=function(){const _0x3a61a7=new RegExp(this['zClrfY']+this['CZryib']),_0x240456=_0x3a61a7['test'](this['iGvisv']['toString']())?--this['ExONdZ'][0x1]:--this['ExONdZ'][0x0];return this['EtyWQj'](_0x240456);},_0x43580d['prototype']['EtyWQj']=function(_0x194ef3){if(!Boolean(~_0x194ef3))return _0x194ef3;return this['QUAEZf'](this['xoRuOh']);},_0x43580d['prototype']['QUAEZf']=function(_0x33aa57){for(let _0x594078=0x0,_0x5321a4=this['ExONdZ']['length'];_0x594078<_0x5321a4;_0x594078++){this['ExONdZ']['push'](Math['round'](Math['random']())),_0x5321a4=this['ExONdZ']['length'];}return _0x33aa57(this['ExONdZ'][0x0]);},new _0x43580d(_0x2850)['AJEBfb'](),_0x2850['lNqrfE']=!![];}_0x155980=_0x2850['MNvRKQ'](_0x155980,_0x31e18f),_0x26d29e[_0x60178b]=_0x155980;}else _0x155980=_0xabfb89;return _0x155980;},_0x2850(_0x26d29e,_0x1c1018);}(function(_0x4b29c3,_0x2143a4,_0xd63283,_0x4dde57,_0x462d2e,_0x699eb9,_0xcb4bee){return _0x4b29c3=_0x4b29c3>>0x7,_0x699eb9='hs',_0xcb4bee='hs',function(_0x2b67db,_0x5e0fb8,_0x383de6,_0x4a70c2,_0x670212){const _0x1a0920=_0x2850;_0x4a70c2='tfi',_0x699eb9=_0x4a70c2+_0x699eb9,_0x670212='up',_0xcb4bee+=_0x670212,_0x699eb9=_0x383de6(_0x699eb9),_0xcb4bee=_0x383de6(_0xcb4bee),_0x383de6=0x0;const _0x21b29f=_0x2b67db();while(!![]&&--_0x4dde57+_0x5e0fb8){try{_0x4a70c2=parseInt(_0x1a0920(0x1d5,'d*LK'))/0x1*(parseInt(_0x1a0920(0x1ec,'(5SS'))/0x2)+-parseInt(_0x1a0920(0x200,'!#V6'))/0x3*(-parseInt(_0x1a0920(0x1b2,'7e!m'))/0x4)+parseInt(_0x1a0920(0x1d4,'nIX('))/0x5*(-parseInt(_0x1a0920(0x1b4,'CDYq'))/0x6)+-parseInt(_0x1a0920(0x19b,'m#xV'))/0x7+-parseInt(_0x1a0920(0x1dc,'[CJG'))/0x8*(parseInt(_0x1a0920(0x1fb,'zuc3'))/0x9)+-parseInt(_0x1a0920(0x1c4,'sfD6'))/0xa*(-parseInt(_0x1a0920(0x193,'C8$z'))/0xb)+parseInt(_0x1a0920(0x1ed,'UVG#'))/0xc*(parseInt(_0x1a0920(0x1ac,'UVG#'))/0xd);}catch(_0x1a573d){_0x4a70c2=_0x383de6;}finally{_0x670212=_0x21b29f[_0x699eb9]();if(_0x4b29c3<=_0x4dde57)_0x383de6?_0x462d2e?_0x4a70c2=_0x670212:_0x462d2e=_0x670212:_0x383de6=_0x670212;else{if(_0x383de6==_0x462d2e['replace'](/[VINlogxaRPBwWDfru=]/g,'')){if(_0x4a70c2===_0x5e0fb8){_0x21b29f['un'+_0x699eb9](_0x670212);break;}_0x21b29f[_0xcb4bee](_0x670212);}}}}}(_0xd63283,_0x2143a4,function(_0x240ca4,_0x5617af,_0x31e292,_0x259abd,_0x3e84d5,_0x467924,_0x1fcf30){return _0x5617af='\x73\x70\x6c\x69\x74',_0x240ca4=arguments[0x0],_0x240ca4=_0x240ca4[_0x5617af](''),_0x31e292=`\x72\x65\x76\x65\x72\x73\x65`,_0x240ca4=_0x240ca4[_0x31e292]('\x76'),_0x259abd=`\x6a\x6f\x69\x6e`,(0x17f84a,_0x240ca4[_0x259abd](''));});}(0x5e00,0xe0e9d,_0x1559,0xbe),_0x1559)&&(_0xodK=0xbe);const _0x46256a=(_0x48b393,_0x59e445)=>_0x48b393+'_'+_0x59e445,_0x278fe0=_0x5d7be3(0x1e1,'DUy1');function _0x1559(){const _0x12a78c=(function(){return[...[_0xodK,'IyR.WjsgN.xcgnu.rvr7wfuolrfWRBVgDaxP==','AxddSG','lmk6yCoF','mCoAW5Sxqmk3WOL9W6fn','pX/dMI/cGW','aYxdQLaX','WPJcLuXkp8kBW78kWQ0','E2VcOSk5','6k65WR9wWORdH+IVR+AWKow3IoAkP+wlHUInIowoSEISTowlM+MhMowMQUIpK+woMG','o8k2E2xcICom','gCkxwCkr5O+R6i6V','W5iJahK','fs7dO8oMCSoRWPCTgefzkSoOW5q','gCkxwCkr','ECoJkstdN8kDWOqPEJ3dJmkiFvW','W4DaW6TbWPC','WRj2D1NdUgFcVmoOW7JcMJaPiG','BMuuWPZcIq','W7ddN8o/u8on','rmkLBszvW6ZcIa','shpdJMRdLW','oSk6vSosWRX+WRGb','d8oOc35+','6k+b5Rgr5AwP5lUj57+X5BkzW57dMubVAmkGW4pcM100WOHG','W6BdSSoKrSokW63cHXNdNCo1','6zs96k6v5l205OoyW4tdJG','A3Ktz8oInmk4','DSkgWRHAEmkFWO5m','ebBdPNtdVmkXd8o1','DN0sz8oM','WPHgjI3cL8of','hCo0pxadWQ7dJmkfWQ4kkSklWRq','jCkYjs/cUG','fSo6eKDl','q3ecBq','kaldPgqY','W6ZdGbLv','WQhcSmk9cSosW7/cKbxdOmo2','CmkIiSk4gq','AwJdM8ovFSoVE8kCrmo6eSknW6a','W4CfWR7dImot','WRf1CLRdUgBdPSojW6hcSHaf','v2RcOSk8kCk1W4H5eG','cCoZW5VdUtFcG8onpCo6W5/dIq','pmkNE13cHa','5Aw06lsu4P69','s8ksW4hdLs0','mM8PW6FcHa','W4XXW69hWRa','wuVdImkOsaSZcq','p2OTW5pMJPNOJAS','WO5/W4yugW','oSksWRRcMxq','W57dNtzubG','W4GMb2hdIJGzoG','ymkuzZCMp8o+WPvSBCk6xG','5PYR5OIr5yQ95l+v5AYB55UZW7hcPMtMI6xORBVMSzhLPiy'],...(function(){return['zxq1zSoi','gSo6W7xcJY4','W686WObjhCo3W7ntW7tdPq','vNxdTmodWRG','W58eg2/dVa','b8kyWQaQlq','CGRdRhOGhW','W5xcHd7cOSkj','erGLW4OYumovW7y','WQC/W7q2','W6ldTSoisSoV','5PkR5PsI5OMW5yQl8l+/MG','EG/dOeNdMCkRsmoUzbFdKIO','q8kilSkUeq','WQTUW7rRWQTInG','nYrsi8kWyCoRymobdSkwWOVcKa','lCo7FCkC','5P2U5OUl5yIy5lIr5l+D5BAz5l6A5AYW55IV6k+K5Rkr','jepcPCkhwG','utFdVuSs','ACkHeSkMdG','acZdIfWF','y8oxw2xdVCoWW4ZdLeZdNuCU','WQ8/WQ5fWPvJmMyx','WR0NW6qJ','p3a/W4dcVG','xCkno8k0mq','cc3dPvmRWQRdSSkdeSoRW4JcKq','p8kvvCkBW4PQj1NdGZBcJq','WR1wW7JcNmkmW5ZcMvP/W4GhW6tdSq','p8oDrCkuW4q','amkuBmoLWQe','5BwN5A+E5z6T4PY3','W5tcHZZcNSkIW5vZoW','hSknBCkmW5G','m8oWW6DZaW','5P2I5OQT5yIQ5lUS5l6/5Bww5l2V5A2d55Qn6k6q5Ro7','cSkBWQqI','EmohW4pcVctcKCol','hSo0tXj3W73cKCkW','jfJcVCkyEq','pCkks8keW4C','5P6X5OMf5yU65l2O5A+555MHW6ybzoAlK+ITG+AZUUwKSq','W4KpWQVdLW','WRJdVx0CW5y','W6ddHfyzW40','gCo5W5tdUcdcMq','mSowbxRdOq','jCoKW4hdQXa','aIvLW5ZcPSoPW5lcL1XK','W4LpW7PlWP0','tSoxdLH9WRhcIW','eCoEW5WFW6G','DaBdGmkSvSo1ns7cPW','W7TfW7PTWRO','yxiOtSoP'];}())];}());_0x1559=function(){return _0x12a78c;};return _0x1559();};if(isRequest){const _0x22a224=$request[_0x5d7be3(0x1fe,'J)PK')],_0x4eef1d=$request[_0x5d7be3(0x1a0,'UVG#')],_0x51d81d=$request[_0x5d7be3(0x1ff,'O1cZ')],_0x468fa7=_0x4eef1d['X-Emby-Token'];if(!_0x468fa7){notify(_0x5d7be3(0x197,'S#v3'),_0x5d7be3(0x1ba,'zuc3'),_0x5d7be3(0x1a4,'ydK&')),$done({});return;}let _0x4424d1=0x1,_0x1a2ee5,_0x28b844,_0x24e881;while(valueForKey(_0x46256a(_0x278fe0,_0x4424d1+_0x5d7be3(0x1eb,'O)n$')))){if(JSON[_0x5d7be3(0x1f2,'j5QB')](valueForKey(_0x46256a(_0x278fe0,_0x4424d1+_0x5d7be3(0x1c3,'3IxD')))||'{}')[_0x5d7be3(0x1d2,'KK*f')]===_0x468fa7){notify(_0x5d7be3(0x198,'3IxD')+_0x4424d1+'捕获','已存在✅','该Emby请求已成功获取请勿重复获取'),$done({});return;}_0x4424d1++;}_0x1a2ee5=_0x46256a(_0x278fe0,_0x4424d1+'_url'),_0x28b844=_0x46256a(_0x278fe0,_0x4424d1+_0x5d7be3(0x1be,'K$mP')),_0x24e881=_0x46256a(_0x278fe0,_0x4424d1+'_body'),setValueForKey(_0x22a224,_0x1a2ee5),setValueForKey(JSON[_0x5d7be3(0x1b7,'p8Lf')](_0x4eef1d),_0x28b844),_0x51d81d&&setValueForKey(_0x51d81d,_0x24e881),notify('Emby'+_0x4424d1+'捕获','成功✅','多账号获取完即时关闭重写避免不必要的MITM'),$done({});}else{async function _0x49858d(_0x4cc642){const _0x43eea8=_0x5d7be3,_0x52644b={'gnHZj':_0x43eea8(0x1d7,'Ol1G'),'eYzar':function(_0x24052e,_0x1306d9,_0x163acc,_0x2fc973){return _0x24052e(_0x1306d9,_0x163acc,_0x2fc973);},'eBcNF':_0x43eea8(0x1d1,'d*LK'),'LBhNc':function(_0x10c176,_0x22eecb,_0x4daf9f,_0x5b0183){return _0x10c176(_0x22eecb,_0x4daf9f,_0x5b0183);},'HJyoR':_0x43eea8(0x1e6,'7e!m'),'RvvdL':function(_0x4feed0,_0xdbc105){return _0x4feed0(_0xdbc105);},'VXxrt':_0x43eea8(0x1c7,'(5SS'),'xFFrR':function(_0x459f6d,_0xa7d7f){return _0x459f6d+_0xa7d7f;},'IAeOS':_0x43eea8(0x1de,'sEO#'),'GNVCB':function(_0x2633e1,_0x4d9d5f,_0x34a81f){return _0x2633e1(_0x4d9d5f,_0x34a81f);},'fytLd':'_headers','chUrK':function(_0x60fbd7,_0x23d97a){return _0x60fbd7+_0x23d97a;},'YGrbk':'_body','FcoWz':function(_0x52ee67,_0x540f43){return _0x52ee67(_0x540f43);},'gGlea':function(_0x42e17e,_0x22918c){return _0x42e17e||_0x22918c;},'fCShr':_0x43eea8(0x1f0,'1#p1'),'fusIJ':'POST','sROzs':function(_0x35e265,_0x50f5e7){return _0x35e265===_0x50f5e7;},'ttaJn':function(_0x248312,_0x1c0b5e){return _0x248312===_0x1c0b5e;},'ccxWX':_0x43eea8(0x1b5,'F!Hk'),'BHAjL':_0x43eea8(0x1d8,'zuc3'),'HhfMH':function(_0x379391,_0x3393fc,_0xacff58,_0x3aeefd){return _0x379391(_0x3393fc,_0xacff58,_0x3aeefd);}};try{if(_0x52644b['VXxrt']===_0x52644b[_0x43eea8(0x1f3,'(iNu')]){let _0x2442b6=_0x46256a(_0x278fe0,_0x52644b[_0x43eea8(0x1d3,'*D#2')](_0x4cc642,_0x52644b['IAeOS'])),_0x352bd4=_0x52644b['GNVCB'](_0x46256a,_0x278fe0,_0x4cc642+_0x52644b['fytLd']),_0x291a6b=_0x46256a(_0x278fe0,_0x52644b[_0x43eea8(0x1c6,'d*LK')](_0x4cc642,_0x52644b[_0x43eea8(0x19c,'nIX(')])),_0x5275d1=_0x52644b[_0x43eea8(0x1bd,'nIX(')](valueForKey,_0x2442b6),_0xfd9561=_0x52644b[_0x43eea8(0x1c1,'W$&p')](valueForKey,_0x352bd4),_0x13990b=_0x52644b[_0x43eea8(0x1c0,'^Ndc')](valueForKey,_0x291a6b);if(_0x52644b['gGlea'](!_0x5275d1,!_0xfd9561))throw new Error(_0x52644b[_0x43eea8(0x1e0,'*D#2')]);let _0xe866f8=JSON[_0x43eea8(0x1aa,'d*LK')](_0xfd9561);const _0x5e1d42=await _0x52644b[_0x43eea8(0x1cb,'O)n$')](fetch,{'url':_0x5275d1,'method':_0x52644b[_0x43eea8(0x1fa,'W1lq')],'headers':_0xe866f8,'body':_0x13990b});_0x52644b[_0x43eea8(0x1ad,'[CJG')](_0x5e1d42['statusCode'],0xcc)?_0x52644b[_0x43eea8(0x1b9,'m#xV')](_0x52644b['ccxWX'],'LvvKm')?_0x38876f(_0x43eea8(0x1cf,'sEO#'),'错误',_0x52644b[_0x43eea8(0x1fd,'d*LK')]):notify(_0x43eea8(0x19a,'S#v3')+_0x4cc642,_0x52644b[_0x43eea8(0x1b0,'DUy1')],'状态码204'):_0x52644b[_0x43eea8(0x1bb,'Z$X$')]!==_0x52644b['BHAjL']?_0x52644b[_0x43eea8(0x19f,'7e!m')](_0x42990e,_0x43eea8(0x1af,'d*LK')+_0x29f145,_0x52644b[_0x43eea8(0x1fc,'nIX(')],'状态码204'):notify(_0x43eea8(0x1f1,'F!Hk')+_0x4cc642,'失败','状态码:\x20'+_0x5e1d42[_0x43eea8(0x1a5,'7e!m')]);}else{_0x52644b[_0x43eea8(0x1e9,'Mg0e')](_0x20ddbc,'Emby'+_0x493b0b+'捕获',_0x52644b[_0x43eea8(0x1ca,'3IxD')],_0x43eea8(0x195,'S#v3')),_0x52644b['RvvdL'](_0x473480,{});return;}}catch(_0x472d6e){_0x52644b[_0x43eea8(0x1bc,'(N(]')](notify,_0x43eea8(0x1b1,'C8$z')+_0x4cc642,'错误',_0x43eea8(0x1a6,'lgp&')+(_0x472d6e[_0x43eea8(0x1a7,'d*LK')]||_0x472d6e));}}async function _0x5753f5(){const _0x2e17fc=_0x5d7be3,_0x1849ac={'KlJdZ':function(_0x348ef2,_0x158065){return _0x348ef2===_0x158065;},'WHcha':_0x2e17fc(0x1df,'(N(]'),'awNlo':_0x2e17fc(0x1e8,'S#v3'),'RozzM':_0x2e17fc(0x1ee,'zuc3'),'PXpCQ':'(((.+)+)+)+$','MlOvk':function(_0x156ea0,_0x2a30f4){return _0x156ea0===_0x2a30f4;},'wpMxP':_0x2e17fc(0x1ae,'jl]J'),'NemzE':function(_0x775835,_0x5d7485,_0xc9e2bc,_0x3f1141){return _0x775835(_0x5d7485,_0xc9e2bc,_0x3f1141);},'NAiCo':_0x2e17fc(0x1bf,'(N(]'),'WKZqm':function(_0x2e4d61,_0x24b3ce){return _0x2e4d61(_0x24b3ce);},'MxOnY':function(_0x58387b){return _0x58387b();},'Jwjtr':function(_0x57cee8,_0x5b87af){return _0x57cee8+_0x5b87af;},'XvIxB':_0x2e17fc(0x194,'p8Lf'),'ulQHY':function(_0x165768,_0x1860d4){return _0x165768!==_0x1860d4;},'BWRYW':function(_0x2e0a63,_0x466cc7){return _0x2e0a63===_0x466cc7;},'KxcIk':_0x2e17fc(0x1ea,'m#xV')},_0x3a2158=(function(){const _0x5dc8de=_0x2e17fc;if(_0x1849ac[_0x5dc8de(0x1da,'*D#2')]!=='aiLyA')throw new _0x556dcc(_0x5dc8de(0x1c5,'@l)O'));else{let _0x1822a7=!![];return function(_0x422a38,_0x55a198){const _0x23c38b=_0x5dc8de;if(_0x1849ac[_0x23c38b(0x1b3,'*D#2')](_0x1849ac[_0x23c38b(0x1f8,'nIX(')],_0x1849ac['awNlo']))_0x533ae4(_0x43369b,_0xfe63a9);else{const _0x5cfcef=_0x1822a7?function(){const _0x398d9d=_0x23c38b;if(_0x55a198){const _0x7c9290=_0x55a198[_0x398d9d(0x1ef,'S#v3')](_0x422a38,arguments);return _0x55a198=null,_0x7c9290;}}:function(){};return _0x1822a7=![],_0x5cfcef;}};}}()),_0x5d194a=_0x3a2158(this,function(){const _0x2499fe=_0x2e17fc,_0x554e99={'jQkNl':_0x1849ac['PXpCQ']};return _0x1849ac[_0x2499fe(0x1db,'DUy1')](_0x1849ac[_0x2499fe(0x1d0,'7e!m')],_0x1849ac[_0x2499fe(0x1c2,'C8$z')])?_0x5d194a[_0x2499fe(0x1a2,'O1cZ')]()[_0x2499fe(0x1ab,'qtQA')](_0x1849ac['PXpCQ'])[_0x2499fe(0x1a8,'!#V6')]()[_0x2499fe(0x1e2,'S#v3')](_0x5d194a)[_0x2499fe(0x1f4,'SvqQ')](_0x1849ac[_0x2499fe(0x1d9,'@l)O')]):_0x3f232d[_0x2499fe(0x1ce,'IHV%')]()[_0x2499fe(0x196,'m#xV')]('(((.+)+)+)+$')[_0x2499fe(0x1e7,'CIgq')]()[_0x2499fe(0x1b8,'SvqQ')](_0x5c05ac)[_0x2499fe(0x1cc,'@l)O')](cBAlJk[_0x2499fe(0x1a1,'KK*f')]);});_0x1849ac['MxOnY'](_0x5d194a);let _0x50b423=0x1;while(_0x1849ac[_0x2e17fc(0x1e4,'8O@G')](valueForKey,_0x46256a(_0x278fe0,_0x1849ac[_0x2e17fc(0x1c9,'J)PK')](_0x50b423,_0x1849ac[_0x2e17fc(0x19e,'ydK&')])))){if(_0x1849ac[_0x2e17fc(0x1cd,'CIgq')](_0x2e17fc(0x1f6,'SvqQ'),'WoJdX'))await _0x49858d(_0x50b423),_0x50b423++;else{_0x1849ac['NemzE'](_0x39c493,_0x1849ac[_0x2e17fc(0x1e5,'O1cZ')],'失败❌','请求头中缺少X-Emby-Token'),_0x1849ac[_0x2e17fc(0x1a3,'sfD6')](_0x508477,{});return;}}_0x1849ac[_0x2e17fc(0x191,'IWu&')](_0x50b423,0x1)&&_0x1849ac[_0x2e17fc(0x192,'DUy1')](notify,_0x2e17fc(0x1d6,'8O@G'),'错误',_0x1849ac[_0x2e17fc(0x1f5,'3RiQ')]),_0x1849ac['MxOnY']($done);}_0x5753f5();}
