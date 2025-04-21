<template>
  <a-acrd title="List of Available Courses">
    <a-table :columns="columns" :data-source="classes" />
  </a-acrd>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axiosInstance from '@/api/request';

const classes = ref([]);
const columns = [
  {
    title: 'Course Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Professor',
    dataIndex: 'professor.username',
    key: 'professor.username',
  }
];

onMounted(async () => {
  try {
    const response = await axiosInstance.get('/student/classes');
    classes.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>