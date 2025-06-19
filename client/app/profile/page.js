"use client";

import Navbar from "@/components/Navbar";
import { react, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Table from "@mui/joy/Table";

function createData(title, answer) {
  return { title, answer };
}
const rows = [
  createData("Location", "Lucknow"),
  createData("Interests", "Community Engagement"),
  createData("Skills", "Python,Javascript"),
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

const cards = [
  {
    id: 1,
    title: "Plants",
    description: "Plants are essential for all life.",
  },
  {
    id: 2,
    title: "Animals",
    description: "Animals are a part of nature.",
  },
  {
    id: 3,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
];

export default function ProfilePage() {
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="w-[98vw] h-[200vh]  my-[2vh] mx-[1vh] py-[1vh] px-[1vw] flex flex-col justify-center  items-center">
        <div className="w-[20vw] h-[50vh] p-[1rem] flex flex-col justify-center items-center ">
          <img
            src=""
            className="w-[5rem] h-[5rem]  bg-[#2c7f41] rounded-full"
          />
          <h3 className="m-0">Priya Sharma</h3>
          <p className="m-0">Software Engineer</p>
          <p className="m-0">Joined 2025</p>
        </div>
        <div className="w-[98vw] h-[50vh] py-[2vh] ">
          <Tabs defaultValue="About" className="w-[97vw] pl-[1vw]">
            <TabsList className="w-[94vw] bg-[transparent] flex py-[2vw] justify-center items-center">
              <TabsTrigger value="About" className="bg-[transparent] ">
                About
              </TabsTrigger>
              <TabsTrigger value="Posts" className="bg-[transparent]">
                Posts
              </TabsTrigger>
              <TabsTrigger value="Activity" className="bg-[transparent]">
                Activity
              </TabsTrigger>
            </TabsList>
            <TabsContent value="About">
              <div>
                <h3>About</h3>
                <Table>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.title} className="text-[#fff]">
                        <td>{row.title}</td>
                        <td>{row.answer}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="Posts">
              <h3>About</h3>
              <Table>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.title} className="text-[#fff]">
                      <td>{row.title}</td>
                      <td>{row.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TabsContent>
            <TabsContent value="Activity">
              <h3>About</h3>
              <Table>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.title} className="text-[#fff]">
                      <td>{row.title}</td>
                      <td>{row.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-[97vw] h-[30vh] pl-[1vw] pb-[2vh] flex flex-col justify-start">
          <h2>Contributions</h2>
          <div className="w-[100%] h-[20vh] flex flex-row">
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(20vw, 100%), 1fr))",
                gap: 2,
              }}
            >
              {cards.map((card, index) => (
                <Card>
                  <CardActionArea
                    onClick={() => setSelectedCard(index)}
                    data-active={selectedCard === index ? "" : undefined}
                    sx={{
                      height: "100%",
                      "&[data-active]": {
                        backgroundColor: "action.selected",
                        "&:hover": {
                          backgroundColor: "action.selectedHover",
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ height: "100%" }}>
                      <Typography variant="h5" component="div">
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </div>
        </div>
        <div className="w-[97vw] h-[25vh] pl-[1vw] my-[2vh]">
          <h2>Community Reputation</h2>
          <div className="w-[80%]">
            {"Level 3"}

            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <BorderLinearProgress variant="determinate" value={50} />
            </Stack>
          </div>
        </div>
        <div className="w-[97vw] h-[45vh] flex flex-col items-center pl-[1vw] my-[2vh]">
          <h2>Recent Activity</h2>
          <div className="overflow-y-auto scrollbar-hide">
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  09:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  10:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  12:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  9:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
