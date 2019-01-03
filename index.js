import "core-js/es7/reflect";
import "zone.js/dist/zone";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./src/app.module.js";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
