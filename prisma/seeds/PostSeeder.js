const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");


const prisma=new PrismaClient()

async function PostSeeder(){

    const data=[]

    for(let i=0;i<20;i++){
        const content=faker.lorem.paragraph()
        const userId=faker.number.int({min:1,max:10})

        data.push({content,userId})
    }

    console.log("post seeding started...")
    await prisma.post.createMany({data})

    console.log("post seeding done...")
}
module.exports={PostSeeder}
    

