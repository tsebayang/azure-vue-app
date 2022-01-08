<template>
  <div class="reminder">
    <!-- <Form1 /> -->
    <h1>Create Reminder</h1>
    <hr />
    <form @submit.prevent="createEntryAPI">
      <label>Reminder Message</label>
      <textarea v-model="reminderMsg"></textarea>
      <small>Please write what the reminder is for</small>
      <hr />
      <label>Ticket number*</label>
      <input type="number" v-model="ticketID" />
      <hr />
      <!-- <label>Choose Days*</label>
      <div>
        <input type="radio" name="choose-days" value="0" v-model="chooseDays" />
        <label class="radio-label">None</label>
        <input type="radio" name="choose-days" value="1" v-model="chooseDays" />
        <label class="radio-label">Weekly</label>
        <input type="radio" name="choose-days" value="2" v-model="chooseDays" />
        <label class="radio-label">1-day</label>
        <input type="radio" name="choose-days" value="3" v-model="chooseDays" />
        <label class="radio-label">Multiple-days</label>

        <div v-if="chooseDays == 1">
          <select name="select-day">
            <option v-for="days in weekday" :key="days">
              Every {{ days }}
            </option>
          </select>
        </div>

        <div v-if="chooseDays == 2">
          <input type="date" name="day-of-week" v-model="date[0]" />
        </div>
        <div v-if="chooseDays == 3">
          <input type="date" name="day-of-week" v-model="date[0]" />
          <br>
          <br>
          <input type="date" name="day-of-week" v-model="date[1]" />
        </div>
      </div>
      <hr />
      <label>Choose Hours*</label>
      <div>
        <input
          type="radio"
          name="choose-hours"
          value="0"
          v-model="chooseHours"
        />
        <label>None</label>
        <input
          type="radio"
          name="choose-hours"
          value="1"
          v-model="chooseHours"
        />
        <label>1-hour</label>
        <input
          type="radio"
          name="choose-hours"
          value="2"
          v-model="chooseHours"
        />
        <label>Multiple-hours</label>
      </div> -->
      <button>Submit</button>
      <label>* = optional</label>
    </form>
  </div>
</template>

<script>
// const weekday = [
//   "Mondays",
//   "Tuesdays",
//   "Wednesdays",
//   "Thursdays",
//   "Fridays",
//   "Saturdays",
//   "Sundays",
// ];
const API_URL = process.env.VUE_APP_API_URL
  ? `${process.env.VUE_APP_API_URL}/api`
  : "api";

export default {
  name: "Reminder",
  data() {
    return {
      userDetails: "Test",
      userID: 1234,
      reminderMsg: null,
      ticketID: null,
      //   date:
      //   time:
      // weekday,
      // chooseDays: 0,
      // chooseHours: 0,
      // date: new Array(2),
    };
  },
  methods: {
    async createEntryAPI() {
      await (
        await fetch(
          `${API_URL}/reminder-post?userDetails=${this.userDetails}&userID=${this.userID}&reminderMsg=${this.reminderMsg}&ticketID=${this.ticketID}`
        )
      )
        .json()
        .then((res) => {});
    },

    // async readEntriesAPI() {
    //   await (await fetch(`${API_URL}/read_entries/`)).json().then((res) => {
    //     // console.log(res);
    //     this.messages = res;
    //   });
    // },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="date"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}
hr {
  color: white;
}
.reminder h1 {
  color: white;
}
label,
small {
  color: white;
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button {
  background-color: #575fdb;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 1rem;
}
.reminder {
  padding: 2em 3em;
}

@media screen and (min-width: 799px) {
  .reminder {
    padding: 2em 15vw;
  }
}
@media screen and (min-width: 1119px) {
  .reminder {
    padding: 2em 25vw;
  }
}
</style>
