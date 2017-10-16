/**
 * titanium-firebase-crashreporting
 *
 * Created by Hans Knoechel
 * Copyright (c) 2017 Your Company. All rights reserved.
 */

#import "TiModule.h"

@interface FirebaseCrashreportingModule : TiModule {
}

- (void)log:(id)message;

- (NSNumber *)crashCollectionEnabled;

- (void)setCrashCollectionEnabled:(NSNumber *)crashCollectionEnabled;

@end
