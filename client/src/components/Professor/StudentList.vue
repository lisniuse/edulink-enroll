<template>
  <a-card title="List Of All Students">
    <a-table :columns="columns" :data-source="students"></a-table>
  </a-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosInstance from "@/api/request";

const students = ref([]);
const columns = [
  {
    title: 'Student Name',
    dataIndex: 'username',
    key: 'username',
  }
]

onMounted(async () => {
  try {
    const response = await axiosInstance.get(`/professor/students`);
    students.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>