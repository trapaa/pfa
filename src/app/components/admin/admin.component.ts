import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MedService } from '../../med.service';
import { Medecin } from 'src/app/medecin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
nbr:any
medecins:any
  constructor(private MedService:MedService) { }

 

  ngOnInit(): void {

    this.MedService.countM()
  
    .subscribe(data => {
          
      this.nbr=data     })
//**************** */
      this.MedService.listeM()
  
      .subscribe(data => {
            
        this.medecins=data    
      console.log(this.medecins) })
      
    }


    
  }

  





