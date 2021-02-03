<template>
  <div class="gif-container">
    <img :src="currentGif" alt="gif">
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data () {
    const shuffle = (array) => {
      let currentIndex = array.length
      let temporaryValue
      let randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }

    let gifs = [
      'https://media0.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=ecf05e47f7htuxg99hiwwugebn4qtz8iyolpn0wf0xno6bwx&rid=giphy.gif',
      'https://i.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.webp',
      'https://media2.giphy.com/media/vqJAJMr4klojK/giphy.gif?cid=ecf05e4764314fac9b4979969753dfc6dcf35c918ffc089b&rid=giphy.gif',
      'https://media3.giphy.com/media/13HBDT4QSTpveU/giphy.gif?cid=ecf05e47c2nbkyq5atfyrpil3vyn1dkfux3rk58sevr2i5f4&rid=giphy.gif',
      'https://media4.giphy.com/media/13HgwGsXF0aiGY/giphy.gif?cid=ecf05e4782p6rruzc7zux6k1pxvsaqbgwsimn766c70n09uk&rid=giphy.gif',
      'https://media3.giphy.com/media/zOvBKUUEERdNm/giphy.gif?cid=ecf05e472q4ab6c98pusk1c7t78hojltpzhlf528qbrqkvjr&rid=giphy.gif',
      'https://media3.giphy.com/media/MdA16VIoXKKxNE8Stk/giphy.gif?cid=ecf05e4782p6rruzc7zux6k1pxvsaqbgwsimn766c70n09uk&rid=giphy.gif',
      'https://media2.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e4782p6rruzc7zux6k1pxvsaqbgwsimn766c70n09uk&rid=giphy.gif',
      'https://media0.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif?cid=ecf05e470d32qhkrf5bv9yrwnd3uqcnj0734bzs74wt4hs98&rid=giphy.gif',
      'https://media2.giphy.com/media/xT1XGzXhVgWRLN1Cco/giphy.gif?cid=ecf05e475djnskve6rqetrcoqukzdkcg63emh1oiufg6z16d&rid=giphy.gif'
    ]

    gifs = shuffle(gifs)

    return {
      gifs,
      currentGif: gifs[0],
      gifInterval: null
    }
  },

  mounted () {
    this.getGifOnInterval()
  },
  beforeDestroy  () {
    clearInterval(this.gifInterval)
  },
  methods: {
    getGifOnInterval () {
      let index = 0
      const self = this
      this.gifInterval = setInterval(() => {
        if (index === self.gifs.length) {
          index = 0
        }

        this.currentGif = self.gifs[index]
        index++
      }, 8000)
    }
  }
}
</script>

<style lang="scss" scoped>
.gif-container {
  width: 100%;

  img{
    margin: 0 auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  img {
    height: 100%;
  }
}
</style>
