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
        <a-select v-model="role">
          <a-select-option value="student">Student</a-select-option>
          <a-select-option value="professor">Professor</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit">Register</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script setup>
import { ref } from 'vue';
import axiosInstance from "@/api/request";

const username = ref('');
const password = ref('');
const role = ref('student');

const handleSubmit = async(e) => {
  e.preventDefault();

  try {
    const params = {
      username: username.value,
      password: password.value,
      role: role.value
    };

    console.log('params', params);

    const response = await axiosInstance.post('/auth/register', params);

    console.log('Registration successful', response.data);
  } catch (error) {
    console.error(error);
  }
}

</script>