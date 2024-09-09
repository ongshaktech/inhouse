import { apiSlice } from "../api/apiSlice";

export const projectsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTaskOverview: builder.query({
      query: () => "/projects/task_overview/",
      providesTags: ["task"],
    }),

    moveTaskToAnotherCategory: builder.mutation({
      query: (data) => ({
        url: "/projects/task_overview/",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["task"],
    }),

    completeTask: builder.mutation({
      query: (data) => ({
        url: `/projects/task_overview/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["task"],
    }),

    addTask: builder.mutation({
      query: (data) => ({
        url: `/projects/add_task/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["task"],
    }),

    getAddedTask: builder.query({
      query: () => "/projects/add_task/",
      providesTags: ["task"],
    }),
    viewAllTasks: builder.query({
      query: () => "/users/manage_task/?type=approved",
      providesTags: ["task"],
    }),
    viewATasks: builder.query({
      query: ({ id }) => `/users/manage_task/?type=approved&id=${id}`,
      providesTags: ["task"],
    }),
    getTaskDetail: builder.query({
      query: () => "/projects/add_task/",
      providesTags: ["task"],
    }),

    createProject: builder.mutation({
      query: (data) => ({
        url: `/projects/create_project/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["project"],
    }),
    getAllProject: builder.query({
      query: () => "/projects/view_project/",
      providesTags: ["project"],
    }),

    getTodaysPlan: builder.query({
      query: () => "/projects/todays_plan/",
      providesTags: ["plan"],
    }),
    addTodaysPlan: builder.mutation({
      query: (data) => ({
        url: `/projects/todays_plan/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["plan", "task"],
    }),

    getProjectProgress: builder.query({
      query: () => "/projects/project_progress/",
      providesTags: ["project"],
    }),
    getProjectTimeline: builder.query({
      query: () => "/projects/get_timeline/",
      providesTags: ["project"],
    }),
  }),
});

export const {
  useGetTaskOverviewQuery,
  useMoveTaskToAnotherCategoryMutation,
  useCompleteTaskMutation,
  useAddTaskMutation,
  useGetAddedTaskQuery,
  useViewAllTasksQuery,
  useViewATasksQuery,
  useGetTaskDetailQuery,
  useCreateProjectMutation,
  useGetAllProjectQuery,
  useGetTodaysPlanQuery,
  useAddTodaysPlanMutation,
  useGetProjectProgressQuery,
  useGetProjectTimelineQuery,
} = projectsApi;
