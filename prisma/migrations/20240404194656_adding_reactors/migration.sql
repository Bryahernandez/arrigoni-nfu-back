BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Cuts] ADD [inReactor] BIT NOT NULL CONSTRAINT [Cuts_inReactor_df] DEFAULT 0,
[reactorId] INT;

-- CreateTable
CREATE TABLE [dbo].[Reactors] (
    [reactorId] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [Reactors_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [reactorId] UNIQUE NONCLUSTERED ([reactorId])
);

-- AddForeignKey
ALTER TABLE [dbo].[Cuts] ADD CONSTRAINT [Cuts_reactorId_fkey] FOREIGN KEY ([reactorId]) REFERENCES [dbo].[Reactors]([reactorId]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
