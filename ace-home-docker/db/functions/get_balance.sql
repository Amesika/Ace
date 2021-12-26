-- FUNCTION: public.get_balance()

-- DROP FUNCTION IF EXISTS public.get_balance();

CREATE OR REPLACE FUNCTION public.get_balance(
	)
    RETURNS integer
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
declare
   balance integer;
begin
   select (get_total('source') - get_total('depense'))as balance
   into balance;
   return balance;
end;
$BODY$;

ALTER FUNCTION public.get_balance()
    OWNER TO acehome;