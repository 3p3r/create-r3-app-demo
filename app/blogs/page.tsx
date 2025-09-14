"use client";

import { AntdListInferencer } from "@refinedev/inferencer/antd";
import { ThemedLayout } from "@refinedev/antd";
import { Header } from "@components/header";

export const dynamic = 'force-dynamic';

export default function BlogList() {
  return (
    <ThemedLayout Header={Header}>
      <AntdListInferencer />
    </ThemedLayout>
  );
}