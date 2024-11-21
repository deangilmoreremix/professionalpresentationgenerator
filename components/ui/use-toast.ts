"use client";

import * as React from "react";
import { useToast as useToastBase } from "@/components/ui/toast";

export function useToast() {
  const { toast } = useToastBase();
  return { toast };
}