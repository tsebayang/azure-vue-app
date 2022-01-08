<template>
  <div id="weatherapi-weather-widget-3"></div>
</template>

<script>
export default {
  name: "DashboardWeather",
  created() {
    let ckeditor = document.createElement("script");
    ckeditor.setAttribute(
      "src",
      "https://www.weatherapi.com/weather/widget.ashx?loc=2610135&wid=3&tu=2&div=weatherapi-weather-widget-3"
    );
    document.head.appendChild(ckeditor);
  },
};
</script>

<style>
.scheme_43 .weatherapi-weather-cover {
    background-image: none !important;
    border-radius: 0 !important;
}
.weatherapi-weather-more-weather-link {
    height: 100% !important;
    display: none !important;

}
.awe_desc {
    display: none !important;
}
.shm_4 .weatherapi-weather-todays-stats-location {
    padding: 0 !important;
}
</style>
