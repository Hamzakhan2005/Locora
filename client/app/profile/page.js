"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
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
import { useEffect } from "react";
import { getUserProfile } from "../utils/api";

function createData(title, answer) {
  return { title, answer };
}

const rows = [
  createData("Location", "Lucknow"),
  createData("Interests", "Community Engagement"),
  createData("Skills", "Python,Javascript"),
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "0.625rem",
  borderRadius: "0.5rem",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "rgba(146, 144, 195, 0.2)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: "0.5rem",
    backgroundColor: "#9290c3",
  },
}));

const cards = [
  {
    id: 1,
    title: "Helped with Moving",
    description: "Assisted neighbor with furniture relocation",
  },
  {
    id: 2,
    title: "Tech Support",
    description: "Fixed computer issues for elderly resident",
  },
  {
    id: 3,
    title: "Tutoring Session",
    description: "Taught JavaScript basics to student",
  },
];

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      }
    };

    fetchUser();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-[#070f2b]">
        <Navbar />
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-[1.25rem] text-[#ef4444]">{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#070f2b]">
        <Navbar />
        <div className="flex items-center justify-center h-[60vh]">
          <div className="w-[4rem] h-[4rem] border-[4px] border-[#9290c3] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070f2b]">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-[2rem] py-[3rem]">
        {/* Profile Header */}
        <div className="bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[3rem] mb-[3rem] border-[2px] border-[#9290c3] shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-[8rem] h-[8rem] bg-[#9290c3] rounded-full flex items-center justify-center mb-[1.5rem] text-[4rem] shadow-lg">
              👤
            </div>
            <h3 className="text-[2.5rem] font-bold text-[#9290c3] mb-[0.5rem]">
              {user.name}
            </h3>
            <p className="text-[1.125rem] text-[#d1d5db] mb-[0.25rem]">
              {user.role || "Community Helper"}
            </p>
            <p className="text-[1rem] text-[#9ca3af]">
              Joined {new Date(user.createdAt).getFullYear()}
            </p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-[3rem]">
          <Tabs defaultValue="About">
            <TabsList className="w-[100%] bg-[rgba(146,144,195,0.08)] flex justify-center items-center gap-[1rem] p-[1rem] rounded-[1rem] border-[2px] border-[#9290c3] mb-[2rem]">
              <TabsTrigger
                value="About"
                className="px-[2rem] py-[0.75rem] rounded-[0.5rem] text-[1rem] font-semibold transition-all data-[state=active]:bg-[#9290c3] data-[state=active]:text-[#ffffff] text-[#d1d5db]"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="Posts"
                className="px-[2rem] py-[0.75rem] rounded-[0.5rem] text-[1rem] font-semibold transition-all data-[state=active]:bg-[#9290c3] data-[state=active]:text-[#ffffff] text-[#d1d5db]"
              >
                Posts
              </TabsTrigger>
              <TabsTrigger
                value="Activity"
                className="px-[2rem] py-[0.75rem] rounded-[0.5rem] text-[1rem] font-semibold transition-all data-[state=active]:bg-[#9290c3] data-[state=active]:text-[#ffffff] text-[#d1d5db]"
              >
                Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="About">
              <div className="bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[2.5rem] border-[2px] border-[#9290c3]">
                <h3 className="text-[2rem] font-bold text-[#9290c3] mb-[1.5rem]">
                  About Me
                </h3>
                <Table
                  sx={{
                    "& tbody tr": {
                      borderBottom: "1px solid rgba(146, 144, 195, 0.2)",
                    },
                    "& td": {
                      padding: "1rem",
                      fontSize: "1.125rem",
                      color: "#d1d5db",
                    },
                    "& td:first-of-type": {
                      color: "#9290c3",
                      fontWeight: "600",
                      width: "30%",
                    },
                  }}
                >
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.title}>
                        <td>{row.title}</td>
                        <td>{row.answer}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="Posts">
              <div className="bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[2.5rem] border-[2px] border-[#9290c3]">
                <h3 className="text-[2rem] font-bold text-[#9290c3] mb-[1.5rem]">
                  My Posts
                </h3>
                <p className="text-[1.125rem] text-[#d1d5db]">
                  No posts yet. Create your first help request!
                </p>
              </div>
            </TabsContent>

            <TabsContent value="Activity">
              <div className="bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[2.5rem] border-[2px] border-[#9290c3]">
                <h3 className="text-[2rem] font-bold text-[#9290c3] mb-[1.5rem]">
                  Recent Activity
                </h3>
                <p className="text-[1.125rem] text-[#d1d5db]">
                  Your recent activity will appear here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Contributions Section */}
        <div className="mb-[3rem]">
          <h2 className="text-[2.5rem] font-bold text-[#9290c3] mb-[2rem]">
            Contributions
          </h2>
          <div className="grid md:grid-cols-3 gap-[1.5rem]">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                onClick={() => setSelectedCard(index)}
                sx={{
                  backgroundColor:
                    selectedCard === index
                      ? "rgba(146, 144, 195, 0.15)"
                      : "rgba(146, 144, 195, 0.08)",
                  border: "2px solid #9290c3",
                  borderRadius: "1rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(146, 144, 195, 0.3)",
                  },
                }}
              >
                <CardActionArea>
                  <CardContent sx={{ padding: "1.5rem" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: "#9290c3",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1rem", color: "#d1d5db" }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Reputation */}
        <div className="bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[2.5rem] mb-[3rem] border-[2px] border-[#9290c3]">
          <h2 className="text-[2.5rem] font-bold text-[#9290c3] mb-[2rem]">
            Community Reputation
          </h2>
          <div className="max-w-[600px]">
            <div className="flex justify-between items-center mb-[1rem]">
              <span className="text-[1.25rem] font-semibold text-[#d1d5db]">
                Level 3
              </span>
              <span className="text-[1rem] text-[#9ca3af]">50% to Level 4</span>
            </div>
            <Stack spacing={2}>
              <BorderLinearProgress variant="determinate" value={50} />
            </Stack>
          </div>
        </div>

        {/* Recent Activity Timeline */}
        <div className="bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[2.5rem] border-[2px] border-[#9290c3]">
          <h2 className="text-[2.5rem] font-bold text-[#9290c3] mb-[2rem] text-center">
            Recent Activity
          </h2>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ color: "#9ca3af", fontSize: "0.875rem" }}
              >
                09:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: "#9290c3" }} />
                <TimelineConnector sx={{ backgroundColor: "#9290c3" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ color: "#d1d5db", fontSize: "1rem" }}>
                Helped with moving furniture
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ color: "#9ca3af", fontSize: "0.875rem" }}
              >
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: "#9290c3" }} />
                <TimelineConnector sx={{ backgroundColor: "#9290c3" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ color: "#d1d5db", fontSize: "1rem" }}>
                Posted new help request
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ color: "#9ca3af", fontSize: "0.875rem" }}
              >
                12:00 pm
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: "#9290c3" }} />
                <TimelineConnector sx={{ backgroundColor: "#9290c3" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ color: "#d1d5db", fontSize: "1rem" }}>
                Received thank you message
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ color: "#9ca3af", fontSize: "0.875rem" }}
              >
                2:00 pm
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: "#9290c3" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ color: "#d1d5db", fontSize: "1rem" }}>
                Completed tutoring session
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>

      <Footer />
    </div>
  );
}
