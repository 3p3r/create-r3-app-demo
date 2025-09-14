"use client";

import React from "react";
import { Refine, GitHubBanner } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { App as AntdApp } from "antd";
import routerProvider from "@refinedev/nextjs-router/app";

import { remultDataProvider } from "src/provider/dataProvider";
import { entities } from "src/shared";
import { ColorModeContextProvider } from "@contexts";
import { authProvider } from "src/authProvider";
import { liveProvider } from "src/provider/liveProvider";

// Simple notification provider
const notificationProvider = {
  open: ({ message, type, description }: any) => {
    console.log('Notification:', { message, type, description });
  },
  close: (key: string) => {
    console.log('Close notification:', key);
  },
};

export function RefineContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <Refine
              routerProvider={routerProvider}
              dataProvider={remultDataProvider(entities)}
              notificationProvider={notificationProvider}
              authProvider={authProvider}
              resources={[
                {
                  name: "blogs",
                  list: "/blogs",
                  create: "/blogs/create",
                  edit: "/blogs/edit/:id",
                  show: "/blogs/show/:id",
                  meta: {
                    canDelete: true,
                  },
                }
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                liveMode: "auto"
              }}
              liveProvider={liveProvider(entities)}
            >
              {children}
              <RefineKbar />
            </Refine>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </>
  );
}