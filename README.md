# Firebase Crash Reporting - Titanium Module
Use the native Firebase SDK in Axway Titanium. This repository is part of the [Titanium Firebase](https://github.com/hansemannn/titanium-firebase) project.

## Requirements
- [x] Titanium SDK 6.2.0 or later

## Download
- [x] [Stable release](https://github.com/hansemannn/titanium-firebase-crash-reporting/releases)
- [x] [![gitTio](http://hans-knoechel.de/shields/shield-gittio.svg)](http://gitt.io/component/firebase.crashreporting)

## Before using
- Download a service account key to authenticate your uploads. From the [Firebase console](https://console.firebase.google.com/project/_/settings/serviceaccounts/crashreporting), select your project, and then click Generate New Private Key.
- Place the downloaded `.json` on your root project folder and rename it to `ServiceAccount.json`.
- Download the `scripts` folder and place it into your root project folder.
- Create a file called `titanium-firebase-script.sh` inside scripts.

```sh
#!/bin/bash

# Replace this with the GOOGLE_APP_ID from your GoogleService-Info.plist file
GOOGLE_APP_ID=1:xxx:ios:xxx

# Replace the /Path/To/ServiceAccount.json with the path to the key you just downloaded
"<PATH TO YOUR PROJECT>/scripts/upload-sym" "<PATH TO YOUR PROJECT>/ServiceAccount.json"
```


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
cd ios
appc ti build -p ios --build-only
```

## Legal

This module is Copyright (c) 2017-Present by Appcelerator, Inc. All Rights Reserved. 
Usage of this module is subject to the Terms of Service agreement with Appcelerator, Inc.  
