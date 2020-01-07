import Vue from 'vue'
import VueLogger from 'vuejs-logger'

const isProduction = process.env.NODE_ENV === 'production';
const options = {
  isEnabled: true,
  logLevel : isProduction ? 'error' : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options)

new Vue({
  data() {
    return{
      a : 'a',
      b : 'b'
    }
  },
  created() {
    this.$log.debug('test', this.a, 123)
    this.$log.info('test', this.b)
    this.$log.warn('test')
    this.$log.error('error')
    this.$log.fatal('test')
}
 
})
