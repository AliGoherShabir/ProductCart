# Libs Used

- TypeScript
- Jest
- React Native Testing Library
- Redux Toolkit
- Redux Persist
- RTK Query
- React Navigation

# Project Structure

```
└── 📁__tests__
└── index.js
└── 📁src
    └── App.tsx
    └── 📁components
        └── index.ts
    └── 📁navigators
        └── index.ts
    └── 📁screens
        └── index.ts
    └── 📁store
        └── hooks.ts
        └── index.ts
        └── 📁services
            └── index.ts
            └── productsApi.ts
        └── 📁slices
            └── cartSlice.ts
            └── index.ts
            └── productSlice.ts
        └── types.ts
        └── utils.ts
```

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using yarn and npx
yarn && npx react-native start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
Press 'a'
```

### For iOS

```bash
Press 'i'
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run your React Native App. :partying_face:

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
