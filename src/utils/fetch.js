/**
 * Created by T00006331 on 2018/5/21.
 */
import qs from 'qs';
export default function (api, url, params, method = 'POST') {
    let fetchObj={
        method: method,
        mode: 'cors',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };
    let fetchUrl=`${api}${url}`;
    if(method==='POST'){
        fetchObj.body=qs.stringify(params);
    }else{
        params && (fetchUrl+='&'+qs.stringify(params));
    }
    return new Promise((resolve, reject) => {
        fetch(fetchUrl,fetchObj).then((res)=>{
            return res.json();
        }).then((body)=> {
            resolve(body);
        }).catch((err)=>{
            reject(err);
        });
    });
};
