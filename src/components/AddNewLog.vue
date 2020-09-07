<template>
  <div>
    <div class="addLog">
      <form class="p-3 mb-2 bg-info text-white">
        <label for="title">Add New Log</label>
        <div class="form-group" style="width: 500px;">
          <input
            type="text"
            class="form-control"
            id="getTitle"
            placeholder="Log Title"
            v-model="title"
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            id="getText"
            rows="3"
            placeholder="Log Message"
            v-model="text"
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-dark"
          @click="newCard"
        >
          Submit Log
        </button>
      </form>
    </div>
    <Logs />
  </div>
</template>

<script>
import moment from 'moment';
import Logs from './Logs.vue';
import { bus } from '../main';
export default {
  components: {
    Logs,
  },
  data() {
    return {
      cardsArray: [],
      title: '',
      text: '',
      id: 0,
    };
  },
  methods: {
    newCard() {
      this.cardsArray.push({
        id: `del${this.id}`,
        modal: `#del${this.id}`,
        title: this.title,
        text: this.text,
        time: moment().format('LLLL'),
      });
      this.id++;
      this.title = '';
      this.text = '';
      bus.$emit('addToLogs', this.cardsArray);
    },
  },
};
</script>

<style>
.addLog {
  display: flex;
  justify-content: center;
}
label,
button {
  display: flex !important;
}
textarea {
  resize: none !important;
}
</style>
