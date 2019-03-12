export const fetchurl="http://localhost:3000/data/index";
export  default {
    getdata(cb){
        fetch(fetchurl).then(res=>{
            res.json().then(data=>{
                cb(data)
            })
        })
    }
}
