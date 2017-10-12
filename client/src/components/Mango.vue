<template>
  <div class="mango-wrap">
    <h1>Mango Tree Simulator</h1>
    <button class="btn btn-primary btn-success" @click="startMango">Watch My Grow History</button>
    <div class="image-wrap">
      <ul>
        <li v-if="die !== 'Finally, the tree is a dead tree now'"><img src="../assets/image (2).jpg" /></li>
        <li v-if="die === 'Finally, the tree is a dead tree now'"><img src="../assets/pohonmati.jpg" /></li>
      </ul>
    </div>
    <h2>{{status}}</h2>
    <h3>{{die}}</h3>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'mango',
  data () {
    return {
      status: '',
      die: ''
    }
  },
  methods: {
    ...mapActions([
      'liveGrow'
    ]),
    getStatus () {
      this.$db.on('value', (mango) => {
        this.status = mango.val().status
        this.die = mango.val().stopMessage
      })
    },
    startMango () {
      this.$db.set({ status: '', die: '' })
      this.liveGrow()
    }
  },
  mounted () {
    this.getStatus()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
}

.btn {
  margin: 10px 0px 10px 0px;
}
</style>
