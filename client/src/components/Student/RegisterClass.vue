<template>
  <a-card title="Register for Course">
    <a-form>
      <a-from-item label="Course ID">
        <a-input v-model="classId" placeholder="Please enter course ID" />
      </a-from-item>
      <a-from-item>
        <a-button type="primary" @click="handleSubmit">Register</a-button>
      </a-from-item>
    </a-form>
  </a-card>
</template>

<script setup>
import { ref } from "vue";
import axiosInstance from '@/api/request';

const classId = ref("");

const handleSubmit = async () => {
  e.preventDefault();
  try {
    const response = await axiosInstance.post('/student/classes/register', {
      classId: classId.value
    });
    console.log('Registration successful', response.data);
  } catch (error) {
    console.error(error);
  }
}
</script>