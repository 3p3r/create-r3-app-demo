"use client";

import { AntdEditInferencer } from "@refinedev/inferencer/antd";

export const dynamic = 'force-dynamic';

export default function BlogEdit({ params }: { params: { id: string } }) {
  return <AntdEditInferencer />;
}