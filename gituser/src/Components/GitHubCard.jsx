import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  max-width: 600px;
  margin: 100px auto;
  background-color: rgb(62, 59, 59);
  color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  margin-left: 230px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
  color: white;
`;

const Info = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
  color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  color: white;

  &:focus {
    border-color: #007bff;
  }
`;

const GitHubCard = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const fetchGitHubData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchGitHubData();
    }
  }, [username]);

  return (
    <CardContainer>
      <Input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={handleChange}
        style={{color:"black"}}
      />
      {userData && (
        <>
          <Avatar src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <Title>{userData.name}</Title>
          <Info>Username: {userData.login}</Info>
          <Info>Public Repos: {userData.public_repos}</Info>
          <Info>Public Gists: {userData.public_gists}</Info>
          <Info>Profile Created At: {new Date(userData.created_at).toLocaleDateString()}</Info>
        </>
      )}
    </CardContainer>
  );
};

export default GitHubCard;
