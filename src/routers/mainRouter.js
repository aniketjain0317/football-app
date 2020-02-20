const express = require('express')
const Team = require('../models/team')
const router = new express.Router()


var teamEntered = [false,false]
var num = 0
router.get('', (req, res) =>
{
    res.render('register')
})

router.get('/game', (req,res) =>
{
    res.render('football')
})

router.post('/team', async (req,res) =>
{
  const team = new Team(req.body)
  try
  {
      await team.save()
      res.send(team)
  } catch(e) { res.status(400).send(e) }
})

router.get('/team', async (req,res) =>
{
    try
    {

        const num = parseInt(req.query.num)
        console.log(num)
        const team = await Team.findOne({num})
        if(!team) {throw new Error('def')}
        res.send(team)
    } catch(e) {res.status(404).send(e.message)}
})


module.exports = router