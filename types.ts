export type Service = {
  key: number;
  title: string;
  children: {
    key: string;
    title: string;
    requirements: string[];
  }[];
}
