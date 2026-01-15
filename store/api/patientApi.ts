import { baseApi } from "./baseApi";

export const patientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => "/patient",
      providesTags: ["Patient"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetPatientsQuery } = patientApi;
