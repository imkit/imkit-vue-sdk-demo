# Introduction

This guide demonstrates how to integrate the IMKit Vue SDK into your web application.

# Running the Demo App

```sh
cd widget
pnpm install
pnpm dev
```

# Integration

Follow these steps to integrate the IMKit Vue SDK into your own web application:

## 1. Deploy IMKit Vue SDK on your web server

Clone the IMKit Vue SDK repository from GitHub:

https://github.com/imkit/imkit-vue-sdk

Configure the SDK with the following settings:

```
{
  domain: 'https://imkit-dev.funtek.io',
  clientKey: 'fangho_imkit_0412_2018_001_clientkey',
  token:
    '...',
  translationApiKey: '...',
  mapApiKey: '...',
  firebaseConfig: null,
  firebaseVapidKey:
    '...',
}
```

## 2. Display chat UI using an iframe

In the `widget/src/App.vue` file, you'll find an example of how to use an iframe to display the chat UI. Choose one of the following options:

```
// show both room list and chatroom
<iframe
    src="https://imkit-vue-sdk.web.app/?token=xxx"
></iframe>

// show specific chatroom only
<iframe
    src="https://imkit-vue-sdk.web.app/?token=xxx&roomId=xxx"
></iframe>
```

Remember to replace the "xxx" placeholders with your actual token and room ID values.
