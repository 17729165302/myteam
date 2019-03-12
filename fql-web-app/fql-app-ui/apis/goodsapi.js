export const fetchurl="http://localhost:3000/data/goods";
export  default {
    getdata(cb){
        fetch(fetchurl).then(res=>{
            res.json().then(data=>{
                cb(data)
            })
        })
    }
}