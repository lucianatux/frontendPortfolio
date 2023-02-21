import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css'],
})
export class NuevaExperienciaComponent implements OnInit {
  trabajo: string = '';
  periodo: string = '';
  descripcion: string = '';

  constructor(private servexper: ExperienciaService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const exper = new Experiencia(this.trabajo, this.periodo, this.descripcion);
    this.servexper.save(exper).subscribe(
      (data) => {
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }
}
