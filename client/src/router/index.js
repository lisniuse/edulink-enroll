import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Auth/Login.vue';
import Register from '@/components/Auth/Register.vue';
import ClassList from '@/components/Student/ClassList.vue';
import RegisterClass from '@/components/Student/RegisterClass.vue';
import DeRegisterClass from '@/components/Student/DeRegisterClass.vue';
import CreateClass from '@/components/Professor/CreateClass.vue';
import EnrolledStudents from '@/components/Professor/EnrolledStudents.vue';
import StudentList from '@/components/Professor/StudentList.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/student/register-class',
    name: 'RegisterClass',
    component: RegisterClass
  },
  {
    path: '/student/deregister-class',
    name: 'DeRegisterClass',
    component: DeRegisterClass
  },
  {
    path: '/professor/create-class',
    name: 'CreateClass',
    component: CreateClass
  },
  {
    path: '/professor/enrolled-students/:classId',
    name: 'EnrolledStudents',
    component: EnrolledStudents
  },
  {
    path: '/professor/student-list',
    name: 'StudentList',
    component: StudentList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;