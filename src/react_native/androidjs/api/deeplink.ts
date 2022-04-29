const NativeModules = require('react-native').NativeModules;

class deeplink {
    public getLink(){
        return NativeModules.DeepLink.getDeepLink();
    }

    public openLink(){
        return NativeModules.DeepLink.openDeepLink();
    }
}

export = new deeplink();