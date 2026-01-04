import { baseQuery } from "@/lib/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const patientApi = createApi({
  reducerPath: "patientApi",
  baseQuery,
  tagTypes: ["Patient"],
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => "patients",
      providesTags: ["Patient"],
    }),
    createPatient: builder.mutation({
      query: (body) => ({
        url: "/patient",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Patient"],
    }),
  }),
});

export const { useCreatePatientMutation, useGetPatientsQuery } = patientApi;
