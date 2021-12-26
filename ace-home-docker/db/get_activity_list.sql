select _date,amount,_type from activity
where activity._date between '2017-01-01' and'2023-12-31'
and _type = 'depense'
order by _date