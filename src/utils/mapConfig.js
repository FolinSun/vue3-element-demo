export default {
  home: () => import('@/views/Home/index.vue'),
  task: () => import('@/views/Task/index.vue'),
  taskDetail: () => import('@/views/Task/detail.vue'),
  educationTraining: () => import('@/views/EducationTraining/index.vue'),
  staffFile: () => import('@/views/EducationTraining/staffFile.vue'),
  examQuestionBank: () =>
    import('@/views/EducationTraining/examQuestionBank.vue'),
  myExam: () => import('@/views/EducationTraining/myExam.vue'),
};
