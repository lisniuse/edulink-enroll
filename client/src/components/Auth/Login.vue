<template>
  <a-card title="Login">
    <a-form>
      <a-form-item label="Username">
        <a-input v-model="username" placeholder="Username" />
      </a-form-item>
      <a-form-item label="Password">
        <a-input type="password" v-model="password" placeholder="Password" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit">Login</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script setup>
import { ref } from 'vue';
import axiosInstance from "@/api/request";

const username = ref('');
const password = ref('');

const handleSubmit = async(e) => {
  e.preventDefault();

  try {
    const response = await axiosInstance.post('/auth/login', {
      username: username.value,
      password: password.value
    });

    const token = response.data.token;
    localStorage.setItem('token', token);

    console.log('Login successful', response.data);
  } catch (error) {
    console.error(error);
  }
}

</script>