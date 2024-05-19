import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const Resume = ({ brand }) => {
  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise" />
      <p className="brand">{brand}</p>

      <NavLink to="https://drive.google.com/file/d/1k83won8DLPOq7erqw6VmGzejZWB_a6ga/view?usp=sharing">
      <Button name="Resume" color="#ea5b5c"/>
      </NavLink>
    </section>
  );
};

export default Resume;



