import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GROQ_API_KEY: z.string().min(1, "GROQ_API_KEY is required"),
  },
  // Skip validation during build (key is only needed at runtime)
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  experimental__runtimeEnv: {},
});
