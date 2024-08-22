import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoComponent } from './photo/photo.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PartnerComponent } from './partner/partner.component';
import { BenefitComponent } from './benefit/benefit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
      WebsiteComponent,
      HeaderComponent,
      FooterComponent,
      ContactComponent,
      HomeComponent,
      PartnerComponent,
      PhotoComponent,
      BenefitComponent,
      PageNotFoundComponent
    ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
