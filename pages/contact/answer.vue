<template>
  <div>
    <button @click="recieve">Recieve peer</button>
    <video ref="recievingSream"></video>
  </div>
</template>

<script>
export default {
  data () {
    return {
      peer: null,
      peerId: null,
      hasSubmittedPeerId: false,
      isCalling: false,
      callingSream: null,
      recievingSream: null,
      conn: null
    }
  },
  mounted () {
    const Peer = require('peerjs').default
    this.peer = new Peer('mclarkgb', {
      debug: 2
    })
    console.log(this.peer)

    console.log('Listening for calls as', 'mclarkgb')
    this.peer.on('open', event => console.log('PeerJS open', event))
    this.peer.on('error', err => console.log('PeerJS error', err))
    this.peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        console.log('data', data)
      })
      console.log('PeerJS connection', conn)
    })
    this.peer.on('close', () => console.log('PeerJS close'))
    this.peer.on('disconnected', () => console.log('PeerJS disconnected'))

    this.peer.on('call', async (call) => {
      console.log('being called')
      try {
        this.recievingSream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        this.$refs.recievingSream.srcObject = this.recievingSream
        this.$refs.recievingSream.play()

        call.answer(this.recievingSream) // Answer the call with an A/V stream.
        call.on('stream', (remoteStream) => {
          // Show stream in some video/canvas element.
          console.log('streaming')
        })
      } catch (err) {
        console.log('Failed to get local stream', err)
      }
    })

    this.peer.on('connection', (conn) => {
      console.log('on connection')
      conn.on('data', (data) => {
        console.log(data)
      })
    })
  },
  methods: {
    recieve () {
    }
  }
}
</script>
