export interface ApiResponse<T> {
  readonly success: boolean;
  readonly data: T | null;
  readonly message: string;
  readonly errors: Readonly<Record<string, string[]>> | null;
  readonly traceId: string | null;
}