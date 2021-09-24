const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

var para = [
    "A group of children would play in the garden belonging to a giant each day after school. One day, the giant returns home from a seven year visit to his friend, a Cornish ogre. Furious at finding the children trespassing, he chases them out and proceeds to build a wall around his garden.",
    "Once upon a time, far, far away, there lived a king who had a beautiful daughter who was a princess. They live in a castle surrounded by a large forest. For her birthday one year, the king gave her a golden ball as a present. It was her favorite toy. In the middle of the forest there was a very big pond.",
    "One day, a mother duck felt her eggs begin to shake. One by one, the eggs cracked open.Eight yellow ducklings poked out their heads. 'Peep, peep,' they said. 'Quack, quack!' said Mother Duck. But one egg did not crack-one very big egg.",
    "Once a hungry wolf was in search of his prey. He spotted a goat. 'Oh it will be wonderful to have this fat goat as my meal'. The goat spotted the hungry wolf. 'The wolf is coming in my direction. I better run and save my life. The goat started to run. Before the poor goat can escape, the wolf pounced and instantly killed him.",
    "One day two cats found a loaf of bread. Both the cats wanted the bread so they began fighting. They clawed at each other and fought for long. Along came a monkey. 'Why are you fighting?' he asked. The cats snarled, 'We are fighting because we both want to eat the bread.' The monkey asked, 'Why don’t you share it?'"
];

var rand;
var string;
app.get('/', (req, res) => {
    rand = Math.floor(Math.random() * 5);
    string = para[rand];
    res.render('index', { par: string });
})

app.post('/typing', (req, res) => {
    const { ty } = req.body;
    res.render('result', { ty, string });
})

app.listen(3000, () => {
    console.log("PORT:3000");
})



