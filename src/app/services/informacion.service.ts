import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info: any = {};
  cargada = false;
  cargada_sobre_nosotros = true;
  equipo: any[] = [];

  constructor(private http: Http) {
    this.cargaInfo();
    this.carga_sobre_nosotros();
  }

  public cargaInfo() {
    this.http.get('assets/data/info.pagina.json')
      .subscribe(data => {
        this.cargada = true;
        this.info = data.json();
      });
  }

  public carga_sobre_nosotros() {
    this.http.get('https://paginaweb-f32a7.firebaseio.com/equipo.json')
      .subscribe(data => {
        this.cargada_sobre_nosotros = true;
        this.equipo = data.json();
      });
  }

}
