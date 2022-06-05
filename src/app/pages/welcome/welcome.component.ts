import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  Nombres: string = "";
  ApellidoPaterno: string = "";
  ApellidoMaterno: string = "";
  FechaNacimiento: string = "";
  sexo: string = "";
  CURP: string = "";
  constructor(private http:HttpClient) { }

  ngOnInit() {
    console.log("NG ON INIT")

    const apiURL ='http://localhost:1337/api/curps/1' ;

    this.http.get(apiURL).subscribe((data: any) => {
      console.log(data)
      this.Nombres = data.data.attributes.Nombres
      this.ApellidoPaterno = data.data.attributes.ApellidoPaterno
      this.ApellidoMaterno = data.data.attributes.ApellidoMaterno
      this.FechaNacimiento = data.data.attributes.FechaNacimiento
      this.sexo = data.data.attributes.sexo
      this.CURP = data.data.attributes.CURP
    });
  }

}
