<template>
  <div class="home">
    <div class="flex-container">
      <div class="item">
        <h2 class="title">Reminders</h2>
        <ul>
          <li v-for="index in ReminderData" :key="index">
            <ReminderMsg :message="index" />
          </li>
        </ul>
      </div>
      <div class="item">
        <h2 class="title">Events</h2>
        <ul>
          <li v-for="index in EventData" :key="index">
            <EventMsg :message="index" />
          </li>
        </ul>
      </div>
      <div class="item">
        <h2 class="title">On-Call</h2>
        <OnCallMsg />
        <h2 class="title">Weather</h2>
        <DashboardWeather />
        <h2 class="title">Time</h2>
        <DashboardTime />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ReminderMsg from "@/components/ReminderMsg.vue";
import OnCallMsg from "@/components/OnCallMsg.vue";
import EventMsg from "@/components/EventMsg.vue";
import DashboardWeather from "@/components/DashboardWeather.vue";
import DashboardTime from "@/components/DashboardTime.vue";

import ReminderData from "@/store/json/ReminderData.json";
import EventData from "@/store/json/EventData.json";

export default {
  name: "Dashboard",
  data() {
    return {
      ReminderData: [],
      EventData: [],
    };
  },
  components: {
    ReminderMsg,
    OnCallMsg,
    EventMsg,
    DashboardWeather,
    DashboardTime,
  },
  methods: {
    loadData() {
      this.ReminderData = ReminderData;
      this.EventData = EventData;
    },
  },
  async mounted() {this.loadData()},
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.title {
  text-align: left;
  padding: 1rem 1.5rem 0;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  padding: 0 1rem;
}
@media screen and (max-width: 1119px) {
  .flex-container {
    flex-direction: column;
  }
  .item {
    max-height: initial !important;
    overflow-y: hidden !important;
  }
}
.flex-container > * {
  flex-basis: 100%;
}
.item {
  flex: 1 0 auto;
  margin: 10px;
  color: whitesmoke;
  background-color: rgb(72, 75, 90);
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  max-height: calc(50vw - 1rem);
}
</style>
