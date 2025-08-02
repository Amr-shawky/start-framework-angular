import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About} from './component/about/about';
import { Contact } from './component/contact/contact';
import { Portfolio } from './component/portfolio/portfolio';

export const routes: Routes = [
    { path: '', component: Home , title: 'Home' },
    { path: 'about', component: About , title: 'About' },
    { path: 'contact', component: Contact , title: 'Contact' },
    { path: 'portfolio', component: Portfolio , title: 'Portfolio' }
];
