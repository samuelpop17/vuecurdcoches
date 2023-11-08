import Global from '../Global';
import axios from 'axios';


export default class SeviceCoches{

getCoches(){
    return new Promise(function(resolve) {

        var request = "api/coches";
        var coches = [];
        var url = Global.url + request;
        axios.get(url).then(response => {
            coches = response.data;
            resolve(coches);
        })

    })


}


getCochesDetalles(id){
    return new Promise(function(resolve) {

        var request = "/api/Coches/FindCoche/"+id;
        var coche = [];
        var url = Global.url + request;
        axios.get(url).then(response => {
            coche = response.data;
            resolve(coche);
        })

    })


}


insertCoche(coche){
    return new Promise(function(resolve) {

        var request = "api/Coches/InsertCoche";
        
        var url = Global.url + request;
        axios.post(url,coche).then(response => {
           
            resolve(response);
        })

    })


}



DeleteCoche(id){
    return new Promise(function(resolve) {

        var request = "api/Coches/DeleteCoche/"+id;
        var url = Global.url + request;
        axios.delete(url).then(response => {
            resolve(response);
        })

    })


}

updateCoche(coche) {
    return new Promise(function(resolve){
        var request = "api/Coches/UpdateCoche";
        var url = Global.url + request;
        axios.put(url, coche).then(response =>  {
            resolve(response);
        })
    })
}



}