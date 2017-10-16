// Require the Firebase Crash Reporting module
var FirebaseCrashReporting = require('firebase.crashreporting');

// Log a crash to the Firebase console
FirebaseCrashReporting.log('Titanium rocks!');

// Determine if crash-collection is enabled, default: true
Ti.API.info('Crash-collection enabled: ' + FirebaseCrashReporting.crashCollectionEnabled);

// Toogle crash-collection
FirebaseCrashReporting.crashCollectionEnabled = false;
