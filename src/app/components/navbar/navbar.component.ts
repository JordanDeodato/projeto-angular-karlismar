import { Component } from "@angular/core";
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { AppIconfield } from '../search-input/searchinput.component';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-navbar',
    imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, AppIconfield, ButtonModule],
    templateUrl: './navbar.component.html',
})

export class AppNavbar {
    items = [
        {
            label: 'Home',
        },
        {
            label: 'Processamento em lote',
        },
        {
            label: 'Workspace',
        },
        {
            label: 'Produtos',
        },
        {
            label: 'Pedidos',
        },
        {
            label: 'Financeiro',
            items: [
                {
                    label: 'A Receber',
                },
                {
                    label: 'A Pagar',
                },
                {
                    label: 'Folha Salarial',
                },
                {
                    label: 'Impostos',
                    items: [
                        {
                            label: 'Estadual',
                        },
                        {
                            label: 'Federal',
                        }
                    ]
                }
            ]
        },
        {
            label: 'Cadastros',
            items: [
                {
                    label: 'Produtos',
                },
                {
                    label: 'Workspaces',
                },
                {
                    label: 'Pedidos',
                },
            ],
        },
    ];
}