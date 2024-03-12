"use client";

import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="min-w-[400px] max-w-[800px]">
      <CardHeader>
        <CardTitle>IA Chat</CardTitle>
        <CardDescription>
          Usando Versel SDK para criar um chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full space-y-4 pr-4">
          {messages.map((message) => {
            return (
              <div
                className="flex gap-3 text-slate-600 text-sm mb-4"
                key={message.id}
              >
                {message.role === "user" ? (
                  <Avatar>
                    <AvatarFallback>Paulo</AvatarFallback>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/32847931?s=48&v=4" />
                  </Avatar>
                ) : (
                  <Avatar>
                    <AvatarFallback>BOT</AvatarFallback>
                    <AvatarImage src="https://www.shutterstock.com/image-vector/3d-vector-robot-chatbot-ai-600nw-2294117979.jpg" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "Paulo Teixeira" : "BOT"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Como posso lhe ajudar?"
            value={input}
            onChange={handleInputChange}
          ></Input>
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
