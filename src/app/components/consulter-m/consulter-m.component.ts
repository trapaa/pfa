import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/medecin';
import { MedService } from '../../med.service';

@Component({
  selector: 'app-consulter-m',
  templateUrl: './consulter-m.component.html',
  styleUrls: ['./consulter-m.component.css']
})
export class ConsulterMComponent implements OnInit {
medecin:any
id:number
  constructor(private MedService:MedService) { }

  ngOnInit(): void {
    this.medecin = new Medecin()
    this.id =parseInt(localStorage.getItem('idM'));

    this.MedService.getone(this.id)
  
    .subscribe(data => {
          
      this.medecin=data    
    console.log(this.medecin) })

  }

}
