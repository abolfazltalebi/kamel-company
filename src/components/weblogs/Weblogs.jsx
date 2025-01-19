import SectionTitle from "../SectionTitle";
import Video from "../Common/video";
import WebLogSection from "./WebLogSection";

export default function Weblogs() {
  return (
    <>
      <SectionTitle
        title="وبلاگ ما"
        subtitle="وبلاگ ما راهنمای شماست."
      />
      <Video />
      <WebLogSection />
    </>
  );
}
