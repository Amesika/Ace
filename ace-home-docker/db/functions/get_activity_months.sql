-- FUNCTION: public.get_activity_months(numeric)

-- DROP FUNCTION IF EXISTS public.get_activity_months(numeric);

CREATE OR REPLACE FUNCTION public.get_activity_months(
	_year numeric)
    RETURNS TABLE(_month numeric, source real, depense real) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
begin
	return query 
		SELECT 
			m._month, 
			coalesce(s._amount, 0) as source,
			coalesce(d._amount, 0) as depense
		FROM 
			get_months () as m
		LEFT JOIN 
			get_activity_months_part1 (_year,'source') as s
			ON 
				m._month=s._month
		LEFT JOIN 
			get_activity_months_part1 (_year,'depense') as d
			ON 
				m._month=d._month;
end;
$BODY$;

ALTER FUNCTION public.get_activity_months(numeric)
    OWNER TO acehome;
