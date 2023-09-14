import React from 'react'
import {Button, Container, Heading, Input, Link, Text, VStack} from "@chakra-ui/react"

function Login() {
  return (
  
  
  
      <Container maxW = {"container.xl"} h={"100vh"} p={"16"}>
          <form>
              <VStack alignItems={"stretch"} width={["full",96]} spacing={8} m={"auto"} my={16}>
                  <Heading>Welcome Back</Heading>
                  <Input placeholder={'Email'} required type='Email' focusBorderColor={'purple.500'}/>
                  <Input placeholder={'Password'} required type='Password' focusBorderColor={'purple.500'}/>
                  <Button variant={"link"} alignSelf={"flex-end"}>
                    <Link to={"/forgetpassword"}>Forget Password</Link>
                  </Button>

                  <Button type={'submit'} colorScheme={'purple'}>Login</Button>

                  <Text textAlign={"right"}>
                    New User? {" "}
                    <Button variant={"link"} alignSelf={"flex-end"}>
                        <Link href={"/signup"}>Sign Up</Link>
                    </Button>
                    </Text>             
                </VStack>
          </form>
  
      </Container>
    )
  }
  


export default Login;