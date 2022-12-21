export interface GroovoxConfig {
  storage: S3Storage;
}

export interface S3Storage {
  type: "S3";
  s3: S3;
}

export interface S3 {
  bucket: string;
  endPoint: string;
  accessKey: string;
  secretKey: string;
  useSsl?: boolean;
  port?: number;
  region?: string;
  pathStyle?: boolean;
  [k: string]: unknown;
}
