export class App {
  constructor() {
    this.message = 'Hello World!';
  }
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Info-Teach';
    config.options.pushState = true;
    config.map([
      { route: ['', 'home'],
        name: 'home',
        moduleId: './containers/main-container/main-container',
        nav: true,
        title: "Главная"},
      { route: ['/portfolio', 'portfolio'],
        name: 'portfolio',
        moduleId: './containers/main-container/main-container',
        nav: true,
        title: "Портфолио"},
      { route: ['/informatics', 'informatics'],
        name: 'informatics',
        moduleId: './containers/main-container/main-container',
        nav: true,
        title: "Кабинет информатики"},
      { route: ['/for-teacher', 'for-teacher'],
        name: 'for-teacher',
        moduleId: './containers/main-container/main-container',
        nav: true,
        title: "Для учителя"},
      { route: ['/for-student', 'for-student'],
        name: 'for-student',
        moduleId: './containers/main-container/main-container',
        nav: true,
        title: "Для учеников"}
    ]);
  }
}
