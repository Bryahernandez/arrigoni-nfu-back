BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[CutsStates] (
    [cutStateId] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [CutsStates_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [cutStateId] UNIQUE NONCLUSTERED ([cutStateId])
);

-- AddForeignKey
ALTER TABLE [dbo].[Cuts] ADD CONSTRAINT [Cuts_cutStateId_fkey] FOREIGN KEY ([cutStateId]) REFERENCES [dbo].[CutsStates]([cutStateId]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
