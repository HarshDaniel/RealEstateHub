export interface ResponseData<T = undefined> {
  success: boolean;
  error: string | null;
  data?: T | null;
}
