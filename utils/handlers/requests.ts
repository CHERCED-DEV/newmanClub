import { CmsDataConfig } from "@/pages/api/customCms/database/utils.interface";

/* export async function getCMSData(): Promise<CmsDataConfig> {
  const response = await fetch(process.env.VERCEL_URL_CORS + "/api/customCms");
  return response.json();
} */
export async function getCMSData(): Promise<CmsDataConfig> {
    try {
      const response = await fetch(`${process.env.VERCEL_URL_CORS}/api/customCms`);
      return response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Error parsing CMS data');
    }
  }