"use client";

import { AntdCreateInferencer } from "@refinedev/inferencer/antd";
import { ThemedLayout } from "@refinedev/antd";
import { Header } from "@components/header";

export const dynamic = 'force-dynamic';

export default function BlogCreate() {
  return (
    <ThemedLayout Header={Header}>
      <AntdCreateInferencer />
    </ThemedLayout>
  );
}