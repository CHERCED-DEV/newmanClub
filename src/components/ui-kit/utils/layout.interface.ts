import { ReactComponentConfig } from "@/pages/api/customCms/database/utils.interface";
import { HeaderConfig } from "../header/utils/header.interface";
import { footerConfig } from "../footer/utils/footer.interface";
import { ReactNode } from "react";

export interface LayoutCmsConfig {
  header: HeaderConfig;
  footer: footerConfig;
}


