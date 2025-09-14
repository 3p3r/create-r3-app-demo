"use client";

import { AntdShowInferencer } from "@refinedev/inferencer/antd";
import { ThemedLayout } from "@refinedev/antd";
import { Header } from "@components/header";

export const dynamic = 'force-dynamic';

export default function BlogShow({ params }: { params: { id: string } }) {
  return (
    <ThemedLayout Header={Header}>
      <AntdShowInferencer />
    </ThemedLayout>
  );
}