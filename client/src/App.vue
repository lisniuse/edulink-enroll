<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <a-row justify="space-between">
          <a-col>
            School Course Registration System
          </a-col>
        </a-row>
        <nav class="nav">
          <div class="item">
            <router-link to="/Login">Login</router-link>
          </div>
          <div class="item">
            <router-link to="/register">Register</router-link>
          </div>
          <div class="item">
            <router-link to="/student/register-class">Register Class</router-link>
          </div>
          <div class="item">
            <router-link to="/student/deregister-class">Deregister Class</router-link>
          </div>
          <div class="item">
            <router-link to="/professor/create-class">Create Class</router-link>
          </div>
          <div class="item">
            <router-link to="/professor/student-list">Student List</router-link>
          </div>
        </nav>
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup></script>

<style scoped>

.nav {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>