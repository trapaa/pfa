import { Component, OnInit } from '@angular/core';
import {Medecin} from '../../medecin'
import { MedService } from '../../med.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {
med:Medecin
message:any


  constructor(private MedService:MedService,private router:Router) { 
    
  }

  ajouter(med: Medecin){
    this.MedService.ajouterMedecin(med)
  
      .subscribe(data => {
            
        console.log(data )    })
        this.router.navigate(['/admin']);
        
  }
  

  ngOnInit(): void {
 this.med=new Medecin()
   
    
  }

}


