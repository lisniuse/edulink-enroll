<template>
  <a-card :title="`${className}Enrolled Students`">
    <a-table :columns="columns" :data-source="students"></a-table>
  </a-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';
import axiosInstance from "@/api/request";

const route = useRoute();
const classId = route.params.classId;
const className = ref('');
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
    const classResponse = await axiosInstance.get(`class/${classId}`);
    className.value = classResponse.data.className;
    const studentsResponse = await axiosInstance.get(`professor/classes/${classId}/students`);
    students.value = studentsResponse.data;
  } catch (error) {
    console.error(error);
  }
});
</script>