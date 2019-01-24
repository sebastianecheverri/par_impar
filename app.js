const express = require('express')
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) =>{
  var messages = []
  for (var i = 1; i <= 50; i++){
    messages.push(i + ' Soy ' + (i % 2 == 0 ? 'Par!' : 'Impar!'))
  }
  res.render('index', { messages: messages });
});

app.listen(3000, () => console.log('listening 3000'));