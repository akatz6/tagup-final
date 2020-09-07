<template>
  <div>
    <span
      class="badge badge-primary badge-pill"
      data-toggle="modal"
      :data-target="cards.modal"
    >
      Delete
    </span>
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
</template>

<script>
import { bus } from '../main';
export default {
  props: ['cards'],
  data() {
    return {
      cardsArray: [],
    };
  },
  methods: {
    deleteLog(id) {
      bus.$emit('deleteLog', id);
    },
  },
};
</script>

<style></style>
