
interface indicator {
  name: string;
  full_name: string;
  type: string;
  inputs: number;
  options: number;
  outputs: number;
  input_names: string[];
  option_names: string[];
  output_names: string[];
  indicator: (inputs: number[][], options: number[], callback: (error: Error, data: number[][]) => void) => void;
  start: (options: number[]) => number;
  [key: string]: any;
}

declare module 'tulind' {
  export const version: string;
  export const indicators: {
    [key: string]: indicator;
  };
};
