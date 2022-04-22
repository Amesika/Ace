-- FUNCTION: public.get_banks_with_sold()

-- DROP FUNCTION IF EXISTS public.get_banks_with_sold();

CREATE OR REPLACE FUNCTION public.get_banks_with_sold(
	)
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
	coalesce(bs.sold,0) - coalesce(bd.sold,0) AS sold
FROM
	bank AS b
LEFT JOIN
	get_banks_with_sold_part1('source') AS bs
ON 
	b.id = bs.id
LEFT JOIN
	get_banks_with_sold_part1('depense') AS bd
ON 
	b.id = bd.id
WHERE
    b.is_deleted = False
AND
    b.name <> 'Pas de bank'
ORDER BY
	name;
end;
$BODY$;

ALTER FUNCTION public.get_banks_with_sold()
    OWNER TO acehome;
