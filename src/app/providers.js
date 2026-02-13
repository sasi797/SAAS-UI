"use client";

import { ReduxProvider } from "@/store/Provider";
import FormAlertListener from "./components/FormAlertListener";

export default function Providers({ children }) {
  return (
    <ReduxProvider>
      <FormAlertListener />
      {children}
    </ReduxProvider>
  );
}
