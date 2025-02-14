import { Component } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-iconfield',
    templateUrl: './searchinput.component.html',
    standalone: true,
    imports: [InputIcon, IconField, InputTextModule, FormsModule]
})
export class AppIconfield {}