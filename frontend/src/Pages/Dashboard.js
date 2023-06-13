import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/hooks";
import { useToast } from "@chakra-ui/toast";
import ReactCountryFlag from 'react-country-flag';
import ReactFlagsSelect from 'react-flags-select';
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/react";

export default function Dashboard() {
  const [search ] = useState("");
  const [gender, setGender] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [country, setCountry] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [setLoading] = useState(false);
  const [setLoadingChat] = useState(false);
  const [setSelectedUser] = useState(null);
  const { user, chats, setChats } = ChatState();
    
  console.log(user)
  
  const toast = useToast();
  const { onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCountryChange = (countryCode) => {
    setCountry(countryCode);
  };

  const handleMinAgeChange = (event) => {
    setMinAge(event.target.value);
  };

  const handleMaxAgeChange = (event) => {
    setMaxAge(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!search && !gender && !minAge && !maxAge && !country) {
      toast({
        title: "Please enter search criteria",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const params = {
        search,
        gender,
        minAge,
        maxAge,
        country,
      };

      const { data } = await axios.get(
        'https://passportmatch-app.onrender.com/api/user',
         {
        params,
        ...config,
      });

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error occurred!",
        description: "Failed to load search results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        'https://passportmatch-app.onrender.com/api/chat', { userId }, config);
  
      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
  
      // Set the selected user ID
      setSelectedUser(userId);
  
      setLoadingChat(false);
      onClose();
  
      // Navigate to the chat page
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <main>
      <div className="imageWrapper">
        <img src="https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="background" className="imageHome"/>
        
        <div style={{ width: "100%" }}>
          {user && <SideDrawer />}
        </div>
      </div>

      <form className="formMatches" onSubmit={handleSubmit}>
        <h1>View Matches</h1>
        <label className="labelMatches" htmlFor="gender">
          Select a gender:
        </label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label className="labelMatches" htmlFor="country">
          Select a country:
        </label>
        <div className="react-flags-select-container">
          <ReactFlagsSelect
            name="country"
            id="country"
            searchable={true}
            required
            className="react-flags-select"
            selected={country}
            onSelect={handleCountryChange}
          />
        </div>

        <label className="labelMatches" htmlFor="minAge">
          Minimum Age:
        </label>
        <input
          type="number"
          id="minAge"
          value={minAge}
          onChange={handleMinAgeChange}
          placeholder="Min Age"
        />

        <label className="labelMatches" htmlFor="maxAge">
          Maximum Age:
        </label>
        <input
          type="number"
          id="maxAge"
          value={maxAge}
          onChange={handleMaxAgeChange}
          placeholder="Max Age"
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Matched Users:</h2>
    
      {searchResult.length > 0 ? (
        <ul className="user-list">
          {searchResult.map((user) => (
            <li key={user._id} className="user-card">
              <ReactCountryFlag
                countryCode={user.country}
                svg
                className="flagMatches"
                style={{ width: '300px', height: '200px' }}
              />
              <Image
                marginTop="-10px"
                marginLeft="40px"
                width="70%"
                height="50%"
                borderRadius="45%"
                opacity="0.9"
                src={user.pic}
              />
              <div style={{ marginTop: '10px' }}>
                <h2>Name: {user.name}</h2>
                <h2>Country: {user.country}</h2>
                <h2>Age: {calculateAge(user.dob)}</h2>
                <h2>Gender: {user.gender}</h2>
                <h2>Looking for: {user.genderPreference}</h2>
                <Button colorScheme='teal' variant='solid' mt={4} ml={4} onClick={() => accessChat(user._id)}>Message</Button> 
                <Link to={`/Profile/${user._id}`}>
                  <Button colorScheme="teal" variant="solid" mt={4} ml={5}>
                    View Profile
                  </Button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </main>
  );
}
