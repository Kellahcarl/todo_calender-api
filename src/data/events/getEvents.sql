SELECT [id],
        [title],
        [description],
        [startDate],
        [startTime],
        [endDate],
        [endTime]
From [dbo].[events]
WHERE [userId] = @userId
ORDER BY 
        [startDate],[startTime]