BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[GranelTags] ADD [inReactor] BIT NOT NULL CONSTRAINT [GranelTags_inReactor_df] DEFAULT 0,
[reactorId] INT;

-- AddForeignKey
ALTER TABLE [dbo].[GranelTags] ADD CONSTRAINT [GranelTags_reactorId_fkey] FOREIGN KEY ([reactorId]) REFERENCES [dbo].[Reactors]([reactorId]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
