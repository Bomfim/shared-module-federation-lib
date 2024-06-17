import { loadRemoteModule } from "@angular-architects/module-federation";
import { Route } from "@angular/router";
import { AppComponent } from "./app.component";

export const routes: Route[] = [
  {
    path: "vehicles",
    loadChildren: () =>
      loadRemoteModule({
        type: "module",
        remoteEntry: "http://localhost:3000/remoteEntry.js",
        exposedModule: "./Module",
      }).then((m) => m.HomeModule),
  },
];
