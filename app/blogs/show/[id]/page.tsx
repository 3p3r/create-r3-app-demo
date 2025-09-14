"use client";

import { AntdShowInferencer } from "@refinedev/inferencer/antd";

export const dynamic = 'force-dynamic';

export default function BlogShow({ params }: { params: { id: string } }) {
  return <AntdShowInferencer />;
}