<template>
  <div>
    <h1>WebRTC</h1>
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

    {{isCalling}}
    {{callingSream}}
    <div v-if="isCalling && callingSream">
      <video :src="callingSream"></video>
    </div>
  </div>
</template>

<script>
// import Peer from 'peerjs'

export default {
  data () {
    return {
      peer: null,
      peerId: null,
      hasSubmittedPeerId: false,
      isCalling: false,
      callingSream: null
    }
  },
  methods: {
    submitPeerId () {
      console.log('submitting', this.peerId)
      if (this.peerId) {
        this.hasSubmittedPeerId = true
      }
    },
    call () {
      if (!process.client) {
        return
      }

      this.isCalling = true
      const Peer = require('peerjs').default

      this.peer = new Peer()

      console.log('calling')

      const conn = this.peer.connect('mclarkgb@gmail.com')

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
      navigator.mediaDevices.getUserMedia({ video: true, audio: false }, (stream) => {
        console.log('got user media')
        this.callingSream = stream
        const call = this.peer.call('another-peers-id', stream)
        call.on('stream', (remoteStream) => {
          // Show stream in some video/canvas element.
          console.log('stream')
        })
      }, function (err) {
        console.log('Failed to get local stream', err)
      })
    },
    recieve () {
      if (!process.client) {
        return
      }

      const Peer = require('peerjs').default
      this.peer = new Peer(this.peerId)
      console.log('recieving')

      this.peer.on('error', function (err) {
        console.log(err)
      })

      this.peer.on('call', function (call) {
        console.log('called')
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }, (stream) => {
          call.answer(stream) // Answer the call with an A/V stream.
          call.on('stream', (remoteStream) => {
            // Show stream in some video/canvas element.
            console.log('streaming')
          })
        }, function (err) {
          console.log('Failed to get local stream', err)
        })
      })
    }
  }
}
</script>
