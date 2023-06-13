import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { Image, Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

function Profile() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [setDob] = useState("");
  const [gender, setGender] = useState("");
  const [genderPreference, setGenderPreference] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [pic, setPic] = useState("");
  const [video, setVideo] = useState("");
  const { user } = ChatState();

  console.log(user);

  useEffect(() => {
    async function getUser() {
      const response = await fetch(`/api/user/${id}`);
      const data = await response.json();
      setName(data.name);
      setDob(data.dob);
      setGender(data.gender);
      setGenderPreference(data.genderPreference);
      setCountry(data.country);
      setPic(data.pic);
      setVideo(data.video);
      setAge(calculateAge(new Date(data.dob)));
    }
    getUser();
  }, [id]);

  function calculateAge(dateOfBirth) {
    const diff = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <main>
      <div style={{ width: "100%" }}>
        <SideDrawer />
      </div>

      <img
        src="https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="imageHome"
        alt=""
      />

      <div
        className="profileInfo"
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "black",
          padding: "20px",
          borderRadius: "4px",
          marginTop: "30px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ReactCountryFlag
          className="flag"
          countryCode={country}
          svg
          style={{
            position: "absolute",
            top: 50,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.7,
          }}
        />
        <h1>Profile</h1>
        <p style={{ margin: "10px 0" }}>Name: {name}</p>
        <Image
          borderRadius="15%"
          boxSize="300px"
          src={pic}
          alt={name}
          style={{ margin: "30px 0px 50px" }}
        />
        <div
        className="profileInfo"
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "black",
          padding: "20px",
          borderRadius: "4px",
          marginTop: "30px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          opacity: 0.5,
        }}
      >
        <p style={{ margin: "10px 0" }}>Age: {age}</p>
        <p style={{ margin: "10px 0" }}>Country: {country}</p>
        <p style={{ margin: "10px 0" }}>Gender: {gender}</p>
        <p style={{ margin: "10px 0" }}>Interested in: {genderPreference}</p>
        </div>
        {video && (
          <Box mt={3}>
            
            <video width="40%" style={{ margin: "90px 0" }} controls className="videoContainer">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        )}
      </div>
    </main>
  );
}

export default Profile;
