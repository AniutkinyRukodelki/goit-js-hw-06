const refs = {
    input: document.querySelector('#name-input'),
    title: document.querySelector('#name-output'),
}

const onInputChange = event => {
    refs.title.textContent = event.currentTarget.value.trim() ? event.target.value: 'Anonymous';
}

refs.input.addEventListener('input', onInputChange);