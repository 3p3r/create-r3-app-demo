"use client";

import { AntdEditInferencer } from "@refinedev/inferencer/antd";
import { ThemedLayout } from "@refinedev/antd";
import { Header } from "@components/header";

export const dynamic = 'force-dynamic';

export default function BlogEdit({ params }: { params: { id: string } }) {
  return (
    <ThemedLayout Header={Header}>
      <AntdEditInferencer />
    </ThemedLayout>
  );
}