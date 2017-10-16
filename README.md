# Firebase Crash Reporting - Titanium Module
Use the native Firebase SDK in Axway Titanium. This repository is part of the [Titanium Firebase](https://github.com/hansemannn/titanium-firebase) project.

## Requirements
- [x] Titanium SDK 6.2.0 or later

## API's

### `FirebaseCrashReporting`

#### Methods

##### `configure()`

More TBA!

## Example
```js
// Require the Firebase Crash Reporting module
var FirebaseCrashReporting = require('firebase.crashreporting');

// Configure Firebase
FirebaseCrashReporting.configure();

FirebaseCrashReporting.log('Titanium rocks!');
```

## Build
```js
cd iphone
appc ti build -p ios --build-only
```

## Legal

This module is Copyright (c) 2017-Present by Appcelerator, Inc. All Rights Reserved. 
Usage of this module is subject to the Terms of Service agreement with Appcelerator, Inc.  
