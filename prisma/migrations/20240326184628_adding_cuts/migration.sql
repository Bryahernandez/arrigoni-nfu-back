BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Cuts] (
    [cutId] INT NOT NULL IDENTITY(1,1),
    [cutNumber] INT NOT NULL,
    [cutWeight] FLOAT,
    [cut_date] DATETIME2,
    [documentItemId] INT NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [Cuts_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [cutId] UNIQUE NONCLUSTERED ([cutId])
);

-- AddForeignKey
ALTER TABLE [dbo].[Cuts] ADD CONSTRAINT [Cuts_documentItemId_fkey] FOREIGN KEY ([documentItemId]) REFERENCES [dbo].[DocumentItems]([documentItemId]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
