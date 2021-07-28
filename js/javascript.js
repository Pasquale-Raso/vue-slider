Vue.config.devtools = true;
console.log("Ciao", Vue);

const app = new Vue({
  el: "#app",
  data: {
    images: [
      "images/image1.jpg",
      "images/image2.jpg",
      "images/image3.jpg",
      "images/image4.jpg",
    ],
  },
  methods: {},
});
