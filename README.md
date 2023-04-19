# Appetize Github Action

[![Build Test](https://github.com/appetizeio/github-action-appetize/actions/workflows/test.yml/badge.svg)](https://github.com/appetizeio/github-action-appetize/actions/workflows/test.yml)
[![Check Distribution](https://github.com/appetizeio/github-action-appetize/actions/workflows/check-dist.yml/badge.svg)](https://github.com/appetizeio/github-action-appetize/actions/workflows/check-dist.yml)

## 📄 Description

GitHub Action to facilitate interaction with Appetize's API. This action can be used to upload an Android .apk or iOS .app to Appetize.

## :arrow_right: Inputs

| Name                  | Description                                                                                                                                                            | Required           | Default                             |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|-------------------------------------|
| apiHost               | Alternative Appetize API host                                                                                                                                          | :white_check_mark: | https://api.appetize.io             |
| apiToken              | Appetize API token for your account                                                                                                                                    | :white_check_mark: |                                     |
| publicKey             | The publicKey of the app to be updated; If no value is provided a new app will be created                                                                              |                    |                                     |
| platform              | The platform targeted by the build, either `android` or `ios`                                                                                                          | :white_check_mark: |                                     |
| appFile               | The local path to the app file to upload, either this or `appURL` must be provided                                                                                     |                    |                                     |
| appUrl                | The URL to the app file to upload, either this or `appFile` must be provided                                                                                           |                    |                                     |
| fileType              | The file type of the app file that will be uploaded; Must be `zip`, `tar.gz` or `apk`                                                                                  |                    | `zip` for iOS and `apk` for Android |
| note                  | A note for your own purposes that will appear on the management dashboard.                                                                                             |                    |                                     |
| timeout               | The number of seconds to wait until automatically ending the session due to user inactivity. Must be `30`, `60`, `120`, `180`, `300`, `600`, `1800`, `3600`, or `7200` |                    | `120`                               |
| disabled              | Whether or not streaming is disabled for this app.                                                                                                                     |                    |                                     |
| disableHome           | Whether or not the home button is disabled for this app.                                                                                                               |                    |                                     |
| useLastFrame          | Whether or not the last image on the screen is shown after the session for the app ends.                                                                               |                    |                                     |
| buttonText            | Customize the message prompting the user to start the session                                                                                                          |                    | `Tap to Play`                       |
| postSessionButtonText | Customize the message prompting the user to restart the session                                                                                                        |                    | `Tap to Play`                       |
| launchUrl             | Specify a deeplink to bring your users to a specific location when your app is launched.                                                                               |                    |                                     |

## :arrow_left: Outputs
| Name      | Description                                |
|-----------|--------------------------------------------|
| publicKey | The publicKey of the app that was uploaded |

## :tractor: Example Usage

### Upload a new iOS app

```yaml
      - name: Upload to Appetize
        uses: appetizeio/github-action-appetize@v1
        with:
          apiToken: ${{ secrets.APPETIZE_API_TOKEN }}
          appFile: test/app.zip
          platform: 'ios'
```

### Upload an existing Android app

```yaml
      - name: Upload to Appetize
        uses: appetizeio/github-action-appetize@v1
        with:
          apiToken: ${{ secrets.APPETIZE_API_TOKEN }}
          publicKey: ${{ secrets.APPETIZE_PUBLIC_KEY }}
          appFile: test/app.apk
          platform: 'android'
```

## 🛠 Developer Setup

### Install the dependencies

```bash
npm install
```

### Build the typescript and package it for distribution

```bash
npm run build && npm run package
```

### Publish to a distribution branch

Actions are run from GitHub repos, so we will check in the packed dist folder. 

Then run `package` (this uses [ncc](https://github.com/vercel/ncc) under the hood):
```bash
 npm run package
 ```
and push the results:
```bash
 git add dist
 git commit -a -m "prod dependencies"
 git push origin releases/{version}
```

The action is now published! 🎉