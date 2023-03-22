import Navbar from './FAQ';

function About() {
  return (
    <>
      <Navbar />
      <p>about</p>
      {sessionStorage.getItem("id")}
    </>
  );
}

export default About;
