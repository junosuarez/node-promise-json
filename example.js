const json = require('./')
json('https://en.wikipedia.org/w/api.php?action=query&titles=Tardigrade&format=json')
  .then(console.log)
