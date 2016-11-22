import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

const HEROES: Hero[] = {
	{ id: 11, name: 'Pacman' },
	{ id: 12, name: 'Sub-Zero' },
	{ id: 13, name: 'Thor' },
	{ id: 14, name: 'Iron Man' },
	{ id: 15, name: 'Wolverine' },
	{ id: 16, name: 'Storm	' },
	{ id: 17, name: 'Batman' },
	{ id: 18, name: 'Superman' },
	{ id: 19, name: 'Jean-Grey' },
	{ id: 20, name: 'Hulk' }
};

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<h2><b>{{hero.name}}</b> details!</h2>
	<div>
		<label>ID: {{hero.id}}</label>
	</div>
	<div>
		<label>Name: </label>
		<input [(ngModel)]="hero.name" placeholder="name">
	</div>
	`
})

export class AppComponent {
	title = 'Tour of Heroes';
	hero: Hero = {
		id: 1,
		name: 'Batman'
	};
	heroes = HEROES;
}
