This tool doesn't work on Windows (yet).

Node and Watchman Installation
--

Developing with react-native on OSX requires the installation of node and watchman. Please read [the official docs](https://facebook.github.io/react-native/docs/getting-started.html#node-watchman) for details.   

Project Creation
--

To create a new project named `MyProject`,
```bash
shell@proj-root/create_project_by_name> init MyProject
```

After the downloading is finished, go to the `$HOME/MyProject` directory and run `npm install` to install dependencies.

iOS
--
```bash
shell@$HOME/MyProject> react-native run-ios
```
or

```bash
shell@$HOME/MyProject> open ./ios/ReactNativeStarterPackage.xcodeproj
```

Please note that `Info.plist -> App Transport Security Settings -> Allow Arbitrary Loads` of `$HOME/MyProject/ios` does NOT modify the default ATS settings thus you might have to change it manually according to specific demands.


Android (need `$ANDROID_HOME/tools` added to `$PATH`)
--

```
shell> android avd
...(launch an Android emulator)...
shell@$HOME/MyProject> ./run_android_with_localhost_proxying
```

Please refer to the [official document](https://facebook.github.io/react-native/docs/getting-started.html#content) or [my 印象笔记 record (access permission needed)](https://app.yinxiang.com/shard/s61/nl/13267014/54814fe0-c4e2-4e1a-b8e0-d0e963fbcf12?title=Installing%20React-Native%20on%20Ubuntu14.04%20for%20Android%20Dev%20in%20China) for information about react-native setup of Android development.

If difficulty of debugging by real Android device is encountered, please refer to the [official document](https://facebook.github.io/react-native/docs/running-on-device-android.html) for troubleshooting steps. Some people might get stuck at the step of configuring the `Debug server host for device`.

### Gradle Settings 

After the project, e.g. `MyProject` is created at `$HOME/MyProject`, the default build tool for its Android sub-project is [gradle](https://gradle.org/) which will be invoked by a wrapper script at `$HOME/MyProject/android/gradlew[.bat]`. Read [gradle's official introduction for details](https://gradle.org/install#with-the-gradle-wrapper).  

By  

```
shell@$HOME/MyProject> ./run_android_with_localhost_proxying
``` 

one actually calls 

```
shell@$HOME/MyProject> react-native run-android 
```

which in turn calls `$HOME/MyProject/android/gradlew[.bat]` to build the Android sub-project. The distribution of gradle to use is then determined by the config file at `$HOME/MyProject/android/gradle/wrapper/gradle-wrapper.properties` which reads like the following. 

```
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-2.14.1-all.zip
```

According to [gradle's official docs](https://docs.gradle.org/current/userguide/gradle_wrapper.html), one could simply update `distributionUrl` to 

```
distributionUrl=gradle-2.14.1-all.zip
```

to use a local distribution `$HOME/MyProject/android/gradle/wrapper/gradle-2.14.1-all.zip` instead of downloading from the original `https\://services.gradle.org/distributions/gradle-2.14.1-all.zip`.

Web
--
```
shell@$HOME/MyProject/web> npm install
shell@$HOME/MyProject/web> npm run build 
shell@$HOME/MyProject> node api_daemon.js 
```

or 

```
shell@$HOME/MyProject/web> npm install
shell@$HOME/MyProject/web> npm run build-watch
shell@$HOME/MyProject> node api_daemon.js 
```

to enable webpack watcher for file updates.

Visit port 9090 on the serving machine after daemon started.

Please refer to [ExpressAndReactDemo](https://github.com/genxium/ExpressAndReactDemo) for more information about web specific configurations.

Reminders
--
Use
```
shell@$HOME/MyProject> ./node_modules/react-native/packager/packager.sh start --resetCache
```
to start the packager with cache cleaned if any weird errors show up and you're sure that it's a cache relevant problem.

### Websocket (or WebSocket, but I prefer Websocket for typing convenience) 
The [express-ws](https://github.com/HenningM/express-ws) is currently chosen as websocket server library for this repository. The client sides are using [websocket APIs wrapped by React-Native](https://facebook.github.io/react-native/docs/network.html).

The popular library [socket.io](http://socket.io/) is an option as well.   

### Navigating/Routing
The [react-native Navigator](https://facebook.github.io/react-native/docs/navigator.html) is not yet supported by [react-native-web](https://github.com/necolas/react-native-web/issues/29).

The navigating/routing integration used here is [react-native Navigator](https://facebook.github.io/react-native/docs/navigator.html) for iOS/Android and [react-router](https://github.com/reactjs/react-router/) for web.

It's also possible to use [react-router-native](https://github.com/jmurzy/react-router-native) alone instead.
