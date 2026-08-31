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
    itens: ['JavaScript', 'TypeScript', 'Angular', 'HTML/CSS', 'Tailwind']
    },
    {
      titulo: 'Soft skills',
      itens: ['Comunicação', 'Trabalho em equipe', 'Resolução de problemas', 'Adaptabilidade']
    },
    {
      titulo: 'Feramentas',
      itens: ['Git', 'SpringBoot', 'Figma']
    },
    {
      titulo: 'Idiomas',
      itens: ['Português (nativo)', 'Inglês (intermediário)']
    }
  ];
}
