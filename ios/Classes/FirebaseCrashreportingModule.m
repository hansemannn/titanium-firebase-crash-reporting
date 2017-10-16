/**
 * titanium-firebase-crashreporting
 *
 * Created by Hans Knoechel
 * Copyright (c) 2017 Your Company. All rights reserved.
 */

#import <FirebaseCrash/FirebaseCrash.h>

#import "FirebaseCrashreportingModule.h"
#import "TiBase.h"
#import "TiHost.h"
#import "TiUtils.h"

@implementation FirebaseCrashreportingModule

#pragma mark Internal

- (id)moduleGUID
{
  return @"7b426d19-3e7c-4f3e-9e0b-2dd18a60d2da";
}

- (NSString *)moduleId
{
  return @"firebase.crashreporting";
}

#pragma mark Lifecycle

- (void)startup
{
  [super startup];
  NSLog(@"[DEBUG] %@ loaded", self);
}

#pragma Public APIs

- (void)log:(id)message
{
  ENSURE_SINGLE_ARG(message, NSString);

  FIRCrashMessage(message);
}

- (NSNumber *)crashCollectionEnabled
{
  return NUMBOOL([[FIRCrash sharedInstance] isCrashCollectionEnabled]);
}

- (void)setCrashCollectionEnabled:(NSNumber *)crashCollectionEnabled
{
  [[FIRCrash sharedInstance] setCrashCollectionEnabled:[TiUtils boolValue:crashCollectionEnabled]];
}

@end
