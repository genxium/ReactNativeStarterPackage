This tool doesn't work on Windows (yet). 

###Project Creation###
To create a new project named `MyProject`,
```bash
shell@proj-root/create_project_by_name> init MyProject 
```

After the downloading is finished, go to the `$HOME/MyProject` directory and run `npm install` to install dependencies. 

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
Visit port 9090 if successfully started

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
The [express-ws](https://github.com/HenningM/express-ws) is currently chosen as websocket server library for this repository. The client sides are using [websocket APIs wrapped by React-Native](https://facebook.github.io/react-native/docs/network.html).

The popular library [socket.io](http://socket.io/) is an option as well.   

When testing by Android, please start the application by script `run_android_with_localhost_proxy`.  

###Navigating/Routing###
The [react-native Navigator](https://facebook.github.io/react-native/docs/navigator.html) is yet supported by [react-native-web](https://github.com/necolas/react-native-web/issues/29). 

One option of navigating/routing integration is to use [react-native Navigator](https://facebook.github.io/react-native/docs/navigator.html) for iOS/Android and the popular [react-router](https://github.com/reactjs/react-router/) for web respectively. 

It's also possible to use [react-router-native](https://github.com/jmurzy/react-router-native) instead of [react-native Navigator](https://facebook.github.io/react-native/docs/navigator.html) for iOS/Android app navigation.
