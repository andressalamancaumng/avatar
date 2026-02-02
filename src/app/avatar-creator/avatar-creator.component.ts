// src/app/avatar-creator/avatar-creator.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AvatarOptions {
  role: 'estudiante' | 'docente' | 'administrativo' | null;
  skinColor: string;
  hairColor: string;
  hairStyle: string;
  shirtColor: string;
  shirtType: 'tshirt' | 'hoodie';
  pantsType: 'pants' | 'shorts' | 'skirt';
  pantsColor: string;
  glasses: boolean;
  headBandana: boolean;
  chestBandana: boolean;
}

@Component({
  selector: 'app-avatar-creator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './avatar-creator.component.html',
  styleUrls: ['./avatar-creator.component.scss']
})
export class AvatarCreatorComponent implements OnInit {
  isLoading = true;
  loadingProgress = 0;
  commitmentProgress = 0;

  avatar: AvatarOptions = {
    role: null,
    skinColor: '',
    hairColor: '',
    hairStyle: '',
    shirtColor: '',
    shirtType: 'tshirt',
    pantsType: 'pants',
    pantsColor: '',
    glasses: false,
    headBandana: false,
    chestBandana: false
  };

  roles = [
    { name: 'Estudiante', value: 'estudiante' as const, icon: '🎓' },
    { name: 'Docente', value: 'docente' as const, icon: '👨‍🏫' },
    { name: 'Administrativo', value: 'administrativo' as const, icon: '💼' }
  ];

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

  hairStyles = [
    { name: 'Corto', value: 'short' },
    { name: 'Medio', value: 'medium' },
    { name: 'Largo', value: 'long' },
    { name: 'Coleta', value: 'ponytail' },
    { name: 'Sin pelo', value: 'bald' }
  ];

  shirtColors = [
    { name: 'Blanco', value: '#FFFFFF' },
    { name: 'Negro', value: '#000000' },
    { name: 'Azul', value: '#4A90E2' },
    { name: 'Azul Marino', value: '#1E3A8A' },
    { name: 'Rojo', value: '#E74C3C' },
    { name: 'Vinotinto', value: '#8B1538' },
    { name: 'Verde', value: '#2ECC71' },
    { name: 'Verde Oscuro', value: '#166534' },
    { name: 'Amarillo', value: '#F1C40F' },
    { name: 'Naranja', value: '#FF8C00' },
    { name: 'Morado', value: '#9B59B6' },
    { name: 'Rosa', value: '#FF69B4' },
    { name: 'Gris', value: '#95A5A6' },
    { name: 'Café', value: '#8B4513' },
    { name: 'Turquesa', value: '#1ABC9C' }
  ];

  shirtTypes = [
    { name: 'Camiseta', value: 'tshirt' as const },
    { name: 'Hoodie', value: 'hoodie' as const }
  ];

  pantsTypes = [
    { name: 'Pantalón', value: 'pants' as const },
    { name: 'Pantalón Corto', value: 'shorts' as const },
    { name: 'Falda', value: 'skirt' as const }
  ];

  pantsColors = [
    { name: 'Azul marino', value: '#2C3E50' },
    { name: 'Azul Claro', value: '#3498DB' },
    { name: 'Negro', value: '#000000' },
    { name: 'Gris', value: '#95A5A6' },
    { name: 'Gris Oscuro', value: '#464646' },
    { name: 'Café', value: '#8B4513' },
    { name: 'Beige', value: '#D2B48C' },
    { name: 'Blanco', value: '#FFFFFF' },
    { name: 'Verde Oliva', value: '#6B8E23' },
    { name: 'Rojo', value: '#C0392B' },
    { name: 'Morado', value: '#7D3C98' },
    { name: 'Rosa', value: '#FF69B4' }
  ];

  ngOnInit() {
    this.simulateLoading();
    this.updateCommitmentProgress();
  }

  simulateLoading() {
    const interval = setInterval(() => {
      this.loadingProgress += Math.random() * 15;
      
      if (this.loadingProgress >= 100) {
        this.loadingProgress = 100;
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
        clearInterval(interval);
      }
    }, 200);
  }

  get commitmentMessage(): string {
    if (this.commitmentProgress === 0) {
      return 'Identificando tu lugar en el campus...';
    } else if (this.commitmentProgress > 0 && this.commitmentProgress <= 25) {
      return 'Identificando tu lugar en el campus...';
    } else if (this.commitmentProgress > 25 && this.commitmentProgress <= 50) {
      return 'Construyendo tu voz en la comunidad...';
    } else if (this.commitmentProgress > 50 && this.commitmentProgress <= 75) {
      return 'Definiendo tu compromiso ético...';
    } else {
      return '¡Compromiso Activado! Eres un guardián/a del campus.';
    }
  }

  updateCommitmentProgress() {
    let progress = 0;
    
    // 25% por seleccionar el rol
    if (this.avatar.role) {
      progress += 25;
    }
    
    // 25% más por completar todos los demás campos obligatorios (5% cada uno)
    if (this.avatar.skinColor) progress += 5;
    if (this.avatar.hairColor) progress += 5;
    if (this.avatar.hairStyle) progress += 5;
    if (this.avatar.shirtColor) progress += 5;
    if (this.avatar.pantsColor) progress += 5;
    
    // Los accesorios y tipos son opcionales, no afectan el progreso
    
    this.commitmentProgress = progress;
  }

  onOptionChange() {
    this.updateCommitmentProgress();
  }

  resetAvatar() {
    this.avatar = {
      role: null,
      skinColor: '',
      hairColor: '',
      hairStyle: '',
      shirtColor: '',
      shirtType: 'tshirt',
      pantsType: 'pants',
      pantsColor: '',
      glasses: false,
      headBandana: false,
      chestBandana: false
    };
    this.updateCommitmentProgress();
  }

  randomizeAvatar() {
    const randomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
    
    this.avatar.role = randomItem(this.roles).value as 'estudiante' | 'docente' | 'administrativo';
    this.avatar.skinColor = randomItem(this.skinColors).value;
    this.avatar.hairColor = randomItem(this.hairColors).value;
    this.avatar.hairStyle = randomItem(this.hairStyles).value;
    this.avatar.shirtColor = randomItem(this.shirtColors).value;
    this.avatar.shirtType = randomItem(this.shirtTypes).value as 'tshirt' | 'hoodie';
    this.avatar.pantsType = randomItem(this.pantsTypes).value as 'pants' | 'shorts' | 'skirt';
    this.avatar.pantsColor = randomItem(this.pantsColors).value;
    this.avatar.glasses = Math.random() > 0.5;
    this.avatar.headBandana = Math.random() > 0.7;
    this.avatar.chestBandana = Math.random() > 0.7;
    
    this.updateCommitmentProgress();
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
      this.updateCommitmentProgress();
      alert('¡Avatar cargado exitosamente!');
    } else {
      alert('No hay avatar guardado.');
    }
  }
}