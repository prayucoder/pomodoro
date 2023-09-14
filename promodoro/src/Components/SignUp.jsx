import React from 'react'
import {Avatar, Button, Container, Heading, Input, Link, Text, VStack} from "@chakra-ui/react"

function SignUp() {
  return (
  
  
  
      <Container maxW = {"container.xl"} h={"100vh"} p={"16"}>
          <form>
              <VStack alignItems={"stretch"} width={["full",96]} spacing={8} m={"auto"} my={16}>
                  <Heading>Pomodoro</Heading>
                  <Avatar alignSelf={'center'} boxSize={'32'}/>
                  <Input placeholder={'Name'} required type='text' focusBorderColor={'purple.500'}/>
                  <Input placeholder={'Email'} required type='Email' focusBorderColor={'purple.500'}/>
                  <Input placeholder={'Password'} required type='Password' focusBorderColor={'purple.500'}/>
                  <Button variant={"link"} alignSelf={"flex-end"}>
                  </Button>

                  <Button type={'submit'} colorScheme={'purple'}>Sign Up</Button>

                  <Text textAlign={"right"}>
                    Already Signed up? {" "}
                    <Button variant={"link"} alignSelf={"flex-end"}>
                        <Link href={'/login'}>login</Link>
                    </Button>
                    </Text>             
                </VStack>
          </form>
  
      </Container>
    )
  }

export default SignUp;