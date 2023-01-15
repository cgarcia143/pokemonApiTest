import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { traduccionMatPaginator } from './matpaginator-traduccion';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './Interceptor/interceptor.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    providers: [
        {provide: MatPaginatorIntl, useValue: traduccionMatPaginator()},
        {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
    ]
})
export class SharedModule
{
}
