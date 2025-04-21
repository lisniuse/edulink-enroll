<template>
  <a-card title="Create Course">
    <a-form>
      <a-from-item label="Course Name">
        <a-input v-model="className"/>
      </a-from-item>
      <a-from-item>
        <a-button type="primary" @click="handleSubmit">Create Course</a-button>
      </a-from-item>
    </a-form>
  </a-card>
</template>

<script setup>
import { ref } from "vue";
import axiosInstance from "@/api/request";

const className = ref("");

const handleSubmit = async () => {
  e.preventDefault();
  try {
    const response = await axiosInstance.post('/professour/classes/create', { name: className.value });
    console.log('Successful created the course', response.data);
  } catch (error) {
    console.error(error);
  }
}
</script>