import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { SkillsComponent } from './skills/skills';
import { ContactComponent } from './contact/contact';
import { ProjectComponent } from './projects/projects';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'skills', component:SkillsComponent},
    {path:'contact', component:ContactComponent},
    {path:'projects', component:ProjectComponent}
];
