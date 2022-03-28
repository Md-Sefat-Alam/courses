import React from "react";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <div>
        <img
          src="https://leverageedu.com/blog/wp-content/uploads/2020/04/Free-Online-Courses-with-Certificates.jpg"
          alt="Banner picture"
        />
      </div>
      {/* end banner */}

      {/* services */}
      <div>
        <Services />
      </div>
      {/* end services */}
    </div>
  );
};

export default Home;
