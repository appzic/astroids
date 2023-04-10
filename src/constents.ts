import path from "path";

export const PROJECT_PATH: string = process.cwd();
export const OUTPUT_DIR: string = path.resolve(PROJECT_PATH, "astroids");
export const CACHE_PATH: string = path.resolve(
  PROJECT_PATH,
  "./node_modules/.cache/@appzic/astroids/cache_data.json"
);

export const DEFAULT_INPUT_FILE: string = "astroids.toml";
export const DEFAULT_ID_LENGTH: number = 8;
