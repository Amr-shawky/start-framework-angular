import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About} from './component/about/about';
import { Contact } from './component/contact/contact';
import { Portfolio } from './component/portfolio/portfolio';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'portfolio', component: Portfolio }
];
