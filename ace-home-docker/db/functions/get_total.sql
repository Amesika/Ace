-- FUNCTION: public.get_total(character varying)

-- DROP FUNCTION IF EXISTS public.get_total(character varying);

CREATE OR REPLACE FUNCTION public.get_total(
	type character varying)
    RETURNS integer
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
declare
   total_amount integer;
begin
   select sum(amount) 
   into total_amount
   from activity
   where activity._type = type;
   
   return total_amount;
end;
$BODY$;

ALTER FUNCTION public.get_total(character varying)
    OWNER TO acehome;
