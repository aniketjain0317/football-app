const express = require('express')
const Team = require('../models/team')
const router = new express.Router()


var teamEntered = [false,false]
var num = 0
router.get('', (req, res) =>
{
    res.render('register')
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

router.get('/team/:num', async (req,res) =>
{
    try
    {
        const num = req.params.num
        if(!teamEntered[num]) {throw new Error()}
        const team = await Team.findOne({num})
        if(!team) {throw new Error()}
        res.send(team)
    } catch(e) {res.status(404).send()}
})


module.exports = router