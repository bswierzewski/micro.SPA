// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  socketUrl: 'http://localhost:3000/',

  // authUrl: 'http://localhost:3000/',
  // backendUrl: 'http://localhost:3000/',
  // microcontrollerUrl: 'http://localhost:3000/',

  authUrl: 'http://localhost:5001/api/',
  backendUrl: 'http://localhost:5002/api/',
  microcontrollerUrl: 'http://localhost:5003/api/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
