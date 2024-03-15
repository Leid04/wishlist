import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WishModule } from './wish/wish.module'; //Important
import { ContactModule } from './contact/contact.module';//Important
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [ //localhost:4200/first
{ path: '', component: WishComponent},
{ path: 'first', component: FirstComponent},
{ path: 'second', component: SecondComponent},
{ path: 'contact', component: ContactComponent},
{ path: '**', component: NotFoundComponent}
];
