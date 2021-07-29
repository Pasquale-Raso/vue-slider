Vue.config.devtools = true;
console.log("Ciao", Vue);

const app = new Vue({
  el: "#app",
  data: {
    currentIndex: 0,
    images: [
      "images/image1.jpg",
      "images/image2.jpg",
      "images/image3.jpg",
      "images/image4.jpg",
    ],
  },
  methods: {
    isActive(index) {
      return this.currentIndex === index ? "active" : "";
    },

    incremento() {
      const lastIndex = this.images.length - 1;
      if (this.currentIndex === lastIndex) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.autoPlay();
    },
    decremento() {
      const lastIndex = this.images.length - 1;
      if (this.currentIndex === 0) {
        this.currentIndex = lastIndex;
      } else {
        this.currentIndex--;
      }
      this.autoPlay();
    },
    setCurrentIndex(newIndex) {
      this.currentIndex = newIndex;
    },
    autoPlay() {
      clearTimeout(this.clearTimeoutId);
      this.clearTimeoutId = setTimeout(this.incremento, 4000);
    },
  },
  created() {
    this.autoPlay();
  },
});
