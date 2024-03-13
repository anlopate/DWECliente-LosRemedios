import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Punto de entrada de la app en desarrollo
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
