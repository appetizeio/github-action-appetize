import * as core from '@actions/core'
import {uploadBuild} from './appetize'

async function run(): Promise<void> {
  try {
    const result = await uploadBuild()
    core.setOutput('publicKey', result.publicKey)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
