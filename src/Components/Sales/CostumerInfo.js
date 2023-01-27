import styled from 'styled-components';
import { React, useState, useEffect, useRef } from 'react'
import userEvent from '@testing-library/user-event';
import { useNavigate } from "react-router-dom";

export default function CostumerInfo(props) {

    const navigate = useNavigate();

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const cashRef = useRef(null)
    const cardRef = useRef(null)

    const [cashPayment, setCashPayment] = useState(false)

    function updatePayment() {
        setCashPayment((prev) => !prev)
    }

    async function handleNext(e) {
        e.preventDefault()
        //console.log(lastNameRef.current.value);
        if (cashPayment) {
            fetch('http://localhost:4000/newOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(props.currentOrder)
            })
                .then(res => {
                    console.log(res);
                }).then(() => {
                    navigate('/pupusas')
                }

                )
        }
    }

    return (
        <Container>

            <ReviewHeaderContainer>
                <PIHeader> Enter your information</PIHeader>
            </ReviewHeaderContainer>
            <FormContainer onSubmit={handleNext}>
                <PIInput ref={firstNameRef} type="text" placeholder='First Name' required />
                <PIInput ref={lastNameRef} type="text" placeholder='Last Name ' required />
                <PIInput ref={emailRef} type="text" placeholder='Email' required />
                <PIInput ref={phoneNumberRef} type="text" placeholder='Phone Number' required />


                <Message> You may choose to pay online now or in cash when you pick up your order</Message>
                <PaymentOptionInput>
                    <input ref={cardRef} onClick={updatePayment} type="radio" name="payment" id="card" value="card" defaultChecked />
                    <label htmlFor="card">Card</label>

                </PaymentOptionInput>
                <PaymentOptionInput>
                    <input ref={cashRef} onClick={updatePayment} type="radio" name="payment" id="cash" value="cash" />
                    <label htmlFor="cash">Cash</label>
                </PaymentOptionInput>

                <StandardButton type='submit' value={cashPayment ? 'Place order' : 'Continue to Payment'} />



            </FormContainer>
        </Container>
    )
}

const StandardButton = styled.input`
  width: 220px;
  background-color: #ae0103;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-family: "Josefin Sans", sans-serif;
  display: inline-block;
  border-radius: 12px;
  color: #f7f2dd;
  border: none;
  padding: 2px;
  margin-top: 5px;
`;



const PaymentOptionInput = styled.div`
     font-family: "Josefin Sans", sans-serif;
     display: flex;
     width: 80px;
     padding: 5px;
     justify-content: space-around;
     /* background-color: aqua; */

`


const Message = styled.div`
    font-family: "Josefin Sans", sans-serif;
    font-size: 20px;
`;


const PIInput = styled.input`
    border: none;
    /* border-bottom: 1px solid black; */
    font-family: "Josefin Sans", sans-serif;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
    background-color:#F7F5F4 ;
    width: 50%;
    max-width: 700px;
    padding: 10px;
    margin: 10px 0;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 100%;
    justify-content: start; 
    align-items: center;
    /* background-color: aliceblue; */
    /* padding-left: 10%; */
`

const PIHeader = styled.div`
    font-size: 25px;
    font-family: "Josefin Sans", sans-serif;
`


const ReviewHeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 8vh;
    min-height: 100px;
    justify-content: center;
    align-items: center;
    /* padding-left: ; */
`;

const Container = styled.div`
     display: flex;
     flex-direction: column;
     height: 65vh;
     width: 100%;
     justify-content: center;
     align-items: start;
     background-color : #F7F5F4;
`