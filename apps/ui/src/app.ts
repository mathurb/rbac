import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router, RouteConfig } from 'aurelia-router';
export class App {
    public router: Router | undefined;
    public routes: Array<RouteConfig> = [
        {
            route: ['', 'home'],
            name: 'home',
            title: 'Home',
            href: '#home',
            moduleId: PLATFORM.moduleName('feature/home/home'),
        },
        {
            route: ['profile'],
            name: 'profile',
            title: 'Profile',
            href: '#profile',
            moduleId: PLATFORM.moduleName('feature/profile/profile'),
        },
        {
            route: ['admin'],
            name: 'admin',
            title: 'Admin',
            href: '#admin',
            moduleId: PLATFORM.moduleName('feature/admin/admin'),
        },
        {
            route: ['user'],
            name: 'user',
            href: '#user',
            title: 'User',
            moduleId: PLATFORM.moduleName('feature/user/user'),
        },
    ];

    public configureRouter(config: RouterConfiguration, router: Router) {
        this.router = router;
        config.title = 'RBAC';
        config.map(this.routes);
    }
}
