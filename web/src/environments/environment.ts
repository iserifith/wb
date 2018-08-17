// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAuIZ2xZV0kYGUhCe74YOJEN13b42aeDW4',
    authDomain: 'whatsapp-blast.firebaseapp.com',
    databaseURL: 'https://whatsapp-blast.firebaseio.com',
    projectId: 'whatsapp-blast',
    storageBucket: 'whatsapp-blast.appspot.com',
    messagingSenderId: '602242705972',
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
