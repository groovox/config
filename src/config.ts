/**
 * Environment variables configuration for Groovox
 */
export interface GroovoxConfig {
  database: DatabaseConfig;
  storage: StorageConfig;
}
/**
 * PostgreSQL Database configuration
 */
export interface DatabaseConfig {
  /**
   * Connection URL
   */
  url: string;
  /**
   * Migrate to latest version on start
   */
  migrate: boolean;
}
/**
 * S3 or S3 compatible storage for media files
 */
export interface StorageConfig {
  bucket: string;
  endPoint: string;
  accessKey: string;
  secretKey: string;
  useSsl?: boolean;
  port?: number;
  region?: string;
  pathStyle?: boolean;
}
