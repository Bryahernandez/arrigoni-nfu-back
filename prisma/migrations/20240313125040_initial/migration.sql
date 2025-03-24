BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[UserTypes] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [UserTypes_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [id] UNIQUE NONCLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [userId] INT NOT NULL IDENTITY(1,1),
    [firstName] VARCHAR(255) NOT NULL,
    [lastName] VARCHAR(255) NOT NULL,
    [role] VARCHAR(255) NOT NULL CONSTRAINT [Users_role_df] DEFAULT '',
    [email] VARCHAR(255) NOT NULL,
    [password] VARCHAR(255) NOT NULL,
    [companyId] INT NOT NULL CONSTRAINT [Users_companyId_df] DEFAULT 1,
    [type] INT NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [Users_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [userId] UNIQUE NONCLUSTERED ([userId]),
    CONSTRAINT [email] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Companies] (
    [companyId] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [rut] VARCHAR(255) NOT NULL,
    [address] VARCHAR(255),
    [created_at] DATETIME2 CONSTRAINT [Companies_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [companyId] UNIQUE NONCLUSTERED ([companyId]),
    CONSTRAINT [rut] UNIQUE NONCLUSTERED ([rut])
);

-- CreateTable
CREATE TABLE [dbo].[Documents] (
    [documentId] INT NOT NULL IDENTITY(1,1),
    [guia] VARCHAR(255) NOT NULL,
    [weight] FLOAT,
    [egress_date] DATETIME2,
    [ingress_date] DATETIME2,
    [user2Id] INT,
    [stateId] INT NOT NULL,
    [companyId] INT NOT NULL,
    [userId] INT NOT NULL,
    [observation] VARCHAR(255),
    [created_at] DATETIME2 CONSTRAINT [Documents_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [documentId] UNIQUE NONCLUSTERED ([documentId])
);

-- CreateTable
CREATE TABLE [dbo].[DocumentStates] (
    [documentStateId] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [DocumentStates_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [documentStateId] UNIQUE NONCLUSTERED ([documentStateId])
);

-- CreateTable
CREATE TABLE [dbo].[DocumentItems] (
    [documentItemId] INT NOT NULL IDENTITY(1,1),
    [typeId] INT NOT NULL,
    [matricula] VARCHAR(255),
    [fuego] VARCHAR(255),
    [stateId] INT NOT NULL,
    [documentId] INT NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [DocumentItems_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [documentItemId] UNIQUE NONCLUSTERED ([documentItemId])
);

-- CreateTable
CREATE TABLE [dbo].[DocumentItemsTypes] (
    [documentItemTypeId] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [DocumentItemsTypes_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [documentItemTypeId] UNIQUE NONCLUSTERED ([documentItemTypeId])
);

-- CreateTable
CREATE TABLE [dbo].[DocumentItemsStates] (
    [documentItemStateId] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [DocumentItemsStates_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [documentItemStateId] UNIQUE NONCLUSTERED ([documentItemStateId])
);

-- AddForeignKey
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_companyId_fkey] FOREIGN KEY ([companyId]) REFERENCES [dbo].[Companies]([companyId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_type_fkey] FOREIGN KEY ([type]) REFERENCES [dbo].[UserTypes]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Documents] ADD CONSTRAINT [Documents_stateId_fkey] FOREIGN KEY ([stateId]) REFERENCES [dbo].[DocumentStates]([documentStateId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Documents] ADD CONSTRAINT [Documents_companyId_fkey] FOREIGN KEY ([companyId]) REFERENCES [dbo].[Companies]([companyId]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Documents] ADD CONSTRAINT [Documents_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([userId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[DocumentItems] ADD CONSTRAINT [DocumentItems_typeId_fkey] FOREIGN KEY ([typeId]) REFERENCES [dbo].[DocumentItemsTypes]([documentItemTypeId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[DocumentItems] ADD CONSTRAINT [DocumentItems_stateId_fkey] FOREIGN KEY ([stateId]) REFERENCES [dbo].[DocumentItemsStates]([documentItemStateId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[DocumentItems] ADD CONSTRAINT [DocumentItems_documentId_fkey] FOREIGN KEY ([documentId]) REFERENCES [dbo].[Documents]([documentId]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
