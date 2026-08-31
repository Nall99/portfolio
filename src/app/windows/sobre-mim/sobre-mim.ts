import { Component } from '@angular/core';
import { SkillGroup } from '../../core/models/skill-group';

@Component({
  imports: [],
  selector: 'app-sobre-mim',
  styleUrl: './sobre-mim.css',
  templateUrl: './sobre-mim.html',
})
export class SobreMim {
  protected skillGroup: SkillGroup[] = [
    {
    titulo: 'Hard skills',
    itens: ['Python', 'Java', 'Angular', 'TypeScript', 'HTML/CSS', 'JavaScript', 'SpringBoot', 'Django', 'Flask', 'MVC', 'SCRUM']
    },
    {
      titulo: 'Soft skills',
      itens: ['Comunicação', 'Trabalho em equipe', 'Resolução de problemas', 'Adaptabilidade']
    },
    {
      titulo: 'Feramentas',
      itens: ['Git', 'GitLab', 'Figma', 'MinIO', 'Clound AWS']
    },
    {
      titulo: 'Idiomas',
      itens: ['Português (nativo)', 'Inglês (intermediário)']
    }
  ];
}
