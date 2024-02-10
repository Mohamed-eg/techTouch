"use client";
import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
  Link,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import Image from "next/image";
import LogImg from "../../public/background@2x.png";
import lock from "../../public/icons/Lock.svg";
import send from "../../public/icons/Send.svg";
import message from "../../public/icons/Message.svg";
import { auth } from "../../src/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
export default function SignIn() {
  const [rong,setRong]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.700", "gray.100");
  const isError = email === "";
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`User ${user.email} signed in with UID ${user.uid}`);
        // Redirect to the home page, update the UI, etc.
        router.push("/");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        error?setRong('invaled Email or password'):null;
        // Handle the error, show an error message, etc.
      });
    // console.log(email, password, rememberMe);
  };

  return (
    <div className=" mt-[150px] flex flex-row-reverse items-center justify-between">
      <div className="w-[50%] relative">
        <Image
          className="relative"
          src={LogImg}
          alt="shop"
          width={screen.width / 2}
          height={screen.width / 1.5}
        />
        <div className="img-shadow w-full top-0 right-0 min-h-full z-10"></div>
      </div>

      <div className="flex items-center justify-center w-full text-black">
        <Flex
          className=""
          minH={"80vh"}
          align={"center"}
          justify={"center"}
          bg={bg}>
          <Box
            borderWidth={1}
            px={4}
            py={6}
            shadow={"md"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            bg={useColorModeValue("white", "gray.900")}
            color={color}
            rounded={"lg"}
            w={{ base: "90%", md: 480, lg: 640 }}>
            <Box textAlign={"center"}>
              <Link href={"/"}>
                <Image
                  className="mb-6"
                  src={require("../../public/touch-tech-logo-final-2@2x.png")}
                  alt="logo"
                  width={319}
                  height={220}
                />
              </Link>
              <h1 className="my-2" fontSize={"2xl"}>
                Sign In Now
              </h1>
              <p className="my-2 mb-10">Enter your details below.</p>
            </Box>
            <Box my={8} textAlign="left">
              <form onSubmit={handleSubmit}>
                <FormControl className="my-6 " isRequired>
                  <FormLabel className="formlabel relative">
                    Email address
                  </FormLabel>
                  <div className="w-full div-shadow rounded-md flex flex-row items-center justify-between px-2">
                    <Input
                      className="mt-1 block w-[80%] bg-[#56165000] border-none outline-none sm:text-sm focus:ring-0 focus:ring-offset-0"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Image className="formIcon" alt="message" src={message} />
                  </div>
                  {!isError ? (
                    <FormHelperText className=" absolute text-red top-24 left-0">
                      Enter the email.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage className=" absolute text-red top-24 left-0">
                      Email is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl className="my-6 " isRequired mt={6}>
                  <FormLabel className="formlabel">Password</FormLabel>
                  <div className="w-full div-shadow rounded-md flex flex-row items-center justify-between px-2">
                    <Input
                      className="mt-1 block w-[80%] bg-[#56165000] border-none outline-none sm:text-sm focus:ring-0 focus:ring-offset-0"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Image className="formIcon" alt="lock" src={lock} />
                  </div>
                </FormControl>
                  <span className={"text-red text-sm"}>{rong}</span>
                <Flex justifyContent={"space-between"} mt={4}>
                  <FormControl
                    className="my-4"
                    display={"flex"}
                    alignItems={"center"}>
                    <Input
                      className="mr-2 rounded-[4px] border border-[#dcdada] border-solid"
                      name="rememberMe"
                      value={rememberMe}
                      type="checkbox"
                      isChecked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <FormLabel className="text-black inline w-full m-6" ml={2}>
                      Remember me
                    </FormLabel>
                  </FormControl>
                  <Link color={"blue.400"} href={"/forgot-password"}>
                    Forgot password?
                  </Link>
                </Flex>
                <Button
                  className="w-full bg-primary1 p-2 text-white border-none outline-none cursor-pointer rounded-lg text-xl"
                  type="submit">
                  Sign In
                  <Image className="ml-1" alt="lock" src={send} />
                </Button>
              </form>
              <p mt={6}>
                Do not have an account?{" "}
                <Link color={"blue.400"} href={"/signup"}>
                  Sign Up
                </Link>
              </p>
            </Box>
          </Box>
        </Flex>
      </div>
    </div>
  );
}
