<template>
  <h1 id="time">{{ time }}</h1>
</template>

<script>
export default {
    name: "Time",
  data() {
    return {
      interval: null,
      time: this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format(),
    };
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval);
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);
  },
};
</script>

<style>
#time {
    text-align: center;
    margin: 0 auto;
    padding-bottom: 2rem;
}
</style>