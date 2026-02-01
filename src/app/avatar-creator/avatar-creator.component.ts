// src/app/avatar-creator/avatar-creator.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AvatarOptions {
  gender: 'male' | 'female';
  skinColor: string;
  hairColor: string;
  hairStyle: string;
  shirtColor: string;
  pantsColor: string;
}

@Component({
  selector: 'app-avatar-creator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './avatar-creator.component.html',
  styleUrls: ['./avatar-creator.component.scss']
})
export class AvatarCreatorComponent {
  avatar: AvatarOptions = {
    gender: 'male',
    skinColor: '#F4C4A0',
    hairColor: '#3B2414',
    hairStyle: 'short',
    shirtColor: '#4A90E2',
    pantsColor: '#2C3E50'
  };

  skinColors = [
    { name: 'Claro', value: '#F4C4A0' },
    { name: 'Medio', value: '#D9A066' },
    { name: 'Moreno', value: '#8D5524' },
    { name: 'Oscuro', value: '#5C3317' }
  ];

  hairColors = [
    { name: 'Negro', value: '#000000' },
    { name: 'Café', value: '#3B2414' },
    { name: 'Rubio', value: '#F4E4C1' },
    { name: 'Rojo', value: '#C1440E' },
    { name: 'Gris', value: '#808080' }
  ];

  hairStyles = {
    male: [
      { name: 'Corto', value: 'short' },
      { name: 'Medio', value: 'medium' },
      { name: 'Largo', value: 'long' },
      { name: 'Calvo', value: 'bald' }
    ],
    female: [
      { name: 'Corto', value: 'short' },
      { name: 'Medio', value: 'medium' },
      { name: 'Largo', value: 'long' },
      { name: 'Coleta', value: 'ponytail' }
    ]
  };

  shirtColors = [
    { name: 'Azul', value: '#4A90E2' },
    { name: 'Rojo', value: '#E74C3C' },
    { name: 'Verde', value: '#2ECC71' },
    { name: 'Amarillo', value: '#F1C40F' },
    { name: 'Negro', value: '#000000' },
    { name: 'Blanco', value: '#FFFFFF' }
  ];

  pantsColors = [
    { name: 'Azul marino', value: '#2C3E50' },
    { name: 'Negro', value: '#000000' },
    { name: 'Gris', value: '#95A5A6' },
    { name: 'Café', value: '#8B4513' },
    { name: 'Beige', value: '#D2B48C' }
  ];

  get currentHairStyles() {
    return this.hairStyles[this.avatar.gender];
  }

  onGenderChange() {
    // Reset hair style to first option when gender changes
    this.avatar.hairStyle = this.currentHairStyles[0].value;
  }

  resetAvatar() {
    this.avatar = {
      gender: 'male',
      skinColor: '#F4C4A0',
      hairColor: '#3B2414',
      hairStyle: 'short',
      shirtColor: '#4A90E2',
      pantsColor: '#2C3E50'
    };
  }

  randomizeAvatar() {
    const randomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
    
    this.avatar.gender = Math.random() > 0.5 ? 'male' : 'female';
    this.avatar.skinColor = randomItem(this.skinColors).value;
    this.avatar.hairColor = randomItem(this.hairColors).value;
    this.avatar.hairStyle = randomItem(this.currentHairStyles).value;
    this.avatar.shirtColor = randomItem(this.shirtColors).value;
    this.avatar.pantsColor = randomItem(this.pantsColors).value;
  }

  saveAvatar() {
    const avatarData = JSON.stringify(this.avatar);
    localStorage.setItem('myAvatar', avatarData);
    alert('¡Avatar guardado exitosamente!');
  }

  loadAvatar() {
    const savedAvatar = localStorage.getItem('myAvatar');
    if (savedAvatar) {
      this.avatar = JSON.parse(savedAvatar);
      alert('¡Avatar cargado exitosamente!');
    } else {
      alert('No hay avatar guardado.');
    }
  }
}