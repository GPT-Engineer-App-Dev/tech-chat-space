import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const categories = ["General", "Programming", "Hardware", "Software", "Networking"];

const Index = () => {
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [posts, setPosts] = useState([
    { title: "Welcome to the Tech Forum", content: "Feel free to discuss anything related to technology here." },
    { title: "Best Programming Languages in 2023", content: "Let's discuss the best programming languages to learn in 2023." },
    { title: "Latest Hardware Releases", content: "Share and discuss the latest hardware releases." },
    { title: "Software Development Tips", content: "Share your tips and tricks for software development." },
    { title: "Networking Basics", content: "Discuss the basics of networking and share resources." },
  ]);

  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, newPost]);
      setNewPost({ title: '', content: '' });
      toast.success('Post created successfully!');
    } else {
      toast.error('Please fill in both title and content.');
    }
  };

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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="mb-4">Create New Post</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a New Post</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Post Title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              />
              <Textarea
                placeholder="Post Content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              />
              <Button onClick={handleCreatePost}>Submit</Button>
            </div>
          </DialogContent>
        </Dialog>
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