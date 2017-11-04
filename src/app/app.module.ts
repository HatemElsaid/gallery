import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
 

import { RouterModule, Routes } from '@angular/router';//
import { ImageDetailFilterPipe } from "./image-detail/shared/filter.pipe";
import { ImageService } from "./image-detail/shared/image.service";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { appRoutes } from "../routes";//


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageDetailFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes //
    )
    
  ],
  providers: [ImageService , ImageDetailFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
