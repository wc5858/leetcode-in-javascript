# Write your MySQL query statement below
SELECT 
    tmp2.Score,cast(tmp2.Rank AS signed) as Rank
FROM
    (
        SELECT
            tmp.Score,
            @k:=(CASE WHEN @preScore=tmp.Score OR isnull(@preScore) THEN @k ELSE @k+1 END) AS Rank,
            @preScore:=tmp.Score AS preScore
        FROM
            (
                SELECT
                    *
                FROM
                    Scores
                ORDER BY
                    Score DESC
            )tmp,
            (
                SELECT @k:=1,@preScore:=null
            )sdscore
    )tmp2;