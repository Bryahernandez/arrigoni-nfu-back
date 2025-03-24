import express, { Application } from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "body-parser";
import cors from "cors";
import loginRoutes from "../routes/login"
import documentRoutes from "../routes/documents"
import documentItemRoutes from "../routes/documentItems"
import documentItemTypeRoutes from "../routes/documentItemsTypes"
import documentItemStateRoutes from "../routes/docuementItemsStates"
import companyRoutes from "../routes/companies"
import documentStateRoutes from "../routes/documentsStates"
import cutRoutes from "../routes/cuts"
import reactorRoutes from "../routes/reactors"
import granelTagRoutes from "../routes/granelTags"

interface Paths {
    auth: string;
    users: string;
    userTypes: string;
    documents: string;
    documentItems: string;
    documentItemsTypes: string;
    documentItemsStates: string;
    companies: string;
    documentStates: string;
    cuts: string;
    reactors: string;
    granelTags: string;
}

class Server {
    private app: Application;
    private port: string;
    private prisma: PrismaClient;
    private paths: Paths;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.prisma = new PrismaClient(); // Inicializa el cliente de Prisma
        this.paths = {
            users: '/api/users',
            userTypes: '/api/userTypes',
            auth: '/api/login',
            documents: '/api/documents',
            documentItems: '/api/documentItems',
            documentItemsTypes: '/api/documentItemsTypes',
            documentItemsStates: '/api/documentItemsStates',
            companies: '/api/companies',
            documentStates: '/api/documentStates',
            cuts: '/api/cuts',
            reactors: '/api/reactors',
            granelTags: '/api/granelTags',
        };
        //Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await this.prisma.$connect();
            console.log('Database online');

        } catch (error) {
            throw new Error(error as string);
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //Lectura del body
        this.app.use(json());
    }

    routes() {
        this.app.use(this.paths.auth, loginRoutes)
        this.app.use(this.paths.documents, documentRoutes),
            this.app.use(this.paths.documentItems, documentItemRoutes),
            this.app.use(this.paths.documentItemsTypes, documentItemTypeRoutes),
            this.app.use(this.paths.documentItemsStates, documentItemStateRoutes),
            this.app.use(this.paths.companies, companyRoutes),
            this.app.use(this.paths.documentStates, documentStateRoutes),
            this.app.use(this.paths.cuts, cutRoutes),
            this.app.use(this.paths.reactors, reactorRoutes),
            this.app.use(this.paths.granelTags, granelTagRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        }
        );
    }
}

export default Server;