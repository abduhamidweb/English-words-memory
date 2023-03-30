const cardsContainer = document.querySelector('#cards-container')
const cardsContainer2 = document.querySelector('#cards-container2')
const array = [{
  ID: 1,
  image: 'hello',
  number: 'salom',
}, ]
array.forEach((item) => {
  const card = document.createElement('div')
  card.setAttribute('class', 'col-3 mx-auto p-3')
  card.classList.add('card')
  card.textContent = item.number < 10 ? '0' + item.number : item.number

  card.addEventListener('click', () => {
    if (
      card.textContent == item.number.toString()) {
      card.textContent = item.image
      const messageInput = document.createElement('div');
      messageInput.textContent = item.image

      function convertToIPA(text) {
        const vowels = /[aeiou]/gi;
        const digraphs = /(ch|sh|th|ph|wh|qu|ou|ie|ea|ai|oy|au|oo|ue|ui|ei|eu)/gi;
        const silentConsonants = /(?<=(b|c|d|g|h|k|p|t|w))h(?=[aeiou])/gi;
        const pronunciations = {
          a: "ə",
          b: "b",
          c: "k",
          d: "d",
          e: "ɛ",
          f: "f",
          g: "ɡ",
          h: "",
          i: "ɪ",
          j: "dʒ",
          k: "k",
          l: "l",
          m: "m",
          n: "n",
          o: "oʊ",
          p: "p",
          q: "kw",
          r: "r",
          s: "s",
          t: "t",
          u: "u",
          v: "v",
          w: "w",
          x: "ks",
          y: "j",
          z: "z",
          " ": " ",
        };
        return text
          .replace(silentConsonants, "")
          .replace(digraphs, (match) => pronunciations[match.toLowerCase()])
          .replace(vowels, (match) => pronunciations[match.toLowerCase()]);
      }


      var ipa = convertToIPA(item.image);
      const submitBtn = document.createElement('div');
      submitBtn.innerHTML = ipa + " <br/> voice"

      card.appendChild(submitBtn);
      const messageOutput = document.createElement('div');
      submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const message = messageInput.innerHTML;
        messageOutput.innerHTML = message;
        readMessage(message);
      });

      function readMessage(message) {
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(message);
          utterance.rate = 0.8; // Set the rate to 0.8 (80% of the default rate)
          speechSynthesis.speak(utterance);
        } else {
          alert('Sorry, your browser doesn\'t support speech synthesis.');
        }
      }
    } else {
      card.textContent = item.number
    }
  })
  cardsContainer.appendChild(card)
})
cardsContainer2.style.display = 'none'
let elBtn = document.createElement('button')
elBtn.setAttribute('id', 'btnNewSistem2')
elBtn.innerHTML = ' Submt'
form.append(elBtn)
btnNewSistem.addEventListener('click', () => {
  cardsContainer.style.display = 'none'
  btnNewSistem.style.display = 'none'
  cardsContainer2.style.display = 'block'
})
btnNewSistem2.addEventListener('click', () => {
  cardsContainer.style.display = 'block'
  btnNewSistem.style.display = 'block'
  cardsContainer2.style.display = 'none'
})
array.forEach((item) => {
  let div = document.createElement('div')
  let label = document.createElement('label')
  label.innerHTML = `OBRZ ${item.number} ga`
  label.setAttribute('for', item.ID)
  let elInput = document.createElement('input')
  elInput.setAttribute('value', item.image)
  elInput.setAttribute('id', 'input2')
  elInput.setAttribute('data-id', item.number)
  div.append(label, elInput)
  form.append(div)
})
form.addEventListener('submit', (e) => {
  e.preventDefault()
  let AllInput = document.querySelectorAll('#input2')
  AllInput.forEach((item) => {
    array.forEach((el) => {
      if (el.number == item.getAttribute('data-id')) {
        el.image = item.value
      }
    })
  })
})