
import {expect, test, beforeAll, describe} from '@jest/globals'
import {getInputs} from "../src/appetize";

const inputData = {
  apiHost: "apiHost",
  apiToken: "apiToken",
  publicKey: "publicKey",
  platform: "android",
  appFile: "fileLocation",
  appUrl: "urlLocation",
  fileType: "apk",
  note: "note",
  timeout: "120",
  disabled: "false",
  disableHome: "true",
  useLastFrame: "false",
  buttonText: "string",
  postSessionButtonText: "string",
  launchUrl: "string"
}

describe('Validate inputs', () => {
  beforeAll(() => {
    for (const [key, value] of Object.entries(inputData)) {
      setInput(key, value)
    }
  })

  test("apiHost", () => {
    expect(getInputs().apiHost).toBe(inputData.apiHost)
  })

  test("apiKey", () => {
    expect(getInputs().apiToken).toBe(inputData.apiToken)
  })

  test("publicKey", () => {
    expect(getInputs().publicKey).toBe(inputData.publicKey)
  })

  test("platform", () => {
    expect(getInputs().platform).toBe(inputData.platform)
  })

  test("appFile", () => {
    expect(getInputs().appFile).toBe(inputData.appFile)
  })

  test("appUrl", () => {
    expect(getInputs().appUrl).toBe(inputData.appUrl)
  })

  test("fileType", () => {
    expect(getInputs().fileType).toBe(inputData.fileType)
  })

  test("note", () => {
    expect(getInputs().note).toBe(inputData.note)
  })

  test("timeout", () => {
    expect(getInputs().timeout).toBe(Number(inputData.timeout))
  })

  test("disabled", () => {
    expect(getInputs().disabled).toBe(Boolean(inputData.disabled))
  })

  test("disableHome", () => {
    expect(getInputs().disableHome).toBe(Boolean(inputData.disableHome))
  })

  test("useLastFrame", () => {
    expect(getInputs().useLastFrame).toBe(Boolean(inputData.useLastFrame))
  })

  test("buttonText", () => {
    expect(getInputs().buttonText).toBe(inputData.buttonText)
  })

  test("postSessionButtonText", () => {
    expect(getInputs().postSessionButtonText).toBe(inputData.postSessionButtonText)
  })

  test("launchUrl", () => {
    expect(getInputs().launchUrl).toBe(inputData.launchUrl)
  })
})

const setInput = (name: string, value: any) => {
  process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] = value
}
