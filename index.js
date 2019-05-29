document.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target.id === 'main') {
    console.log('You clicked on #main')
  } else {
    console.log('You clicked outside #main')
  }
})
