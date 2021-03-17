<template>
  <div>
    <h1>WebRTC - WIP - having issues with connection not being open?  try putting the recieve on another page.  This is weird</h1>
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
    </div>
    <div :class="{ 'webcam-container': true, 'show': isCalling }">
      <div class="webcam-container__webcam">
        <video ref="callingStream"></video>
        <p>Webcam 1</p>
      </div>
      <div class="webcam-container__webcam">
        <video ref="receivingSream"></video>
        <p>Webcam 2</p>
      </div>
    </div>
    <div class="chat">
      <p v-for="(message, index) in messages" :key="index">
        <span :class="'chat__from ' + message.css">{{ message.from }}</span> {{ message.text }}
      </p>
    </div>
    <!-- <textarea name="chatMessages" id="chatMessages" cols="30" rows="10" v-model="messages"></textarea> -->
    <input v-model="messageToSend" type="text" />
    <button @click="sendMessage">Send</button>
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
      conn: null,
      messageToSend: null,
      messages: []
    }
  },
  mounted () {
    const Peer = require('peerjs').default
    this.peer = new Peer({
      debug: 2
    })

    this.peer.on('call', call => console.log('PeerJS call', call))
    this.peer.on('open', (event) => {
      console.log('PeerJS open', event)
      // this.conn.send('test')
    })
    this.peer.on('error', err => console.log('PeerJS error', err))
    this.peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        // recieving message
        console.log('message data', data)
        this.messages.push({ from: 'MikesGlitch', css: 'blue', text: data })
      })
      // return console.log('PeerJS connection', conn)
    })
    this.peer.on('close', () => console.log('PeerJS close'))
    this.peer.on('disconnected', () => console.log('PeerJS disconnected'))
  },
  methods: {
    submitPeerId () {
      console.log('submitting', this.peerId)
      if (this.peerId) {
        this.hasSubmittedPeerId = true
      }
    },
    async call () {
      this.isCalling = true

      this.conn = this.peer.connect('mclarkgb')
      // // // on open will be launch when you successfully connect to PeerServer
      this.conn.on('open', (id) => {
        console.log('opening', id)
        this.conn.send('hi!')
      })

      this.peer.on('error', function (err) {
        console.log(err)
      })

      try {
        this.callingSream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        this.$refs.callingStream.srcObject = this.callingSream
        this.$refs.callingStream.play()
        const call = this.peer.call('mclarkgb', this.callingSream)
        console.log('called')
        call.on('stream', (remoteStream) => {
          console.log('streaming to client')
          this.$refs.receivingSream.srcObject = remoteStream
          this.$refs.receivingSream.play()
        })
      } catch (err) {
        console.error('Failed to get local stream', err)
      }
    },
    sendMessage () {
      console.log('send', this.messageToSend)
      this.messages.push({ from: 'You', css: 'green', text: this.messageToSend })
      this.conn.send(this.messageToSend)
      this.messageToSend = null
    }
  }
}
</script>

<style scoped lang="scss">
.webcam-container {
  /* display: flex; */
  flex-direction: row;
  display: none;
}

.show {
  display: flex;
}

.chat {
  background-color: lightgray;

  .green {
    color: green
  }

  .blue {
    color: blue
  }
}
</style>
