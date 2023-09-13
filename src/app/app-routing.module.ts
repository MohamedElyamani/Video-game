import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { VideoGameComponent } from './video-game/video-game.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:BannerComponent},
  {path:'about',component:AboutComponent},
  {path:'product',component:ProductComponent},
  {path:'videoGame',component:VideoGameComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
