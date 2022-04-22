import { Component, OnInit } from '@angular/core';
import { MedService } from '../../med.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.css']
})
export class Admin1Component implements OnInit {
  medecins:any
  nbr:any
  constructor(private MedService:MedService,private router:Router) { }

  Supprimer(id:number){
    this.MedService.deleteM(id)
  
      .subscribe(data => {
            
       this.medecins=data    })
       
        
  }


  consulter(id:number){
    this.router.navigate(['/consulterM']);
    localStorage.setItem("idM",JSON.stringify(id));
    
       
        
  }





  ngOnInit(): void {
    this.MedService.listeM()
  
    .subscribe(data => {
          
      this.medecins=data    
     })

    this.MedService.countM()
  
    .subscribe(data => {
          
      this.nbr=data     })
    
  }

  }


