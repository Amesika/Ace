-- FUNCTION: public.get_months()

-- DROP FUNCTION IF EXISTS public.get_months();

CREATE OR REPLACE FUNCTION public.get_months(
	)
    RETURNS TABLE(_month numeric) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
begin
	return query 
		SELECT 
			CAST(generate_series AS NUMERIC) as _month
		FROM 
			generate_series(1,12)
		ORDER BY
			_month;
end;
$BODY$;

ALTER FUNCTION public.get_months()
    OWNER TO acehome;
