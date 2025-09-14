"use client";

import { AuthPage } from "@refinedev/antd";

export const dynamic = 'force-dynamic';

export default function Login() {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: {
          email: "demo@refine.dev",
          password: "demodemo",
        },
      }}
    />
  );
}