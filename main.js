import './style.css'
import { setupApiCallV1, setupApiCallV2 } from './api.js';


document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="callV1" type="button">Call API V1</button>
      <button id="callV2" type="button">Call API V2</button>
    </div>
  </div>
`

setupApiCallV1(document.querySelector('#callV1'))
setupApiCallV2(document.querySelector('#callV2'))
