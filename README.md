###iOS###
```bash
shell@proj-root> react-native run-ios
```
or 
```bash
shell@proj-root> open ./ios/ReactNativeStarterPackage.xcodeproj 
```
Please note that `Info.plist -> App Transport Security Settings -> Allow Arbitrary Loads` has been set to `Yes` for this project.


###Android (need platform-tools installed/added to $PATH)###
```
shell@proj-root> android avd
shell@proj-root> react-native run-android
```
or open `./android` folder as a project by `Android Studio`.

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
