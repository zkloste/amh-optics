import { NextPage } from "next/types";
import ServiceSection from "../components/services/service.component";
import { useRouter } from "next/router";

const About: NextPage = () => {
  const router = useRouter();
  const { service } = router.query;

  return (
    <>
      <div>
        <ServiceSection section="hello" />
      </div>
    </>
  );
};

export default About;
