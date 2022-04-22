-- FUNCTION: public.get_banks_with_sold_part1(character varying)

-- DROP FUNCTION IF EXISTS public.get_banks_with_sold_part1(character varying);

CREATE OR REPLACE FUNCTION public.get_banks_with_sold_part1(
	sourcedepense character varying)
    RETURNS TABLE(id bigint, name character varying, number character varying, description character varying, sold real) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
begin
   return query 
   SELECT
	b.id,
	b.name,
	b.number,
	b.description,
	coalesce(SUM(act.amount),0) AS sold
FROM
	activity AS act
RIGHT JOIN
	bank AS b
ON
	b.id=act.bank_id
WHERE
    b.is_deleted = False
AND
	act._delete = False
AND
	act._type = SourceDepense
GROUP BY
	b.id,
	b.name,
	b.number,
	b.description
ORDER BY
	name;
end;
$BODY$;

ALTER FUNCTION public.get_banks_with_sold_part1(character varying)
    OWNER TO acehome;
