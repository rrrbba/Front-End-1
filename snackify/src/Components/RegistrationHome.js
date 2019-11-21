import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Pic = styled.img`
height: 300px;
`

const Card = styled.div`
border: solid black 1px;
width: 40%;
margin: auto;
margin-top: 3%;
margin-bottom: 1%;
backgroundImage: './download.jpg';
display: flex;
flex-direction: column;
align-items: center;
`

const Page = styled.div`
    display: flex;
`

export default function RegistrationHome() {
    return (
        <Page>
            <h2>Registration</h2>
            <Card className="Employee">
                <div><Pic src={require('../assets/images/male_avatar.png')} /></div>
                <h1>Employee</h1>
                <NavLink to="/EmployeeRegistration">
                    <button>Sign Up</button>
                </NavLink>

            </Card>
            <Card className="Company">
                <Pic src={require('../assets/images/workers.png')} />
                <h1>Company</h1>
                <NavLink to="/OrgRegistration" >
                    <button>Sign Up</button>
                </NavLink>
            </Card>
        </Page>
    )
}