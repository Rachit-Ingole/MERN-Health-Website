const Task = require('../models/Task')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors');
const { default: axios } = require('axios');
const data = require('../data/quotes')
require('dotenv').config();

let quoteData = {}

//{'QUOTE-{today}': quote }
const getQuote = async (req, res) => {
 
  async function fetchQuote(){

    const today = (new Date()).toDateString()
    const localKey = `QUOTE-${today}`
    if (quoteData.localKey) {
        const quote = quoteData.localKey;
        res.status(StatusCodes.OK).json(quote)
        return
    }

    quoteData = {};
    const quote = data.default[Math.floor(Math.random() * 418)]
    
    res.status(StatusCodes.OK).json(quote)

  }
  fetchQuote()
  
}



module.exports = {
    getQuote
}
  