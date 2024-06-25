import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const categories = ["General", "Programming", "Hardware", "Software", "Networking"];

const posts = [
  { title: "Welcome to the Tech Forum", content: "Feel free to discuss anything related to technology here." },
  { title: "Best Programming Languages in 2023", content: "Let's discuss the best programming languages to learn in 2023." },
  { title: "Latest Hardware Releases", content: "Share and discuss the latest hardware releases." },
  { title: "Software Development Tips", content: "Share your tips and tricks for software development." },
  { title: "Networking Basics", content: "Discuss the basics of networking and share resources." },
];

const Index = () => {
  return (
    <div className="h-screen w-screen flex">
      <aside className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <Tabs defaultValue="general">
          <TabsList className="flex flex-col space-y-2">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category.toLowerCase()}>{category}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </aside>
      <main className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">Tech Forum</h1>
        <ScrollArea className="h-full">
          {posts.map((post, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </main>
    </div>
  );
};

export default Index;