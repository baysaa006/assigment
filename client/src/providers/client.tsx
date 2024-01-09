import { useToast } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";

const ClientProvider = ({ children }: { children: ReactNode }) => {
  const toast = useToast();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: (error) => {
          toast({
            title: "Алдаа",
            description: error.toString(),
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        },
      },
      mutations: {
        onError: (error) => {
          toast({
            title: "Алдаа",
            description: error.toString(),
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ClientProvider;
