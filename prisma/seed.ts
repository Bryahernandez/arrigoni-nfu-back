import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const user1 = await prisma.userTypes.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Cliente',
        },
    })
    const user2 = await prisma.userTypes.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'Productor',
        },
    })

    // Wait for userTypes upsert operations to finish before starting users upsert operations
    await Promise.all([user1, user2])

    const company = await prisma.companies.upsert({
        where: { companyId: 1 },
        update: {},
        create: {
            name: 'Arrigoni',
            rut: '12345678-9',
            address: 'Calle 123',
        },
    })

    const company2 = await prisma.companies.upsert({
        where: { companyId: 2 },
        update: {},
        create: {
            name: 'Minera Las Cenizas',
            rut: '12345674-5',
            address: 'Calle 123',
        },
    })

    await Promise.all([company, company2])

    const cutState1 = await prisma.cutsStates.upsert({
        where: { cutStateId: 1 },
        update: {},
        create: {
            name: 'Cortado',
        },
    })

    const cutState2 = await prisma.cutsStates.upsert({
        where: { cutStateId: 2 },
        update: {},
        create: {
            name: 'En Proceso',
        },
    })

    const cutState3 = await prisma.cutsStates.upsert({
        where: { cutStateId: 3 },
        update: {},
        create: {
            name: 'Procesado',
        },
    })

    await Promise.all([cutState1, cutState2, cutState3])

    const cliente = await prisma.users.upsert({
        where: { email: 'cliente@arrigoninfu.com' },
        update: {},
        create: {
            email: 'cliente@arrigoninfu.com',
            firstName: 'Cliente',
            lastName: 'Arrigoni',
            password: '$2y$10$E7Z20vB/O0bLojCrYPn.s.f4OmqUc5g0AxQsrNRn99zfh4WbJfmMC',
            type: 1,
            companyId: 1,
            role: 'Cliente',
        },
    })
    const productor = await prisma.users.upsert({
        where: { email: 'productor@arrigoninfu.com' },
        update: {},
        create: {
            email: 'productor@arrigoninfu.com',
            firstName: 'Productor',
            lastName: 'Arrigoni',
            password: '$2y$10$E7Z20vB/O0bLojCrYPn.s.f4OmqUc5g0AxQsrNRn99zfh4WbJfmMC',
            type: 2,
            companyId: 2,
            role: 'Productor',
        },
    })
    await Promise.all([cliente, productor])

    const state1 = await prisma.documentStates.upsert({
        where: { documentStateId: 1 },
        update: {},
        create: {
            name: 'Pendiente',
        },
    })

    const state2 = await prisma.documentStates.upsert({
        where: { documentStateId: 2 },
        update: {},
        create: {
            name: 'Recepcionado',
        },
    })

    const state3 = await prisma.documentStates.upsert({
        where: { documentStateId: 3 },
        update: {},
        create: {
            name: 'En Proceso',
        },
    })

    const state4 = await prisma.documentStates.upsert({
        where: { documentStateId: 4 },
        update: {},
        create: {
            name: 'Procesado',
        },
    })

    await Promise.all([state1, state2, state3, state4])

    const reactor1 = await prisma.reactors.upsert({
        where: { reactorId: 1 },
        update: {},
        create: {
            name: '1',
            closed: false,
        },
    })

    const reactor2 = await prisma.reactors.upsert({
        where: { reactorId: 2 },
        update: {},
        create: {
            name: '2',
            closed: false,
        },
    })

    const reactor3 = await prisma.reactors.upsert({
        where: { reactorId: 3 },
        update: {},
        create: {
            name: '3',
            closed: false,
        },
    })

    await Promise.all([reactor1, reactor2, reactor3])

    const type1 = await prisma.documentItemsTypes.upsert({
        where: { documentItemTypeId: 1 },
        update: {},
        create: {
            name: 'Minero',
        },
    })

    const type2 = await prisma.documentItemsTypes.upsert({
        where: { documentItemTypeId: 2 },
        update: {},
        create: {
            name: 'Granel',
        },
    })

    await Promise.all([type1, type2])

    const item1 = await prisma.documentItemsStates.upsert({
        where: { documentItemStateId: 1 },
        update: {},
        create: {
            name: 'Por Recepcionar',
        },
    })

    const item2 = await prisma.documentItemsStates.upsert({
        where: { documentItemStateId: 2 },
        update: {},
        create: {
            name: 'Recepcionado',
        },
    })

    const item3 = await prisma.documentItemsStates.upsert({
        where: { documentItemStateId: 3 },
        update: {},
        create: {
            name: 'En Proceso',
        },
    })

    const item4 = await prisma.documentItemsStates.upsert({
        where: { documentItemStateId: 4 },
        update: {},
        create: {
            name: 'Procesado',
        },
    })

    await Promise.all([item1, item2, item3, item4])
}

main().then(async () => { await prisma.$disconnect() }).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
},)
