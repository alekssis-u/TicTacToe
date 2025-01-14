document.getElementById('button').addEventListener('click', _ => {
    const os = document.querySelector('#shadow')
    os.style.display = 'block'
    const om = document.querySelector('#message')
    om.style.display = 'block'
    os.addEventListener('click', _ => {
      os.style.display = 'none'
      om.style.display = 'none'
    }, {once: true})
  })