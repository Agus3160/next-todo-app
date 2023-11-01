import { NextResponse } from "next/server";
import connectMongoFB from "@/lib/connectMongoDB";
import Todo from "@/model/todoModel";

export async function DELETE(request, {params}) {
    await connectMongoFB()
    const res = await Todo.findByIdAndDelete(params.id)
    if(!res) {
        return NextResponse.json({message: "Todo not found"},{status: 404})
    }
    return NextResponse.json({message: "Todo deleted"},{status: 200})
}

export async function PUT(request, {params}) {
    await connectMongoFB()
    const newTodo = await request.json()
    const res = await Todo.findByIdAndUpdate(params.id, {title: newTodo.title})
    if(!res) {
        return NextResponse.json({message: "Todo not found"},{status: 404})
    }
    return NextResponse.json({message: "Todo Updated"},{status: 200})
}