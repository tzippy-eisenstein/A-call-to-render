
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const sdk = require('api')('@render-api/v1.0#34i64rhilu8ilhkj');
sdk.auth('rnd_jfeZ4V0k3EBXjVOWzI92jZ8xiJ5A');


app.get('', (req, res) => {
    sdk.getServices({limit: '20'})
    .then(({ data }) => res.status(200).send({data}))
    .catch(err => console.error(err));  
         

})

//יצירת מאזין
app.listen(3001, () => {
    console.log(`my app is listening in http://localhost:3001`);
})