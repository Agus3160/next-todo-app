import Todo from "@/model/todoModel";
import connectMongoFB from "@/lib/connectMongoDB";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoFB()
    const todos = await Todo.find()
    return NextResponse.json({todos})
}

export async function POST(request) {
    await connectMongoFB()
    const todoData = await request.json()
    const newTodo = await Todo.create({title:todoData.title})
    return NextResponse.json(
        {
            newTodo: newTodo, 
            message: "Todo created"
        }
        ,{status: 201})
}