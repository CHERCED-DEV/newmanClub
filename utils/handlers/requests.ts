import { CmsDataConfig } from "@/pages/api/customCms/database/utils.interface";

export async function getCMSData(): Promise<CmsDataConfig> {
    const response = await fetch("/api/customCms");
    return response.json();
  }