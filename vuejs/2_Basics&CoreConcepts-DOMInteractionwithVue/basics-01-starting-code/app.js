const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course learn vue",
      courseGoalB: "Master Vue and building amazing apps",
      vueLink: "www.youtube.com",
    };
  },
  methods: {
    outputGoal() {
      const randomNUmber = Math.random();
      if (randomNUmber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
