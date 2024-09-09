# Team 12: Fitness App Project

## Project Description
This is a React Native project aimed at building a fitness app that allows users to track their workouts and manage exercises. Users can view exercises by the day of the week, leave comments, filter exercises by equipment, and track repetitions and weights. Additionally, the app allows users to browse exercises by category and view basic details, including images and targeted muscles.

### User Stories
- **Peter Mitchell**:
  - View exercises by day of the week to plan workouts.
    - **API**: `daysofweek`
  - Leave and read comments on exercises to share feedback.
    - **API**: `exercisecomment`
  - Search for exercises by name.
    - **API**: `exercise`, `exercisealias`
- **Alvaro De La Cruz**:
  - Filter exercises by available equipment.
    - **API**: `equipment`
  - Track repetitions and weights for each exercise.
    - **API**: `setting-repetitionunit`, `setting-weightunit`
  - Access exercise variations.
    - **API**: `variation`
- **Erik Govea-Lopez**:
  - Browse exercises by category.
    - **API**: `exercisecategory`
  - View basic details of exercises, including name, category, and targeted muscles.
    - **API**: `exercisebaseinfo`
  - Search for exercises that target specific muscles.
    - **API**: `muscle`
- **Saniya Wairkar**:
  - View images of exercises to see how they should be performed.
    - **API**: `exerciseimage`
  - View nutritional information for ingredients.
    - **API**: `ingredient`, `ingredientinfo`
  - Convert ingredient measurements to different weight units.
    - **API**: `ingredienttoweightunit`, `weightunit`


## GitHub Repository
- **Repository Link**: [https://github.com/saniyaw7/Project1SE](https://github.com/saniyaw7/Project1SE)

## GitHub Issues
We are actively using GitHub issues to track and assign tasks. Each team member has been assigned specific user stories and has been contributing to resolving issues.

## Libraries Used
- [React Native](https://reactnative.dev) - Main framework for building the app.
- [React Navigation](https://reactnavigation.org) - Navigation library for managing app screens.
- [Axios](https://github.com/axios/axios) - For API calls to the backend.
- [Redux](https://redux.js.org/) - State management for the app.
- [React Native Paper](https://callstack.github.io/react-native-paper/) - UI component library.

## Contributors
| Name               | GitHub Profile                             |
|--------------------|--------------------------------------------|
| **Peter Mitchell**  | [Peter's GitHub](https://github.com/Mitpete) |
| **Alvaro De La Cruz** | [Alvaro's GitHub](https://github.com/Alvaro-DLC) |
| **Erik Govea-Lopez** | [Erik's GitHub](https://github.com/erikgovea) |
| **Saniya Wairkar**   | [Saniya's GitHub](https://github.com/saniyaw7) |

---

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till the "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start



This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
