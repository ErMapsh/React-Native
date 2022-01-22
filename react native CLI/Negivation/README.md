# React Navigation v6 In React Native

[React Navigation Doc](https://reactnavigation.org/docs/getting-started)

## Installation
```js
    npm install @react-navigation/native
```

## Installing dependencies 
Let's also install and configure dependencies used by most navigators:
```js
    npm install react-native-screens react-native-safe-area-context
```

## Installing the native stack navigator library
To use the native stack navigator, we need to install @react-navigation/native-stack
``` js 
    npm install @react-navigation/native-stack
```


## Navigation Prop(Note):
- only our screen components are provided with the navigation prop.
- It's important to note that this only happens if the screen is rendered as a route by React Navigation.

This prop will be passed to all screens, and it can be used for the following:
- dispatch will send an action up to the router
- navigate, goBack, etc are available to dispatch actions in a convenient way
- Navigators can also accept a navigation prop, which they should get from the parent navigator, if there is one
