import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './bla/bla.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);