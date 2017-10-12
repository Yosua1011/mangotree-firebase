const express = require('express')
const firebase = require('firebase')
const port = process.env.PORT || 3000
const cors = require('cors')
const cron = require('node-cron')
const app = express()

app.use(cors())

var config = {
  authDomain: "mangotree-yosua.firebaseapp.com",
  databaseURL: "https://mangotree-yosua.firebaseio.com",
  projectId: "mangotree-yosua",
}
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()

const MangoTree = require('./mango')

app.get('/live', (req, res) => {
  let tree = new MangoTree.MangoTree(0,0,0,true);
  let cronJob = cron.schedule('*/1 * * * * *', function(){
    tree.grow();
    tree.harvest();
    tree.produceMangoes();
    db.ref('mango').set({
      stopMessage: '',
      status: `Hello My Mango Tree is ${tree.age} years old and its tall is ${tree.height} meters. It
              has so much fruits ${tree.fruits} harvested with these conditions :
              (${tree.good} good, ${tree.bad} bad)`
    })
    console.log(`Hello My Mango Tree is ${tree.age} years old and its tall is ${tree.height} meters. It
            has so much fruits ${tree.fruits} harvested with these conditions :
            (${tree.good} good, ${tree.bad} bad)`)
    if (tree.healthy == false) {
      db.ref('mango').set({
        stopMessage: 'Finally, the tree is a dead tree now'
      })
      cronJob.stop()
    }
  })
})

app.listen(port);
console.log('I grow with port ' + port + ', i will stop growing if you stoped this program');
