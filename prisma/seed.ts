import { prisma } from '@/lib/prisma';

async function main() {
    console.log("Seeding database...")

    await prisma.task.deleteMany()

    await prisma.task.createMany({
        data: [
            {
                text: "Do stuff",
                checked: false,
            },
            {
                text: "Do some more stuff",
                checked: true,
            },
            {
                text: "Even more stuff!!!",
                checked: false,
            }
        ],
    })

    console.log("Database seeded successfully!")
}

main()
    .catch((e) => {
        console.error("Seeding error:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })