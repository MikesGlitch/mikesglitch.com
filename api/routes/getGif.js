const { Router } = require('express')

const router = Router()

router.use('/gif', (req, res) => {
  // console.log(process.env.SERVER_GIPHY_API_KEY)
  // res.end(process.env.SERVER_GIPHY_API_KEY)
  const gif = {
    gif: 'https://media0.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=ecf05e47f7htuxg99hiwwugebn4qtz8iyolpn0wf0xno6bwx&rid=giphy.gif'
  }

  res.end(JSON.stringify(gif))
})

module.exports = router
