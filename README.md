# Firebase Crash Reporting - Titanium Module
Use the native Firebase SDK in Axway Titanium. This repository is part of the [Titanium Firebase](https://github.com/hansemannn/titanium-firebase) project.

## Requirements
- [x] Titanium SDK 6.2.0 or later

## API's

### `FirebaseCrashReporting`

#### Methods

##### `log(message)`
  - `message` (String)

#### Properties

##### `crashCollectionEnabled` (Boolean, get/set)

## Example
```js
// Require the Firebase Crash Reporting module
var FirebaseCrashReporting = require('firebase.crashreporting');

// Log a crash to the Firebase console
FirebaseCrashReporting.log('Titanium rocks!');

// Determine if crash-collection is enabled, default: true
Ti.API.info('Crash-collection enabled: ' + FirebaseCrashReporting.crashCollectionEnabled);

// Toogle crash-collection
FirebaseCrashReporting.crashCollectionEnabled = false;
```

## Build
```js
cd iphone
appc ti build -p ios --build-only
```

## Legal

This module is Copyright (c) 2017-Present by Appcelerator, Inc. All Rights Reserved. 
Usage of this module is subject to the Terms of Service agreement with Appcelerator, Inc.  
