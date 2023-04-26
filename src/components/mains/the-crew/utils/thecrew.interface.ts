import { ImgConfig } from "@/pages/api/customCms/database/utils.interface";

export interface TheCrewConfig {
  title: string,
  description: string[],
  button: string,
  crew_img: ImgConfig,
  group_options: GroupOptionsCrewConfig[],
}

export interface GroupOptionsCrewConfig {
  img: ImgConfig,
  users: string,
  description: string,
}

export interface TheCrewDataProps {
  the_crew: TheCrewConfig
}

export interface GroupOptionsCrewDataProps {
  group_options: GroupOptionsCrewConfig,
}
