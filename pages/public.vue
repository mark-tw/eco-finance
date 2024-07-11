<template>
  <div class="resume">
    <h1>Public Page</h1>

    <section class="personal-info">
      <h2>Personal Info</h2>
      <p><strong>Name:</strong> Ravil' Khasyanov</p>
      <p><strong>Email:</strong> ravilkhasyanov@mail.ru</p>
      <p><strong>Phone:</strong> +7(916)744-26-93 </p>
    </section>

    <section class="working-experience">
      <h2>Working Experience</h2>
      <div class="job">
        <h3>Fullstack Developer</h3>
        <p>MEF Moscow - 05/2019 to 03/2020</p>
        <p>Development of a website for booking river cruises in Europe. Integration excel, pdf libraries & e2e testing</p>
      </div>
      <div class="job">
        <h3>Frontend Developer</h3>
        <p>Direct Heroes - 04/2020 to 05/2021</p>
        <p>Development of a platform for programming responses to direct messages on the Instagram via API</p>
      </div>
      <div class="job">
        <h3>Frontend Developer</h3>
        <p>Prestige Group/Lean Geeks - 04/2021 to 05/2023</p>
        <p>Supported internal projects on Vue.js, developed a mobile application on React Native, React, C# + Unity</p>
      </div>
      <div class="job">
        <h3>Frontend Developer</h3>
        <p>Infotechservice - 06/2023 to 07/2024</p>
        <p>Development of user interfaces for an internal product in the energy sector. Migration to Vue3 and Composition API</p>
      </div>
    </section>

    <section class="projects-done">
      <h2>Projects Done</h2>
      <div class="project">
        <h3>Crucemundo</h3>
        <p>River cruises in Europe</p>
      </div>
      <div class="project">
        <h3>Winning Streak</h3>
        <p>Mobile application to track your productivity and goals </p>
      </div>
      <div class="project">
        <h3>ActiveCDN</h3>
        <p>WebPerformance Platform</p>
      </div>
    </section>

    <section class="technology-stack">
      <h2>Technology Stack</h2>
      <ul>
        <li>JS / TypeScript</li>
        <li>Vue2 / Vue3</li>
        <li>Vuex / Pinia</li>
        <li>Node js</li>
        <li>React / React Native</li>
        <li>C# / Unity</li>
        <li>GraphQl / e2e(Cypress) & integration testing(Jest)</li>
      </ul>
    </section>

    <div class="navigation">
      <nuxt-link to="/protected">Protected Page</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.resume {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #3490dc;
  }

  p {
    text-align: center;
    margin-bottom: 30px;
    font-size: 1.2rem;
    font-weight: 300;
  }

  section {
    margin-bottom: 30px;

    h2 {
      border-bottom: 2px solid #3490dc;
      padding-bottom: 5px;
      font-size: 1.5rem;
      color: #2c7a7b;
      margin-bottom: 15px;
    }

    p {
      margin: 10px 0;
      font-size: 1rem;
    }

    .job, .project {
      margin-top: 10px;
      padding: 10px;
      background: #e2e8f0;
      border-radius: 8px;

      h3 {
        margin-bottom: 5px;
        font-size: 1.2rem;
        color: #2b6cb0;
      }

      p {
        margin: 5px 0 10px 0;
        font-size: 0.9rem;
      }
    }
  }

  .technology-stack {
    ul {
      list-style-type: none;
      padding: 0;

      li {
        background: #e2e8f0;
        margin: 5px 0;
        padding: 8px;
        text-align: center;
        border-radius: 4px;
        font-size: 1rem;
      }
    }
  }

  .navigation {
    text-align: center;

    a {
      display: inline-block;
      margin: 0 15px;
      padding: 10px 15px;
      color: #fff;
      background: #3490dc;
      text-decoration: none;
      border-radius: 4px;
      font-size: 1rem;
      transition: background 0.3s;

      &:hover {
        background: #2779bd;
      }
    }
  }
}
</style>
