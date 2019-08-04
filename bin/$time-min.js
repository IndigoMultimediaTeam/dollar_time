const $time=function(){const a=(({time:a,date:e,seconds:i})=>({time:a,date:e,time_seconds:Object.assign(i,a),date_time:Object.assign({},a,e),date_time_seconds:Object.assign({},Object.assign(i,a),e)}))({time:{hour:"2-digit",minute:"2-digit"},date:{year:"numeric",day:"2-digit",month:"2-digit"},seconds:{second:"2-digit"}}),e=(({dash:a,colon:e,space:i,two_dig:r})=>({SQL_DATE:[["year","numeric"],a,["month",r],a,["day",r]],SQL_TIME:[["hour",r,"h23"],e,["minute",r],e,["second",r]],SQL:[["year","numeric"],a,["month",r],a,["day",r],i,["hour",r,"h23"],e,["minute",r],e,["second",r]]}))({dash:["text","-"],colon:["text",":"],space:["text"," "],two_dig:"2-digit"}),i=["th","st","nd","rd"],r=a=>-1!==a.indexOf("-"),n=a=>-1!==a.indexOf("T");let t="en-GB",c="";const s=Object.freeze(["Africa/Abidjan","Africa/Accra","Africa/Algiers","Africa/Bissau","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/El_Aaiun","Africa/Johannesburg","Africa/Juba","Africa/Khartoum","Africa/Lagos","Africa/Maputo","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Asuncion","America/Atikokan","America/Bahia_Banderas","America/Bahia","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson_Creek","America/Dawson","America/Denver","America/Detroit","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Chicago","America/Chihuahua","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port_of_Spain","America/Port-au-Prince","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Chita","Asia/Choibalsan","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Budapest","Europe/Bucharest","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Helsinki","Europe/Chisinau","Europe/Istanbul","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Saratov","Europe/Simferopol","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zaporozhye","Europe/Zurich","Indian/Cocos","Indian/Chagos","Indian/Christmas","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Reunion","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Chatham","Pacific/Chuuk","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis"]),o=Object.freeze({"-01:00":238,"-02:00":242,"-03:00":107,"-04:00":49,"-05:00":92,"-06:00":62,"-07:00":120,"-08:00":337,"-09:00":320,"-09:30":330,"-10:00":323,"-11:00":332,"+01:00":15,"+02:00":8,"+03:00":270,"+04:00":306,"+04:30":191,"+05:00":221,"+05:30":173,"+05:45":194,"+06:00":207,"+06:30":232,"+07:00":182,"+08:00":220,"+08:30":210,"+08:45":249,"+09:00":176,"+09:30":248,"+10:00":229,"+11:00":314,"+12:00":345,"+13:00":316,"+14:00":326,BST:275,CET:284,EET:264,WET:274});function u(a){return m(a.toISOString())}function A(){return m((new Date).toISOString())}function m(a){let e,i,r="",n="",t="",c="";for(;a.length;)e=a[0],/\d/.test(e)?a.search(/\d\d\d\d-\d\d-\d\d/)?a.search(/\d\d\/\d\d\/\d\d\d\d/)?a.search(/\d\d:\d\d:\d\d/)?a.search(/\d\d:\d\d/)?a=a.substr(1):(n="T"+a.substr(0,5)+":00",a=a.substr(5)):(n="T"+a.substr(0,8),a=a.substr(8)):(r=a.substr(0,10).split("/").sort(()=>-1).join("-"),a=a.substr(10)):(r=a.substr(0,10),a=a.substr(10)):/[ ,\._]/.test(e)||/T\d/.test(e)?a=a.substr(1):a.search(/[\+\-]\d\d:\d\d/)?a.search(/[A-Z]{2,}/)?"Z"===e?(t="Z",a=a.substr(1)):a=a.substr(1):(c=-1===(i=a.search(/[^A-Z]/))?a:a.substr(0,i),a=a.substr(c.length),"CET"===c&&(t=c,c="")):(c=a.substr(0,6),a=a.substr(6),Reflect.has(o,c)&&(t=c,c="")),r&&n&&t&&(a="");return[r,n,t]}function l(a=e.SQL,{locale:i=t,declension:r=!0,timeZone:n=c}={}){return e=>a.map(function(a,e,i,r){const n=y.bind(null,i);return function([t,c,s]){let o=function(a,e,i,r,n,t,c,s){switch(!0){case"text"===e:return i;case"week"===e:return S(a,c);case"weekday"===e&&"numeric"===i:return P()(a);case"month"===e&&"long"===i&&n:return a.toLocaleString(t,s({[e]:i,day:"numeric"})).replace(/[\d \.\/\\]/g,"");case"hour"===e&&"a"===r.toLowerCase():return a.toLocaleString("A"===r?"en-US":"en-GB",s({[e]:i,hourCycle:"h12"})).replace(/[\d \.\/\\]/g,"");case"hour"===e:return a.toLocaleString(t,s({[e]:i,hourCycle:r})).replace(/[ \.\/\\pam]/gi,"");default:return a.toLocaleString(t,s({[e]:i}))}}(a,t,c,s,r,e,i,n);return"2-digit"===c&&1===String(o).length&&(o="0"+o),"two_letters"===s?o=o.substr(0,2):"ordinal_number"===s&&-1!==e.indexOf("en")&&(o=C(o)),o}}(d(e),i,n,r)).join("")}function d([a,e,i]=[]){return a||(a=A()[0]),e||(e="T00:00:00"),i||(i=k(a)),"CET"===i&&(i=h([a,e])),new Date(a+e+i)}function g(a,e=1){const i=!!a&&d(a).getTime();return function(a){return(d(a).getTime()-(i||d(A()).getTime()))/e}}function f(a){const{abs:e,floor:i,round:r}=Math,n=a<0?"%s ago":"in %s";return(a=e(a))<1500?"now":(a=i(a/1e3))<10?n.replace("%s","a few seconds"):a<60?n.replace("%s",a+" seconds"):1===(a=i(a/60))?n.replace("%s","a minute"):a<60?n.replace("%s",a+" minutes"):1===(a=r(a/60))?n.replace("%s","an hour"):a<24?n.replace("%s",a+" hours"):1===r(a/=24)?n.replace("%s","a day"):a<29.5?n.replace("%s",r(a)+" days"):1===r(a/=30.41666)?n.replace("%s","a month"):a<12?n.replace("%s",r(a)+" months"):1===(a=r(a/12))?n.replace("%s","a year"):n.replace("%s",a+" years")}function h([a,e]=[]){if(!a||!e){let i=A();a||(a=i[0]),e||(e=i[1].replace(/\.\d+/,""))}const i=a+e,r=a.split("-").reverse().join("/")+", "+e.replace("T",""),[n,t]=["+01:00","+02:00"].map(a=>new Date(i+a).toLocaleString("en-GB",{timeZone:"Europe/Prague"}));return r===n?"+01:00":r===t?"+02:00":"Z"}function p(a,e=c){return e?b(M(a),e):M(a).getTimezoneOffset()}function b(a,e=c){const[i="+",r=0,n=0]=a.toLocaleString("en-GB",{timeZone:e,weekday:"short",timeZoneName:"short"}).replace(/(\+|\-)/g,(a,e)=>e+":").replace(/[^\d:\+\-]/g,"").split(":");return("-"===i?-1:1)*(60*Number(r)+Number(n))-a.getTimezoneOffset()}function k(a){return E(p(a))}function y(a,e){return a?-1!==s.indexOf(a)?Object.assign({timeZone:a},e):void 0!==o[a]?Object.assign({timeZone:s[o[a]]},e):e:e}function M(a){return a?(Array.isArray(a)||(a=m(a)),new Date(...a[0].split("-").map((a,e)=>1===e?+a-1:+a))):new Date}function E(a){const{floor:e,abs:i}=Math;let r=a>0?"-":"+";return r+=D(e((a=i(a))/60))+":"+D(a%60)}function _(a){return e=>(e.setDate(e.getDate()+a),e)}function P(a="numeric",{locale:e=t,timeZone:i=c}={}){return"numeric"===a?a=>a.getDay():r=>r.toLocaleString(e,{timeZone:i,weekday:a})}function S(a,e=c){const i=new Date(a.valueOf());e&&i.setMinutes(i.getMinutes()+b(a,e)),i.setDate(i.getDate()+3-(a.getDay()+6)%7);var r=i.valueOf();return i.setMonth(0,1),4!==i.getDay()&&i.setMonth(0,1+(4-i.getDay()+7)%7),1+Math.ceil((r-i)/6048e5)}function T(a,e,i){const r=a.substr(3);return i["set"+r](i["get"+r]()+e),i}function D(a){return 1===(a=String(a)).length?"0"+a:a}function w(a,e=(new Date).getFullYear()){return new Date(+e,+a,0).getDate()}function C(a){const e="number"==typeof a?a:parseInt(a);if(isNaN(e))return a;let r=e%100;return a+(i[(r-20)%10]||i[r]||i[0])}return{_:void 0,fromNow:A,fromString:function(a,e=c){if(!a)return A();let i=m(a);return 3!==i.length?r(i[0])?n(i[1])?i[2]=e:(i[2]=i[1]||e,i[1]=""):i.unshift(""):!i[2]&&e&&(i[2]=e),i},fromDate:u,fromDateArguments:function(...a){return m((a.filter(a=>void 0!==a).length?new Date(...a):new Date).toISOString())},toDate:d,toString:function(a,e){return l(Array.isArray(a)?a:a?function(a=""){let e,i,r=[];for(;a.length;)switch(a[0]){case"M":n();break;case"d":t();break;case"W":s("week","W");break;case"Y":c();break;case"D":s("day","D");break;case"H":o("hour","H","h23");break;case"k":o("hour","k","h24");break;case"h":o("hour","h","h12");break;case"A":u("A");break;case"a":u("a");break;case"m":A("minute","m");break;case"s":A("second","s");break;case"[":m();break;default:i=a[0],(e=r.length-1)>-1&&"text"===r[e][0]?r[e][1]+=i:r.push(["text",i]),a=a.substring(1)}function n(){let e="numeric";if(a.search(/MMMM/))if(a.search(/MMM/))if(a.search(/MM/)){if(!a.search(/Mo/))return a=a.substring(2),r.push(["month",e,"ordinal_number"]);a=a.substring(1)}else e="2-digit",a=a.substring(2);else e="short",a=a.substring(3);else e="long",a=a.substring(4);r.push(["month",e])}function t(){let e="numeric";if(a.search(/dddd/))if(a.search(/ddd/)){if(!a.search(/dd/))return e="short",a=a.substring(2),r.push(["weekday",e,"two_letters"]);a=a.substring(1)}else e="short",a=a.substring(3);else e="long",a=a.substring(4);r.push(["weekday",e])}function c(){let e="2-digit";a.search(/YYYY/)?a=a.substring(2):(e="numeric",a=a.substring(4)),r.push(["year",e])}function s(e,i){let n="numeric";if(!a.search(new RegExp(i+"o")))return a=a.substring(2),r.push([e,n,"ordinal_number"]);a.search(new RegExp(i+i))?a=a.substring(1):(n="2-digit",a=a.substring(2)),r.push([e,n])}function o(e,i,n){let t="numeric";a.search(new RegExp(i+i))?a=a.substring(1):(t="2-digit",a=a.substring(2)),r.push([e,t,n])}function u(e){a=a.substring(1),r.push(["hour","numeric",e])}function A(e,i){let n="numeric";a.search(new RegExp(i+i))?a=a.substring(1):(n="2-digit",a=a.substring(2)),r.push([e,n])}function m(){const e=a.indexOf("]");if(-1===e)return a=a.substring(1),!1;r.push(["text",a.substr(1,e-1)]),a=a.substr(e+1)}return r}(a):void 0,e)},toLocaleString:function(e="date_time",{locale:i=t,timeZone:r=c}={}){return n=>d(n).toLocaleString(i,y(r,a[e]))},toRelative:function(a){return e=>f(g(a)(e))},getDiff:function(a,e="seconds",i=!1){const r=g(a,-{seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:24192e5,years:290304e5}[e]);return function(a){const e=r(a);return i?e:Math.floor(e)}},getRelative:f,getCETOffset:h,getTimeZoneOffset:p,getTimeZoneOffsetString:k,getTimeZone:function(a,{locale:e=t,description:i="long",offset:r=!1}={}){const n=M(a);let c="none"===i?"":n.toLocaleString(e,{timeZoneName:i}).replace(n.toLocaleString(e),"").trim();const s=r?"UTC"+E(n.getTimezoneOffset()):"";return c&&s&&(c=" ("+c+")"),s+c},Date:{getWeekDay:P,getWeekNumber:S,addDays:_,addMonths:function(a){return e=>(e.setMonth(e.getMonth()+a),e)}},redefineTimeZone:function(a=c){return([e="",i=""]=[])=>[e,i,a]},modify:function(a){const e=Object.keys(a);return function(i){const r=d(i);for(let i,n=0;i=e[n];n++)"addDays"===i?_(a[i])(r):"add"===i.substr(0,3)?T(i,a[i],r):"setMonth"===i?r.setMonth(a[i]-1):Reflect.has(r,i)?r[i](a[i]):"setDay"===i&&r.setDate(a[i]);return u(r)}},double:D,getOrdinalSuffix:C,getMonthName:function(a,e){if("number"!=typeof a&&(a=parseInt(a)),isNaN(a))return!1;let i=["December","January","February","March","April","May","June","July","August","September","October","November"][a%12];return e&&(-1===e&&(e=3,4===i.length&&(e=4)),i=i.substring(0,e)),i},getDaysInMonth:function([a=A()[0]]=[]){const[e,i,r]=a.split("-").map(Number);return w(i,r)},daysInMonth:w,getTimeZones:()=>s,isTimeZone:a=>-1!==s.indexOf(a),setInternalZone:a=>c=a,setInternalLocale:a=>t=a,formats:e}}();