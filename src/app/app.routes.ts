import { Routes } from '@angular/router';

export const routes: Routes = [

	{
		path: 'dashboard',
		loadComponent: () => import('./dashboard/pages/dashboard.component'),
		children: [
			{
				path: 'change-detection',
				title: 'Change Detection',
				loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
			},
			{
				path: 'control-flow',
				title: 'Control Flow',
				loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
			},
			{
				path: 'defer.options',
				title: 'Defer Options',
				loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
			},
			{
				path: 'defer-views',
				title: 'Defer Views',
				loadComponent: () => import('./dashboard/pages/defer-virws/defer-virws.component')
			},
			{
				path: 'user/:id',
				title: 'User',
				loadComponent: () => import('./dashboard/pages/user/user.component')
			},
			{
				path: 'user-list',
				title: 'Users',
				loadComponent: () => import('./dashboard/pages/users/users.component')
			},
			{
				path: 'view-transition',
				title: 'Transition',
				loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component')
			},
			{
				path: '',
				redirectTo: 'control-flow',
				pathMatch: 'full'
			}

		]
	},
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	}




];
