"use client";
import { PropsWithChildren } from "react";
import {
  QueryClient,
  QueryClientProvider as QueryProvider,
} from "@tanstack/react-query";
export default function QueryClientProvider({ children }: PropsWithChildren) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
      },
    },
  });
  return <QueryProvider client={queryClient}>{children}</QueryProvider>;
}
