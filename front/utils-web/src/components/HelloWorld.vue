<template>
  <div class="hello">
    <label>
      <input v-model="text">
    </label>
    <button style="margin-left: 10px;" @click="test">加密</button>
    <div style="margin-top: 30px;"><span>http://www.baidu.com/link?url=a3f48d30fc293c5e471ef23de092fddc99</span>{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      text: '',
      content: ''
    }
  },
  methods: {
    test() {

      const text = this.text;

      const ascii = [
        [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/'],
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?'],
        ['@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
        ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_'],
        ['`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
        ['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', ' ']];

      const data = [
        [13, 10],
        [10, 1],
        [16, 15],
        [7, 6],
        [5, 13],
        [18, 9],
        [13, 11],
        [7, 12],
        [10, 5],
        [15, 9],
        [15, 9],
        [13, 5],
        [16, 11],
        [0, 1],
        [8, 2],
        [8, 5],
        [0, 0],
        [17, 15],
        [14, 8],
        [2, 1],
        [10, 5],
        [17, 14],
        [16, 5],
        [3, 8],
        [14, 9],
        [5, 8],
        [15, 1],
        [3, 15],
        [13, 10],
        [10, 12],
        [5, 7],
        [0, 2],
        [18, 14],
        [0, 15],
        [1, 6],
        [13, 5],
        [2, 1],
        [15, 14],
        [18, 8],
        [18, 9],
        [1, 10],
        [14, 14],
        [13, 2],
        [5, 3],
        [5, 8],
        [0, 4],
        [1, 5],
        [16, 1],
        [8, 1],
        [2, 5],
        [10, 7],
        [10, 15],
        [14, 14],
        [17, 3],
        [15, 0],
        [14, 5],
        [7, 7],
        [3, 4],
        [14, 8],
        [12, 0],
        [13, 12],
        [12, 3],
        [6, 5],
        [3, 1],
        [1, 14],
        [5, 4],
        [0, 12],
        [7, 0],
        [10, 7],
        [15, 12],
        [8, 2],
        [18, 15],
        [3, 12],
        [1, 12],
        [0, 15],
        [17, 4],
        [17, 2],
        [11, 1],
        [3, 12],
        [11, 5],
        [0, 13],
        [1, 1],
        [2, 12]];
      //所有的y值

      const y = [
        '0123456789abcdef',
        '1032547698badcfe',
        '23016745ab89efcd',
        '32107654ba98fedc',
        '45670123cdef89ab',
        '54761032dcfe98ba',
        '67452301efcdab89',
        '76543210fedcba98',
        '89abcdef01234567',
        '98badcfe10325476',
        'ab89efcd23016745',
        'ba98fedc32107654',
        'cdef89ab45670123',
        'dcfe98ba54761032',
        'efcdab8967452301',
        'fedcba9876543210'];
      //所有的x值
      const x = [
        '016745',
        '107654',
        '234567',
        '321076',
        '325476',
        '452301',
        '543210',
        '670123',
        '765432',
        '761032',
        '89abcd',
        '89efcd',
        '98fedc',
        'abcdef',
        'badcfe',
        'cdab89',
        'dcba98',
        'ef89ab',
        'fe98ba'];


      let len = text.length;
      let mi = '';
      let this_data_x = '';
      let encode_x = '';
      let this_data_y = '';
      let encode_y = '';
      for (let i = 0; i < len; i++) {
        let ch = text.substring(i, i + 1);
        let f_real_x = '';
        let f_real_y = '';
        for (let i = 0; i < ascii.length; i++) {
          for (let j = 0; j < ascii[i].length; j++) {
            if (ascii[i][j] === ch) {
              f_real_x = i;
              f_real_y = j;
              break;
            }
          }
        }

        if (f_real_x !== '' && f_real_y !== '') {
          this_data_x = x[data[i][0]];
          encode_x = this_data_x[f_real_x];
          mi = mi + encode_x;
          this_data_y = y[data[i][1]];
          encode_y = this_data_y[f_real_y];
          mi = mi + encode_y
        }
      }

     this.content = mi
      // console.log('http://www.baidu.com/link?url=a3f48d30fc293c5e471ef23de092fddc99' + mi)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
