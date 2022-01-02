-- FUNCTION: public.get_activity_months_part1(numeric, character varying)

-- DROP FUNCTION IF EXISTS public.get_activity_months_part1(numeric, character varying);

CREATE OR REPLACE FUNCTION public.get_activity_months_part1(
	_year numeric,
	intertype character varying)
    RETURNS TABLE(_month numeric, _amount bigint) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
begin
	return query 
		SELECT 
			EXTRACT(MONTH FROM TO_DATE(_date,'YYYY-MM-DD')) as _month,
			SUM(amount) as _amount
		FROM 
			Activity
		WHERE
			EXTRACT(YEAR FROM TO_DATE(_date,'YYYY-MM-DD')) = _year
			AND _type = intertype
			AND _delete='false'
		GROUP BY
			EXTRACT(MONTH FROM TO_DATE(_date,'YYYY-MM-DD'))
		ORDER BY
			_month;
end;
$BODY$;

ALTER FUNCTION public.get_activity_months_part1(numeric, character varying)
    OWNER TO acehome;
