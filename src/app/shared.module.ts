import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
    imports: [ReactiveFormsModule,NgbModule,NgbCarouselModule, CommonModule, MatCommonModule, MatToolbarModule, MatFormFieldModule, MatIconModule],
    declarations: [],
    exports: [
        MatCheckboxModule,
        ReactiveFormsModule,
        MatSelectModule,
        NgbModule,
        NgbCarouselModule,
        FormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatCommonModule,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }