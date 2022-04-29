class deeplink {
    public getLink(){
        return (<any>window).android.getDeepLink();
    }

    public openLink(){
        return (<any>window).android.openDeepLink();
    }
}

export = new deeplink();