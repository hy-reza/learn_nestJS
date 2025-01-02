export interface Res<T> {
  meta: {
    message: string;
    status: string;
  };
  data: T[];
}
