import './input.svelte'

class Input extends customElements.get('v-input-internal')! {
  static formAssociated = true

  internals = this.attachInternals()

  override connectedCallback () {
    super.connectedCallback()
    this.internals.setFormValue(this.getAttribute('value'))
    this.addEventListener('input', this.updateFormState)
  }

  override disconnectedCallback () {
    super.disconnectedCallback()
    this.removeEventListener('input', this.updateFormState)
  }

  updateFormState = (event: Event) => {
    this.internals.setFormValue((event as unknown as CustomEvent<{ value: string }>).detail.value)
  }
}

customElements.define('v-input', Input)
