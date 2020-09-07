<template>
  <div>
    <div
      v-for="cards in cardsArray"
      v-bind:key="cards.id"
      class="card p-3 mb-2 bg-info text-white"
    >
      <div class="card-body">
        <h5 class="card-title">
          {{ cards.title }}
          <DeleteButton :cards="cards" />
        </h5>
        <p class="card-text">
          {{ cards.text }}
        </p>
        <p style="padding: 0; margin: 0">{{ cards.time }}</p>
      </div>
      <div class="modal" tabindex="-1" role="dialog" :id="cards.id">
        <div class="modal-dialog" role="deletModal">
          <div class="modal-content">
            <div class="modal-body">
              <h3 style="color: black">Delete Log</h3>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                @click="deleteLog(cards.id)"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Confirm
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from '../main';
import DeleteButton from './DeleteButton.vue';
export default {
  components: {
    DeleteButton,
  },
  created() {
    bus.$on('addToLogs', (cardsArray) => {
      this.cardsArray = cardsArray;
    });
    bus.$on('deleteLog', (id) => {
      this.deleteLog(id);
    });
  },
  data() {
    return {
      cardsArray: [],
    };
  },
  methods: {
    deleteLog(id) {
      const index = this.cardsArray.findIndex(
        (element) => element['id'] === id
      );
      if (index > -1) {
        this.cardsArray.splice(index, 1);
      }
    },
  },
};
</script>

<style>
.card {
  width: 530px;
  margin: 0 auto;
}

.card-title {
  display: flex;
  justify-content: space-between;
}
</style>
