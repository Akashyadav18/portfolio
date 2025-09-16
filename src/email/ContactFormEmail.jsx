import React from 'react'
import {Html,Body,Head,Hr,Container,Preview,Section,Text,Heading} from "@react-email/components"
import { Tailwind } from '@react-email/components'

const ContactFormEmail = ({name, email, message}) => {
  return (
    <Html>
      <Head/>
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className='bg-gray-200 text-black'>
            <Container>
                <Section className='bg-white border-black my-5 px-10 py-4 rounded-md shadow-md'>
                    <Heading className='leading-tight text-lg'>You received the following message from your portfolio contact form</Heading>
                    <Hr/>
                    <Text className='text-xl font-semibold'>Name :<span className='text-xl font-semibold'> {name}</span></Text>
                    
                    <Text className='text-xl font-semibold'>Sender Email :<span className='text-lg font-medium'> {email}</span></Text>
                    
                    <Text className='text-xl font-semibold'>Message :<span className='text-md font-medium'> {message}</span></Text>
                </Section>
            </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactFormEmail
