<template>
  <div>
    <h1>WebRTC - WIP</h1>
    <p>Peers - <a href="https://mikesglitch.com/api/peerjs/webrtc/peerjs/peers">https://mikesglitch.com/api/peerjs/webrtc/peerjs/peers</a></p>
    <p>To call me you need to have audio and video capabilities</p>
    <p><a href="https://glitch.com/~peerjs-video">https://glitch.com/~peerjs-video</a></p>
    <div v-if="!hasSubmittedPeerId">
      <label for="peerId">Please enter your email</label>
      <input id="peerId" v-model="peerId" />
      <button @click="submitPeerId">Enter</button>
    </div>
    <div v-if="hasSubmittedPeerId">
      <button @click="call">Connect peer</button>
      <button @click="recieve">Recieve peer</button>
    </div>
    <div v-if="isCalling && callingSream">
    </div>
    <video ref="callingStream"></video>
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
      recievingSream: null
    }
  },
  methods: {
    submitPeerId () {
      console.log('submitting', this.peerId)
      if (this.peerId) {
        this.hasSubmittedPeerId = true
      }
    },
    async call () {
      if (!process.client) {
        return
      }

      this.isCalling = true
      const Peer = require('peerjs').default

      this.peer = new Peer()

      // this.peer = new Peer(this.peerId, {
      //   host: '/',
      //   port: window.location.port,
      //   path: '/api/peerjs/webrtc'
      // })

      console.log('calling')

      const conn = this.peer.connect('mclarkgb')

      console.log('peerid', this.peer.id)

      // on open will be launch when you successfully connect to PeerServer
      conn.on('open', (id) => {
        console.log('saying hi', id)
        // here you have conn.id
        conn.send('hi!')
      })

      this.peer.on('connection', (conn) => {
        conn.on('data', (data) => {
        // Will print 'hi!'
          console.log(data)
        })
      })

      this.peer.on('error', function (err) {
        console.log(err)
      })

      console.log('getting usermedia', navigator.mediaDevices.getUserMedia)
      try {
        this.callingSream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        console.log('got user media')
        this.$refs.callingStream.srcObject = this.callingSream
        this.$refs.callingStream.play()
        const call = this.peer.call('mcalrkgb', this.callingSream)
        call.on('stream', (remoteStream) => {
          // Show stream in some video/canvas element.
          console.log('stream')
        })
      } catch (err) {
        console.error('Failed to get local stream', err)
      }
    },
    recieve () {
      if (!process.client) {
        return
      }

      const Peer = require('peerjs').default
      // this.peer = new Peer(this.peerId)
      this.peer = new Peer('mclarkgb')
      // this.peer = new Peer('mclarkgb', {
      //   host: '/',
      //   port: window.location.port,
      //   path: '/api/peerjs/webrtc'
      // })
      console.log('recieving')

      this.peer.on('error', function (err) {
        console.log(err)
      })

      this.peer.on('call', async (call) => {
        try {
          console.log('called')
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
    }
  }
}
</script>
