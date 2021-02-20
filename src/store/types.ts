import { Slots } from "vue";

export interface Data {
  [key: string]: unknown;
}

export interface SetupContext {
  attrs: Data;
  slots: Slots;
  emit: (event: string, ...args: unknown[]) => void;
}

export interface GlobalDataProps {
  count: number;
  number: number;
}
