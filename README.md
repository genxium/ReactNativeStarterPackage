###iOS###
```bash
shell@proj-root> react-native run-ios
```
or 
```bash
shell@proj-root> open ./ios/ReactNativeStarterPackage.xcodeproj 
```
Please note that `Info.plist -> App Transport Security Settings -> Allow Arbitrary Loads` has been set to `Yes` for this project. However, the [init script under <proj-root>/create_project_by_name](https://github.com/genxium/ReactNativeStarterPackage/blob/master/create_project_by_name/init) does NOT modify the default ATS settings thus you might have to change it manually according to specific demands.


###Android (need platform-tools installed/added to $PATH)###
```
shell@proj-root> android avd
shell@proj-root> react-native run-android
```
or open `./android` folder as a project by `Android Studio`.

Please refer to the [official document](https://facebook.github.io/react-native/docs/getting-started.html#content) or [my 印象笔记 record (access permission needed)](https://app.yinxiang.com/shard/s61/nl/13267014/54814fe0-c4e2-4e1a-b8e0-d0e963fbcf12?title=Installing%20React-Native%20on%20Ubuntu14.04%20for%20Android%20Dev%20in%20China) for information about react native setup of Android development.

If difficulty of debugging by real Android device is encountered, please refer to the [official document](https://facebook.github.io/react-native/docs/running-on-device-android.html) for troubleshooting steps. Some people would get stuck in the step of configuring the `Debug server host for device`. 

###Web###
```
shell@proj-root> webpack
shell@proj-root> ./start_api_daemon
```
Visit port 3000 if successfully started

###Reminders###
In the `package.json` file, `react-native` version is set to * to keep using up-to-date features and fixes. Remember to run 
```
shell@proj-root> npm upgrade 
```
after upgrading `react-native` version and proceed according to the cli instructions.

Use 
```
shell@proj-root> ./node_modules/react-native/packager/packager.sh start --resetCache
```
to start the packager with cache cleaned if any weird errors show up and you're sure that it's a cache relevant problem.

###Websocket (or WebSocket, but I prefer Websocket for typing convenience)###
The [express-ws](https://github.com/HenningM/express-ws) is currently chosen as websocket server library for this repository. The client sides are using [websocket APIs wrapped by React-Native](https://facebook.github.io/react-native/docs/network.html). If you want to use other, possibly more popular libraries such as [socket.io](http://socket.io/), please be careful about the potential compatibility problems. Some efforts into using [socket.io](http://socket.io/) have been put without success and I appreciate any help or comment for better websocket utilities integration.   

When testing by a local Android emulator, there'll be websocket errors complaining `Failed to connect to localhost/127.0.0.1:3000` and I haven't found a way to resolve it. Please try to pick up a real Android device for testing websocket features on Android OS and again any help or comment for this issue is appreciated.  
