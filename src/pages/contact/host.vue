<template>
  <div>
    <h1>Answering contact requests</h1>
    <h5>Add some functionality to allow me to send an automated email to whoever called me - info would have been in the email link to this page.  I'll use it to ask them to come back to the website if they've left</h5>
    <!-- <p v-for="contactablePeer in contactablePeers" :key="contactablePeer.id"> {{ contactablePeer }}</p> -->
    <button @click="recieve">Recieve peer</button>
    <video ref="thisSream"></video>
    <video ref="remoteSream"></video>
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
      thisSream: null,
      conn: null
      // contactablePeers: ['test']
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
        this.thisSream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        this.$refs.thisSream.srcObject = this.thisSream
        this.$refs.thisSream.play()

        call.answer(this.thisSream) // Answer the call with an A/V stream.
        call.on('stream', (remoteStream) => {
          // Show stream in some video/canvas element.
          this.$refs.remoteStream.srcObject = remoteStream
          this.$refs.remoteStream.play()
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
