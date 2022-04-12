import { Component, OnInit } from '@angular/core';
import {Medecin} from '../../medecin'
import { MedService } from '../../med.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {
med:Medecin
message:any


  constructor(private MedService:MedService) { 
    
  }

  ajouter(med: Medecin){
    this.MedService.ajouterMedecin(med)
  
      .subscribe(data => {
            
        console.log(data )    })
       
        
  }
  

  ngOnInit(): void {
 this.med=new Medecin()
   
    
  }

}


