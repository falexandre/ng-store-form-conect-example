class InputSenior extends HTMLElement {

  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
        <input type="${this.type}" value="${this.value}" list="listAutocomplete" />
        <datalist id="listAutocomplete">
          <option value="Blumenau"></option>
          <option value="Itajai"></option>
          <option value="Indaial"></option>
          <option value="Gaspar"></option>
        </datalist>
        `;
    const input = this.querySelector('input');
    input.addEventListener('keyup', this.changeValue);
  }

  disconnectedCallback() {
    const input = this.querySelector('input');
    input.removeEventListener('keyup', this.changeValue);
  }

  get type() {
    return this.getAttribute('type') || 'text';
  }

  get value() {
    return this.getAttribute('value');
  }

  set value(newValue) {
    this.setAttribute('value', newValue);
  }

  changeValue(e) {
    e.preventDefault();
    const {value} = e.target;
    const modelEvent = new CustomEvent('model', {detail: value});
    this.dispatchEvent(modelEvent);
  }

}

customElements.define("senior-autocomplete", InputSenior);
