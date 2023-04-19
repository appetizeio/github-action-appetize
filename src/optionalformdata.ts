import FormData from 'form-data'

export class OptionalFormData extends FormData {
  appendOptional(key: string, value: unknown): void {
    if (value) {
      this.append(key, value)
    }
  }
}
