import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Medecin} from './medecin'


@Injectable({
  providedIn: 'root'
})
export class MedService {

  constructor(private http:HttpClient) { 

   
}


public ajouterMedecin(med:Medecin){
  return this.http.post("http://localhost:8080/medecin/ajouter",med,{responseType:'text' as 'json'});

}

public countM(){
  return this.http.get("http://localhost:8080/medecin/count");

}

public listeM(){
  return this.http.get("http://localhost:8080/medecin");

}

public deleteM(id:any){
  return this.http.delete("http://localhost:8080/medecin/supp/"+id);
}

public getone(id:any){
  return this.http.get("http://localhost:8080/medecin/get/"+id);
}


/* public getUsers(){
  return this.http.get("http://localhost:8080/getAllUsers");
}

public deleteFact(id:any){
  return this.http.delete("http://localhost:8080/suppFact/"+id);
}

updateAppel(id:number,app:appel_offre){
  return this.http.put('http://localhost:8080/updateAppel'+'/'+id,app);
}*/

}
