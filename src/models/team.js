const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema
({
    name:
    {
        required: true,
        type: String
    },
    num:
    {
        required: true,
        type: Number
    },

    GK:
    {
        required: true,
        type: String
    },

    LB:
    {
        required: true,
        type: String
    },
    
    CB1:
    {
        required: true,
        type: String
    },
    
    CB2:
    {
        required: true,
        type: String
    },
    
    RB:
    {
        required: true,
        type: String
    },
    
    LM:
    {
        required: true,
        type: String
    },
    
    CM:
    {
        required: true,
        type: String
    },
    
    RM:
    {
        required: true,
        type: String
    },
    
    LW:
    {
        required: true,
        type: String
    },
    
    CF:
    {
        required: true,
        type: String
    },

    RW:
    {
        required: true,
        type: String
    }
})

const Team = mongoose.model('Team', teamSchema)

module.exports = Team