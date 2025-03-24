BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Reactors] ADD [closed] BIT NOT NULL CONSTRAINT [Reactors_closed_df] DEFAULT 0;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
