import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    standalone: true,
    imports: [CardModule, ButtonModule, CommonModule],
    styleUrl: './card.component.scss'
})
export class AppCard {
    cards = [
        { 
            title: 'Equipamentos disponíveis', 
            description: 'Estoque de equipamentos disponíveis.', 
            borderColor: 'green',
            showThumbtack: true,
            stock: { 
                mobile: 1200, 
                chip: 369, 
                wifi: 148 
            } 
        },
        { 
            title: 'Equipamentos em uso', 
            description: 'Equipamentos que estão em uso nos cliente.', 
            borderColor: 'blue',
            showThumbtack: true,
            stock: { 
                mobile: 10000, 
                chip: 5000, 
                wifi: 3000 
            } 
        },
        { 
            title: 'Equipamentos cancelados', 
            description: 'Estoque de equipamentos cancelados.', 
            borderColor: 'red',
            showThumbtack: true,
            stock: { 
                mobile: 540, 
                chip: 100, 
                wifi: 50 
            } 
        },
        { 
            title: 'Quarentena', 
            description: 'Equipamentos cancelados que estão aguardando a resposta da operadora.', 
            borderColor: 'transparent',
            showThumbtack: false,
            stock: { 
                mobile: 420, 
                chip: 0, 
                wifi: 0 
            } 
        }
    ];
}