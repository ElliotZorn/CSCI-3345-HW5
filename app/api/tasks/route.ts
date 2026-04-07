import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const tasks = await prisma.task.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return new Response(JSON.stringify(tasks), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response('Failed to fetch tasks', { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { text } = await req.json();

        if (!text || typeof text !== 'string') {
            return new Response('Invalid task text', { status: 400 });
        }

        const task = await prisma.task.create({
            data: { text, checked: false },
        });

        return new Response(JSON.stringify(task), { status: 201 });
    } catch (err) {
        console.error(err);
        return new Response('Failed to create task', { status: 500 });
    }
}

export async function PATCH(req: Request) {
    try {
        const { id, checked } = await req.json();

        if (typeof id !== 'number' || typeof checked !== 'boolean') {
            return new Response('Invalid data', { status: 400 });
        }

        const updatedTask = await prisma.task.update({
            where: { id },
            data: { checked },
        });

        return new Response(JSON.stringify(updatedTask), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response('Failed to toggle task', { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();

        if (typeof id !== 'number') {
            return new Response('Invalid task ID', { status: 400 });
        }

        await prisma.task.delete({
            where: { id },
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response('Failed to delete task', { status: 500 });
    }
}