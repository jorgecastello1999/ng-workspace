import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FiledropComponent } from './filedrop.component';

@NgModule({
	declarations: [FiledropComponent],
	imports: [CommonModule, NgxFileDropModule, BrowserModule],
})
export class FiledropModule {}
