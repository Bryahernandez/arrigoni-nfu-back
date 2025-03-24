BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[GranelTags] (
    [granelTagId] INT NOT NULL IDENTITY(1,1),
    [peso] FLOAT NOT NULL,
    [userId] INT NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [GranelTags_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    [deleted_at] DATETIME2,
    CONSTRAINT [granelTagId] UNIQUE NONCLUSTERED ([granelTagId])
);

-- AddForeignKey
ALTER TABLE [dbo].[GranelTags] ADD CONSTRAINT [GranelTags_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([userId]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
