import { SkillMapClient } from "./SkillMapClient";
import { SITE_NAME } from "@/config/site";

export const metadata = {
  title: `Learning Path — ${SITE_NAME}`,
};

export default function MapPage() {
  return <SkillMapClient />;
}