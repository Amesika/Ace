-- FUNCTION: public.get_activity_years()

-- DROP FUNCTION IF EXISTS public.get_activity_years();

CREATE OR REPLACE FUNCTION public.get_activity_years(
	)
    RETURNS TABLE(activityyear numeric) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
begin
	return query 
		SELECT   
			EXTRACT(YEAR FROM TO_DATE(_date,'YYYY-MM-DD')) as activityYear 
		FROM activity
		WHERE 
			_date != '' AND 
			_delete = 'false'
		GROUP BY activityYear
		ORDER BY activityYear;
end;
$BODY$;

ALTER FUNCTION public.get_activity_years()
    OWNER TO acehome;
